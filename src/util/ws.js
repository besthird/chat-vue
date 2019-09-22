import vue from 'vue'

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
            if(!!res && res.protocal) {
                global.vue.$store.commit('SET_USER', res.list)
            }
        }
        ws.onerror = (evt) => {
            ws.close()
        }
        this.ws = ws
    }
}