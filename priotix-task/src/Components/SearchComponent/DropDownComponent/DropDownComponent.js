import React from "react";
import { TournamentItem } from "../../../Shared/TournamentItem";

export const DropDown = (props) => {
    return (
        <div className="search-list">
            {
                props.data.length ?
                    props.data.map((item) =>
                        <TournamentItem
                            key={item.id}
                            itemClass="search-item"
                            item={item}
                            addToBasket={props.addToBasket} />)
                    :
                    <div className="text-center  no-items">No Results Found</div>
            }
        </div>
    );
};