import React from "react";
import "./buyersTableRow.scss";
import { NavLink } from "react-router-dom";

const BuyersTableRow = ({ data }) => {
    const { id, name, avg, buyCount, total } = data;
    return (
        <tr>
            <th className="byuers-table-row-data" scope="row">
                <NavLink to={`/buyers/${id}`}>{id}</NavLink>
            </th>

            <td className="byuers-table-row-data">{name}</td>
            <td className="byuers-table-row-data">{avg}</td>
            <td className="byuers-table-row-data">{buyCount}</td>
            <td className="byuers-table-row-data">{total}</td>
        </tr>
    );
};

export default BuyersTableRow;
