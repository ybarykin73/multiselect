import './selectList.css'

const SelectList = (props) => {
  const {
    list,
    clearList
  } = props
  
  return (
    <div className="select-block">
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
      {
        !!list.length &&
        <button 
          className='select-block__clear-button'
          onClick={clearList}
          aria-label='Очистить список'
        >
          Очистить список
        </button>
      }
    </div>
  )
}

export default SelectList