import { customerSearch } from '@/app/api/customer';

const CustomerSearch = ({ search, setSearch, setCustomList }) => {
    const onChangeHandler = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    const onClickHandler = () => {
        customSearch(search);
        setSearch('');
    };

    const customSearch = async (value) => {
        setCustomList([]);
        const result = await customerSearch(value);
        setCustomList([...result]);
        console.log(result);
    };
    return (
        <>
            <input placeholder="고객코드" value={search} onChange={onChangeHandler} />
            <button type="button" onClick={onClickHandler}>
                검색
            </button>
        </>
    );
};

export default CustomerSearch;
