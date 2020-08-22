import React from "react";
import "./terminalTableRow.scss";

export default function TerminalTableRow({ terminalInfo, onDelete }) {
    const { name, desc } = terminalInfo;
    return (
        <tr>
            <th scope="row" className="terminal-table-row-item">
                {name}
            </th>
            <td className="terminal-table-row-data test">{desc}</td>
            <td className="termunal-table-row-button">
                {" "}
                <button
                    type="button"
                    className="btn btn-outline-light btn-sm"
                    onClick={onDelete}
                >
                    X
                </button>
            </td>
        </tr>
    );
}
