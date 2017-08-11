import FetchAsync from './../actions/FetchAsync'

const apiPath = 'http://localhost:3030/admin/';

export function itemsFetchData() {
  return FetchAsync(
    apiPath + 'api.php?method=Menu.index',
    items => ({ type: 'MENU_ITEMS_FETCH_DATA_SUCCESS', items: items.response }),
    bool => ({ type: 'MENU_ITEMS_FETCH_ERROR', error: bool })
  );
}

export function itemFetchData(id) {
  return FetchAsync(
    apiPath + 'api.php?method=Menu.get&id=' + id,
    item => ({ type: 'MENU_ITEM_FETCH_DATA_SUCCESS', item: item.response }),
    bool => ({ type: 'MENU_ITEM_FETCH_ERROR', error: bool })
  );
}

export function saveMenuItem(item) {
  return {
    type: 'SAVE_MENU_ITEM',
    item: item
  }
}

  export function deleteMenuItem(id) {
    return {
      type: 'DELETE_MENU_ITEM',
      id: id
    }
}
