import React from "react";
import './terminalTableRow.scss';

export default function TerminalTableRow({ terminalInfo, onDelete }) {
    const { name, desc } = terminalInfo;
    return (
        <tr>
            <th scope="row" className="terminal-table-row-item">{name}</th>
            <td className="terminal-table-row-data test">
                {desc}
                <button onClick={onDelete}>delete</button>
            </td>
        </tr>
    );
}
