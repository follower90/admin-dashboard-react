export default function menuReducer(state = { menu: [], item: {} }, action) {
    switch (action.type) {
        case 'MENU_ITEMS_FETCH_DATA_SUCCESS':
            return Object.assign({}, state, {
                menu: action.items
            })

        case 'MENU_ITEM_FETCH_DATA_SUCCESS':
          return Object.assign({}, state, {
              item: action.item
          })

        case 'SAVE_MENU_ITEM':
          return state;

        case 'DELETE_MENU_ITEM':
          let menu = [];
          state.menu.forEach(i => { if (i.id !== action.id) menu.push(i) })
          return Object.assign({}, state, {
            menu: menu
          })

        default:
            return state
    }
}
