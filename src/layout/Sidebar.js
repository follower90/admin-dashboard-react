import React from 'react'

const Sidebar = () => (
	<div className="navbar-default sidebar" role="navigation">
		<div className="sidebar-nav navbar-collapse">
			<ul className="nav" id="side-menu">
	      <li><a href="/admin/"><i className="fa fa-fw"></i>Панель управления</a></li>
	      <li><a href="/admin/menu"><i className="fa fa-fw"></i>Меню</a></li>
			</ul>
		</div>
	</div>
)

export default Sidebar
