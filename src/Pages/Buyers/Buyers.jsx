import React from "react";
import { useState } from "react";
import { data } from "./data";
import FilterPanel from "../../Components/BuyersFilterPanel/BuyersFilterPanel";
import BuyersTable from "../../Components/BuyersTable/BuyersTable";

const Buyers = () => {
    const [sortType, setSortType] = useState("ASC");
    const [filter, setFilter] = useState("");
    const [state, setState] = useState(data);

    const onFilterChange = (newFilterText) => {
        setFilter(newFilterText);
    };

    const onSort = (fieldName) => {
        const arr = [...state];
        sortType === "ASC" ? setSortType("DESC") : setSortType("ASC");


        if (sortType === "ASC")
            arr.sort((x, y) => (x[fieldName] > y[fieldName] ? 1 : -1));
        else arr.sort((x, y) => (x[fieldName] < y[fieldName] ? 1 : -1));

        setState(arr)
    };

    let filteredContacts = state.filter((contact) => {
        return contact.name.indexOf(filter) !== -1;
    });

    return (
        <div className="offset-1 mt-4 col">
            <h2 className="text-light text-center m-4">Buyers</h2>
            <FilterPanel onFilterChange={onFilterChange} />
            <BuyersTable
                state={filter === "" ? state : filteredContacts}
                onSort={onSort}
            />
        </div>
    );
};

export default Buyers;
