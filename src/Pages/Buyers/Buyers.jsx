import React, { useEffect } from "react";
import { useState } from "react";
import { data } from "./data";
import "./buyers.scss";
import FilterPanel from "../../Components/BuyersFilterPanel/BuyersFilterPanel";
import BuyersTable from "../../Components/BuyersTable/BuyersTable";
import SizeButtons from "../../Components/SizeButtons/SizeButtons";
import Pagination from "../../Components/Pagination/Pagination";

const Buyers = () => {
    const [sortType, setSortType] = useState("ASC");
    const [filter, setFilter] = useState("");
    const [state, setState] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTableSize, setCurrentTableSize] = useState(15);

    useEffect(() => {
        setCurrentPage(1);
    }, [currentTableSize]);

    const onFilterChange = (newFilterText) => {
        setFilter(newFilterText);
    };

    const onSizeChange = (newSize) => {
        setCurrentTableSize(newSize);
    };

    const onSort = (fieldName) => {
        const arr = [...state];
        sortType === "ASC" ? setSortType("DESC") : setSortType("ASC");

        if (sortType === "ASC")
            arr.sort((x, y) => (x[fieldName] > y[fieldName] ? 1 : -1));
        else arr.sort((x, y) => (x[fieldName] < y[fieldName] ? 1 : -1));

        setState(arr);
    };

    const onCurrentPageChange = (newCurrentPageNumber) => {
        setCurrentPage(newCurrentPageNumber);
    };

    const filteredContacts = state.filter((contact) => {
        return contact.name.indexOf(filter) !== -1;
    });

    const calculateDataSelection = () => {
        return [
            (currentPage - 1) * currentTableSize,
            (currentPage - 1) * currentTableSize + currentTableSize,
        ];
    };

    const dataForShow = !filter ? state : filteredContacts;

    return (
        <div className="buyers-wrapper col-md-9 col no-gutters p-0">
            <h2 className="text-light text-center m-4">Buyers</h2>
            <div className="d-flex col p-0 justify-content-between buyers-control-panel">
                <FilterPanel onFilterChange={onFilterChange} />
                <SizeButtons onSizeChange={onSizeChange} />
            </div>

            <BuyersTable
                state={dataForShow.slice(...calculateDataSelection())}
                onSort={onSort}
            />
            <Pagination
                tableCurrentSize={currentTableSize}
                tableTotalSize={15}
                onCurrentPageChange={onCurrentPageChange}
            />
        </div>
    );
};

export default Buyers;
