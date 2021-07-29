import React from "react";

const Filter = ({newFilter, setNewFilter}) => {
    const handleSearchChange = (event) => {
        setNewFilter(event.target.value)
    }

    return (
        <div>
            filter shown with <input
                value={newFilter}
                onChange={handleSearchChange}/>
        </div>
    )
}

export default Filter