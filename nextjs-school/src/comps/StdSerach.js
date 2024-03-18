'use client';
import './StdSearch.css';
const StdSearch = ({ search, setSearch }) => {
    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="search_box">
            <input className="search" placeholder="검색어" defaultValue={search} onChange={onChangeHandler}></input>
        </div>
    );
};

export default StdSearch;
