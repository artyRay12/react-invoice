import React, { useEffect } from "react";
import { useState } from "react";

const FilterPanel = ({ onFilterChange }) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        onFilterChange(value);
    }, [value, onFilterChange]);

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="form-control form-control-lg search-input m-right col-3"
            placeholder="filter by username"
        />
    );
};

export default FilterPanel;
