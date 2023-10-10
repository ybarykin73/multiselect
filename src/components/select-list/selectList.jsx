import './selectList.css'

const SelectList = (props) => {
    const {
        list,
    } = props

    if (!list.length) {
        return null
    }
    
    return (
        <ul className="select-list">
            {
                list.map(item => (
                    <li 
                        className='select-list__item' 
                        key={item.id}
                    >
                        {item.text}
                    </li>
                ))
            }
        </ul>
    )
}

export default SelectList