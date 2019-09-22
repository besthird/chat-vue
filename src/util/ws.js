export class ChatWebSocket {

    /**
     * 单例
     */
    static getInstance(token) {
        if (!ChatWebSocket.instance) {
            ChatWebSocket.instance = new ChatWebSocket(token)
        }
        return ChatWebSocket.instance
    }

    /**
     * 构造函数
     */
    constructor(token) {
        this.url = `ws://127.0.0.1:9501?token=${token}`
        let ws = new WebSocket(this.url)
        
        // 连接
        ws.onopen = (evt) => {
            console.log(evt)
        }

        // 关闭
        ws.onclose = (evt) => {
            console.log('disconnected websocket!')
        }
        ws.onmessage = (evt) => {
            var res = JSON.parse(evt.data)
            console.log(res)
            if(!!res && res.protocal == 'user.list') {
                global.vue.$store.commit('SET_USER', res.list)
                res.list.forEach(item => {
                    if (item.token == token) {
                        this.id = item.id
                    }
                });
            }
            if(!!res && res.protocal == 'send.message') {
                // console.log(res)
                let data = {
                    content: res.data.message,
                    id: res.data.send_id
                }
                global.vue.$store.commit('SET_MESSAGE', data)
            }
        }
        ws.onerror = (evt) => {
            ws.close()
        }
        this.ws = ws
    }

    send (val, user) {
        if(!user) {
            return
        }
        let data = {
            content: val,
            self: true
        },
            param = {
                protocal : 'send.message',
                data : {
                    send_id : this.id,
                    id: user.id,
                    message: val
                }
            }
        global.vue.$store.commit('SET_MESSAGE', data)
        this.ws.send(JSON.stringify(param))
    }
}