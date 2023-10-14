import React from "react"

import SelectList from '../subcomponents/select-list/selectList'
import SearchList from "../subcomponents/search-list/searchList"

import Data from '../list.json'
import './main.css'

const Main = () => {
  const [inputValue, setInputValue] = React.useState('')
  const [selectList, setSelectList] = React.useState([])
  const [originalList, setOriginalList] = React.useState(Data.City)
  const [filterList, setFilterList] = React.useState(Data.City)

  const clearSelectList = () => {
    setSelectList([])
    setOriginalList(Data.City)
    setFilterList(Data.City)
  }

  const changeSearchInput = (value) => {
    setInputValue(value)
    const itemInclude = originalList.filter(item => {
      return item.text.toLowerCase().includes(value.toLowerCase())
    })

    setFilterList(itemInclude.map(item => {
          return {...item, text: selectionText(item.text, value)}
        } 
      )
    )
  }

  const selectItem = (item) => {
    setSelectList([...selectList, ...Data.City.filter(a => a.id === item.id)])
    setOriginalList([...originalList.filter(a => a.id !== item.id)])
    setFilterList([...originalList.filter(a => a.id !== item.id)])
    setInputValue('')
  }

  return (
    <div className="main">
      <SelectList 
        list={selectList}
        clearList={clearSelectList}
      />
      <div className="main__search-block">
        <input 
          className="main__input" 
          type="text" 
          onChange={(e) => changeSearchInput(e.target.value)}
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