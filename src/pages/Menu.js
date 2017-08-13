import React from 'react'
import Grid from './../components/grid/Grid'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { deleteMenuItem, itemsFetchData } from './../actions/MenuActionCreators'

const gridFields = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Имя' },
  { key: 'url', label: 'URL' },
]
const gridActions = {
  row: {
    deleteItem: deleteMenuItem
  }
}

const mapStateToProps = state => ({ items: state.menuReducer.menu })
const enhance = lifecycle({
  componentDidMount() {
    this.props.dispatch(itemsFetchData())
  }
})

const Menu = enhance(({ deleteItem, items }) => {
    return (
      <div>
        <h1>Меню</h1>
        <Grid type="menu" items={items} fields={gridFields} actions={gridActions} />
      </div>
    );
})

export default connect(mapStateToProps)(Menu)
