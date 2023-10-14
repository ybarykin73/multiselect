import React from "react"

import SelectList from '../select-list/selectList'
import SearchList from "../search-list/searchList"

import Data from '../list.json'
import './main.css'

const Main = () => {
  const [inputValue, setInputValue] = React.useState('')
  const [select, setSelect] = React.useState([])
  const [list, setList] = React.useState(Data.City)
  const [filterList, setFilterList] = React.useState(Data.City)

  const clearSelectList = () => {
    setSelect([])
    setList(Data.City)
    setFilterList(Data.City)
  }

  const change = (value) => {
    setInputValue(value)
    const itemInclude = list.filter(item => {
      return item.text.toLowerCase().includes(value.toLowerCase())
    })

    setFilterList(itemInclude.map(item => {
          return {...item, text: selectionText(item.text, value)}
        } 
      )
    )
  }

  const selectItem = (item) => {
    setSelect([...select, ...Data.City.filter(a => a.id === item.id)])
    setList([...list.filter(a => a.id !== item.id)])
    setFilterList(filterList.filter(a => a.id !== item.id))
    setInputValue('')
  }

  return (
    <div className="main">
      <SelectList 
        list={select}
        clearList={clearSelectList}
      />
      <div className="main__search-block">
        <input 
          className="main__input" 
          type="text" 
          onChange={(e) => change(e.target.value)}
          value={inputValue}
        />
        <SearchList 
          list={filterList}
          onClick={selectItem}
        />
      </div>
    </div>
  )
}

const selectionText = (str, text) => {
  const regexp = new RegExp(text, 'ig')

  return str.replace(regexp, '<b>' + text + '</b>')
}

export default Main