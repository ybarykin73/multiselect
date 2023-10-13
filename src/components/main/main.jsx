import React from "react"

import SelectList from '../select-list/selectList'
import SearchList from "../search-list/searchList"

import Data from '../list.json'
import './main.css'

const Main = () => {
    const [inputValue, setInputValue] = React.useState('')
    const [select, setSelect] = React.useState([])
    const [list, setList] = React.useState(Data.List)
    const [filterList, setFilterList] = React.useState(Data.List)

    const clearSelectList = () => {
        setSelect([])
        setList(Data.List)
        setFilterList(Data.List)
    }

    const change = (value) => {
        setInputValue(value)
        const itemInclude = list.filter(item => {
            return item.text.toLowerCase().includes(value.toLowerCase())
        })

        setFilterList(itemInclude.map(item => {
                    const newText = item.text.replace(value, '<b>' + value + '</b>')
                    return {...item, text: newText}
                } 
            )
        )
    }

    const selectItem = (item) => {
        setSelect([...select, ...Data.List.filter(a => a.id === item.id)])
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

export default Main