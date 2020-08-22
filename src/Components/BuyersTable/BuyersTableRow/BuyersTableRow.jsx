import React from "react";
import "./buyersTableRow.scss";
import { Redirect, NavLink } from "react-router-dom";

const BuyersTableRow = ({ data }) => {
    const { id, name, avg, buyCount, total } = data;
    return (
        <tr>
            <NavLink to={`/buyers/${id}`}>
                {" "}
                <th className="byuers-table-row-data" scope="row">
                    {id}
                </th>
            </NavLink>
            <td className="byuers-table-row-data">{name}</td>
            <td className="byuers-table-row-data">{avg}</td>
            <td className="byuers-table-row-data">{buyCount}</td>
            <td className="byuers-table-row-data">{total}</td>
        </tr>
    );
};

export default BuyersTableRow;
