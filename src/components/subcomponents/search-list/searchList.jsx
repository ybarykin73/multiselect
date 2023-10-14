import './searchList.css'

const SearchList = (props) => {
  const {
    list,
    onClick
  }= props

  if (!list.length) return null

  return (
    <ul className="search-list">
    {
      list.map(item => (
        <li 
          className="search-list__item" 
          key={item.id}
        >
          <button
            className='search-list__button'
            onClick={() => onClick(item)}
            dangerouslySetInnerHTML={{__html: item.text}} 
          />
        </li>
      ))
    }
  </ul>
  )
}

export default SearchList