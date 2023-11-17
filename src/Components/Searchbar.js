import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = ({ setSearchResults }) => {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        implementSearch()
    }, [])

    

    function implementSearch(event) {
        if (event) {
            event.preventDefault()
        }
        axios.get("https://api.unsplash.com/search/photos", {
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
            },
            params: {
                query: searchTerm || "random"
            }
        })
            .then(response => {
                setSearchResults(response.data.results)
                setSearchTerm("")
            }).catch(error => console.log(error))
    }

    return (
        <div>
            <form onSubmit={implementSearch}>
                <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SearchBar;