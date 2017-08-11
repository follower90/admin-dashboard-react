import React from 'react'
import Grid from './../components/grid/Grid'
import { deleteUserItem } from './../actions/UserActionCreators'

const User = () => (
  <div>
    <h1>Пользователи</h1>
    <Grid
      type="user"
      actions={{
          row: {
            deleteItem: deleteUserItem
          }
        }}
      fields={[ {key: 'id', label: 'ID'}, {key: 'login', label: 'Логин'}, {key: 'name', label: 'Имя'}]}
      items={[
        {id: 12, name: 'Yura', login: 'nasg36'},
        {id: 13, name: 'Vitaliy', login: 'tetst326'},
        {id: 25, name: 'TestUser', login: 'asd2'}
      ]} />
  </div>
)

export default User
