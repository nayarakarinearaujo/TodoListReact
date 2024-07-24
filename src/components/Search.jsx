

// eslint-disable-next-line react/prop-types
const Search = ({search, setSearch}) => {
    return (
      <div className="search">
          <h2>Pesquisar:</h2>
          <input type="text" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="Digite para pesquisar..." />
      </div>
    )
  }
  
  export default Search