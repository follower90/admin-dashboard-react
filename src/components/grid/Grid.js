import React from 'react'
import GridRow from './GridRow'

const Grid = ({ type, fields, actions, items }) => (
  <table className="table table-sortable table-bordered dataTable">
      <thead>
          <tr>
              {fields.map(col =>
                <th key={`grid-${type}-col-${col.key}`}>{col.label}</th>
              )}
              <th>Действия</th>
          </tr>
      </thead>
      <tbody>
          {items.map(item =>
            <GridRow type={type} key={`grid-${type}-${item.id}`} fields={fields} item={item} actions={actions.row} />
          )}
      </tbody>
  </table>
)

export default Grid
