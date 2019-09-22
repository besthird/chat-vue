import Vue from 'vue'

const ws = {
    state: {
        // 用户信息
        users: [],
        // 选中人物
        user: {
        },
        // 消息
        messages: {
            
        }
    },

    mutations: {
        SET_USER: (state, user) => {
            let data = {}
            user.forEach(item => {
                data[item.id] = []
            });
            // Vue.set(state,'messages', data)
            state.messages = data
            state.users = user
        },
        SET_MESSAGE: (state, data) => {
            let id = data.id
            if (!id) {
                id = state.user.id
            }
            if (!id) {
                return
            }
            let oldMessage = state.messages,
                message = state.messages[id]
            if (!message) {
                message = []
            }
            message.push(data)
            oldMessage[id] = message
            
            let newMessage = oldMessage
            state.messages = newMessage
            // Vue.set(state,'messages', newMessage)
        },
        SET_USER_ID: (state, user) => {
            state.user = user
        },
    },

    actions: {}
}

export default ws