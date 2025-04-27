import {handleNextPage, handlePrevPage} from "../../helpers/handlers.ts";
import {useSearchParams} from "react-router-dom";

const Pagination = () => {

    const [query, setQuery] = useSearchParams({
        page: '1'
    })


    return (
            <div>
                <button onClick={() => {
                    handlePrevPage(+(query.get('page') || '1'), setQuery)
                }}>prev
                </button>
                <button onClick={() => {
                    handleNextPage(+(query.get('page') || '1'), setQuery)
                }}>next
                </button>
            </div>
    );
};

export default Pagination;