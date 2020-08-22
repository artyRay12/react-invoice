import React from "react";
import "./terminalTable.scss";
import TerminalTableRow from "./TerminalTableRow/TerminalTableRow";

export default function TerminalTable({ data, onDelete }) {
    return (
        <div className="">
            <table className="table table-striped table-dark col-8">
                <thead>
                    <tr>
                        <th scope="col-1" className="terminal-name-column">
                            Название терминала
                        </th>
                        <th scope="col" className="terminal-name-column">
                            Описание терминала
                        </th>
                        <th scope="col" className="terminal-name-column-btn">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, id) => {
                        return (
                            <TerminalTableRow
                                terminalInfo={item}
                                key={id}
                                onDelete={() => onDelete(id)}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
