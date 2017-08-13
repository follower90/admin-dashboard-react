import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, lifecycle } from 'recompose'
import { itemFetchData, saveMenuItem } from './../actions/MenuActionCreators'

const mapStateToProps = state => ({ item: state.menuReducer.item });
const enhance = compose(
  withState('name', 'setName'),
  withState('url', 'setUrl'),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(itemFetchData(this.props.routeParams.id))
    },
    componentWillReceiveProps(props) {
      const { item, url, name } = props;
      this.setState({
        name: name || item.name,
        url: url || item.url,
      })
    }
  }),
)

const MenuForm = enhance(({ name, url, setName, setUrl, history, dispatch }) => {
    return (
      <div>
          <h1>Меню edit page</h1>
          <div className="form">
              <input type="hidden" name="id" value="2" />
              <div className="form-group">
                  <label>Имя</label>
                  <input className="form-control" name="name" onChange={e => setName(e.target.value)} value={name} />
              </div>
              <div className="form-group">
                  <label>Ссылка</label>
                  <input className="form-control" name="url"  onChange={e => setUrl(e.target.value)} value={url} />
              </div>
              <div className="form-group">
                  <input type="submit" className="btn btn-default" onClick={() => dispatch(saveMenuItem({name: name, url: url}))} value="Сохранить" />
                  <input type="button" className="btn btn-cancel" onClick={() => history.goBack()} value="Отмена" />
              </div>
          </div>
      </div>
    )
})

export default connect(mapStateToProps)(MenuForm)
