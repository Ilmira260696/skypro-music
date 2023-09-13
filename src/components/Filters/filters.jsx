import "./Filters.css"
function Filters() {
    return (
        <div className="centerBlock__filter filter">
                    <div className="filter__title">Искать по:</div>
                    <div className="filter__button button-author _btn-text">
                      исполнителю
                    </div>
                    <div className="filter__button button-year _btn-text">
                      году выпуска
                    </div>
                    <div className="filter__button button-genre _btn-text">
                      жанру
                    </div> 
                    </div> 
    )
      
}

export default Filters;