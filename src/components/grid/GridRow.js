import React from 'react'
import ActionButtons from './ActionButtons'

const GridRow = ({ fields, item, type, actions, deleteItem }) => (
  <tr key={item.id}>
    {fields.map(field =>
      <td key={item[field.key]}>{item[field.key]}</td>
    )}
    <td>
      <ActionButtons item={item} type={type} actions={actions} deleteItem={deleteItem} />
    </td>
  </tr>)

export default GridRow
