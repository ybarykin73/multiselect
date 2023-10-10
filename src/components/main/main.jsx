import React from "react"

import SelectList from '../select-list/selectList'
import SearchList from "../search-list/searchList"

import './main.css'

const Main = () => {
    const List = [
        {id: 1, text: 'Ульяновск'},
        {id: 2, text:'Абаза'},
        {id: 3, text:'Балахна'},
        {id: 4, text:'Вичуга'},
        {id: 5, text:'Гдов'},
        {id: 6, text:'Данилов'},
        {id: 7, text:'Ейск'},
        {id: 8, text:'Жуков'},
        {id: 9, text:'Зарайск'},
        {id: 10, text:'Ижевск'},
    ]

    const [text, setText] = React.useState('')
    const [select, setSelect] = React.useState([])
    const [list, setList] = React.useState(List)

    const change = (e) => {
        // setText(e.target.value)
    }

    const selectItem = (item) => {
        setSelect([...select, {id: item.id, text: item.text}])
        setList(list.filter(a => a.id !== item.id))
    }

    return (
        <div className="main">
            <div className="main__header">
                <SelectList list={select} />
            </div>
            <input className="main__input" type="text" onChange={change} />
            <SearchList 
                list={list}
                onClick={selectItem}
            />

        </div>
    )
}

export default Main