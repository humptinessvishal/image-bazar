import React from "react";

const Display = ({ searchResults }) => {

    const style = {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        width: "100px",
        height: "100px"
    }
    return (
        <div style={style}>
            {
                searchResults && (searchResults.map((value, index) =>
                (
                    <div key={index}>
                        <img src={value.urls.small} alt={value.alt_description} />
                        <p>{value.description}</p>
                    </div>
                )
                ))
            }
        </div>
    )
}

export default Display;