import React, { useState } from "react";
import TerminalTable from "../../Components/TerminalTable/TerminalTable";
import TerminalAddForm from "../../Components/TerminalAddForm/TerminalAddForm";

export default function Terminal() {
    const [state, setState] = useState([]);

    const onDelete = (id) => {
        setState(() => {
            return [...state.slice(0, id), ...state.slice(id + 1)];
        });
    };

    const addNew = (newTerminalName, newTerminalDescription) => {
        setState([
            ...state,
            {
                name: newTerminalName,
                desc: newTerminalDescription,
            },
        ]);
    };

    return (
        <div className="col-md-9 col no-gutters p-0 m-auto">
            <h2 className="text-light text-center">Terminal</h2>
            <TerminalAddForm addNew={addNew} />
            <TerminalTable data={state} onDelete={onDelete} />
        </div>
    );
}
