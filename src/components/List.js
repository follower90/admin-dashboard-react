import React, { Component } from 'react'
import Li from './Li'

const List = ({items}) => (
    <ul className="list-group">
      {items.map(function (result) {
        return <Li key={result} data={result}/>
      })}
    </ul>
)

export default List
