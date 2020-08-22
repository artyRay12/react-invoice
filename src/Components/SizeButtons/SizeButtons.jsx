import React from "react";

export default function SizeButtons({ onSizeChange }) {
    return (
        <div className="m-left">
            <div
                className="btn-group btn-group"
                role="group"
                aria-label="Basic example"
            >
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => onSizeChange(5)}
                >
                    5
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => onSizeChange(10)}
                >
                    10
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => onSizeChange(15)}
                >
                    15
                </button>
            </div>
        </div>
    );
}
