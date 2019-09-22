
const ws = {
    state: {
        // 用户信息
        users: []
    },

    mutations: {
        SET_USER: (state, user) => {
            state.users = user
        },
    },

    actions: {}
}

export default ws