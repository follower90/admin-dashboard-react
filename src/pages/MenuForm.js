import React from 'react'
import { connect } from 'react-redux'
import { itemFetchData, saveMenuItem } from './../actions/MenuActionCreators'

class MenuForm extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = this.props.item

    this.changeName = this.changeName.bind(this);
    this.changeUrl = this.changeUrl.bind(this);
  }

  changeName(event) {
    this.setState({name: event.target.value});
  }

  changeUrl(event) {
    this.setState({url: event.target.value});
  }

  componentDidMount() {
    this.props.dispatch(itemFetchData(this.props.routeParams.id))
  }

  componentWillReceiveProps(props) {
    this.setState(props.item);
  }

  render() {
    return (
      <div>
          <h1>Меню edit page</h1>

          <div className="form">
              <input type="hidden" name="id" value="2" />
              <div className="form-group">
                  <label>Имя</label>
                  <input className="form-control" name="name" onChange={this.changeName} value={this.state.name} />
              </div>
              <div className="form-group">
                  <label>Ссылка</label>
                  <input className="form-control" name="url"  onChange={this.changeUrl}  value={this.state.url} />
              </div>

              <br />

              <div className="form-group">
                  <input type="submit" className="btn btn-default" onClick={() => this.props.dispatch(saveMenuItem(this.state))} value="Сохранить" />
                  <input type="button" className="btn btn-cancel" onClick={() => this.props.history.goBack()} value="Отмена" />
              </div>
          </div>
      </div>
    )
  }
}

export default connect(state => ({ item: state.menuReducer.item }))(MenuForm)
