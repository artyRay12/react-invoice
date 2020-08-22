import React from "react";

const Pagination = ({
    tableCurrentSize,
    tableTotalSize,
    onCurrentPageChange,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(tableTotalSize / tableCurrentSize); i++)
        pageNumbers.push(i);

    return (
        <div>
            <nav aria-label="...">
                <ul className="pagination pagination-sm">
                    {pageNumbers.map((number) => {
                        return (
                            <li className="page-item" key={number}>
                                <button
                                    href="#"
                                    className="page-link"
                                    onClick={() => onCurrentPageChange(number)}
                                >
                                    {number}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
