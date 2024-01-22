import { changeSearchTerm } from "../store";
import { useSelector, useDispatch } from "react-redux";

function CarSearch() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm;
    });


    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    };

    return (
        <div className="list-header">
            <h3 className="title is-3">  My cars </h3>
            <div className="search field is-horizontal">
                <label className="label"> search </label>
                <input className="input" value={searchTerm} onChange={handleSearchTermChange}/>
            </div>
        </div>
    );
}


export default CarSearch;