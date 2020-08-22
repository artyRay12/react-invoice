import React from "react";
import BuyersTableRow from "./BuyersTableRow/BuyersTableRow";
import "./buyersTable.scss";

export default function BuyersTable({ state, onSort }) {

    
    return (
        <div className="table-responsive">
            <table className="table table-striped table-dark mt-3">
                <thead>
                    <tr>
                        <th
                            className="byuer-table-titles"
                            scope="col-1"
                            onClick={() => onSort("id")}
                        >
                            ID покупателя
                        </th>
                        <th
                            className="byuer-table-titles"
                            scope="col"
                            onClick={() => onSort("name")}
                        >
                            Имя покупателя
                        </th>
                        <th
                            className="byuer-table-titles"
                            scope="col"
                            onClick={() => onSort("avg")}
                        >
                            Средний чек
                        </th>
                        <th
                            className="byuer-table-titles"
                            scope="col"
                            onClick={() => onSort("buyCount")}
                        >
                            Количество покупок
                        </th>
                        <th
                            className="byuer-table-titles"
                            scope="col"
                            onClick={() => onSort("total")}
                        >
                            Общая выручка
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((elem) => {
                        return <BuyersTableRow data={elem} key={elem.id} />;
                    })}
                </tbody>
            </table>
        </div>
    );
}
