import React from 'react'
import { connect } from 'react-redux'

const ActionButtons = ({ item, type, actions, deleteItem }) => (
    <div className="btn-group btn-sm">
      <a href={`/admin/${type}/edit/${item.id}`} className="btn btn-sm btn-default">Редактировать</a>
      <a href="#" onClick={ () => deleteItem(actions.deleteItem, item.id)} className="btn btn-sm btn-default">Удалить</a>
    </div>
  )

export default connect(
  state => state,
  dispatch => ({ deleteItem: (action, id) => dispatch(action(id))})
)(ActionButtons)
