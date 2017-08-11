import React from 'react'
import Grid from './../components/grid/Grid'
import { connect } from 'react-redux'

import { deleteMenuItem, itemsFetchData } from './../actions/MenuActionCreators'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.props = props;
  }

  componentDidMount() {
    this.props.dispatch(itemsFetchData())
  }

  render() {
    return (
      <div>
        <h1>Меню</h1>
        <Grid type="menu"
          items={this.props.menu}
          actions={{
              row: {
                deleteItem: deleteMenuItem
              }
            }}
          fields={[
            { key: 'id', label: 'ID' },
            { key: 'name', label: 'Имя' },
            { key: 'url', label: 'URL' }
          ]} />
      </div>
    )
  }
}

export default connect(state => ({ menu: state.menuReducer.menu }))(Menu)
