import React, { useState } from "react";
import './terminalAddForm.scss'

const TerminalAddForm = ({addNew}) => {
    const [terminalName, setTerminalName] = useState("");
    const [termianDesc, setTermianDesc] = useState("");

    const onAddNew = (e) => {
        e.preventDefault();
        addNew(terminalName, termianDesc);
        setTerminalName("");
        setTermianDesc("");
    }

    return (
        <div className="terminal-add-form-wrapper">
            <form onSubmit={onAddNew} className="terminal-add-form col-8">
                <fieldset className="form-group terminal-name-wrapper">
                    <input
                        type="text"
                        className='form-control '
                        placeholder="terminal name"
                        value={terminalName}
                        onChange={(e) => setTerminalName(e.target.value)}
                    />
                </fieldset>

                <fieldset className="form-group terminal-name-wrapper">
                    <input
                        type="text"
                        className='form-control'
                        autoComplete="current-pass"
                        placeholder="terminal description"
                        value={termianDesc}
                        onChange={(e) => setTermianDesc(e.target.value)}
                    />
                </fieldset>
                <div className="text-center">
                    <button
                        className="btn btn-outline-light btn-md"
                        type="submit"
                    >
                        add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TerminalAddForm;
