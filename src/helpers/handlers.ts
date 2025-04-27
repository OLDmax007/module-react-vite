import {SetURLSearchParams} from "react-router-dom";

const handleNextPage = (currentPage: number, setQuery: SetURLSearchParams) => {
    const newPage = (++currentPage).toString()
    setQuery({ page: newPage });
    console.log('+', currentPage)
}


const handlePrevPage = (currentPage: number, setQuery: SetURLSearchParams) => {
    if (currentPage > 1) {
        const newPage = (--currentPage).toString()
        setQuery({page: newPage})
        console.log('-', currentPage)
    }
}

export {
    handleNextPage, handlePrevPage
}