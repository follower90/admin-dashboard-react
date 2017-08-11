export default function usersReducer(state = { menu: [], item: {} }, action) {
    switch (action.type) {
        case 'DELETE_USER_ITEM':
          alert(JSON.stringify(action))

        default:
            return state
    }
}
