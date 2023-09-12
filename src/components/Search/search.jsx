import "./Search.css"
function Seach() {
    return(
        <div className="main__centerBlock centerBlock">
        <div className="centerBlock__search search">
          <svg className="search__svg">
            <use xlinkHref="public/img/icon/sprite.svg#icon-search"></use>
          </svg>
          <input
            className="search__text"
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </div> 
        </div>  
    )  
}
export default Seach;