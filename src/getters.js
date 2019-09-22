const getters = {
    users: state => state.ws.users,
    messages: state => state.ws.messages,
    user: state => state.ws.user,
}
export default getters