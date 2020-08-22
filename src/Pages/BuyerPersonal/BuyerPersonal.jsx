import React from "react";
import { data } from "../Buyers/data";
import { Link, Redirect } from "react-router-dom";

const BuyerPersonal = (props) => {
    const slug = props.match.params.slug;

    if (slug > 14 || slug < 0) {
        return <Redirect to="/error/" />;
    }

    return (
        <div className="buyers-personal-wrapper">
            <div className="jumbotron bg-dark text-light">
                <p> {`Name:  ${data[slug].name}`}</p>
                <p> {`Средний чек:  ${data[slug].avg}`}</p>
                <p> {`Всего покупок:  ${data[slug].buyCount}`}</p>
                <p>{`Общая вырчучка:  ${data[slug].total}`}</p>
                <Link to="/buyers/">Back</Link>
            </div>
        </div>
    );
};

export default BuyerPersonal;
