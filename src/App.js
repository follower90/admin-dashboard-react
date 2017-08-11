import React from 'react'

import Header from './layout/Header'
import Footer from './layout/Footer'
import Sidebar from './layout/Sidebar'

const App = ({children}) => (
  <div>
    <Header/>
    <div className="container" id="page-wrapper">
      <Sidebar/>
      <main>{children}</main>
    </div>
    <Footer/>
  </div>
)

export default App
