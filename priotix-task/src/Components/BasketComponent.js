import React from "react";
import { TournamentItem } from "../Shared/TournamentItem";

export const Basket = (props) => {
    return (
        <div className="field">
            <div className="basket-items-header">YOUR SELECTED TOURNAMENTS</div>
            <div className="items-field">
                <div className="items-row">
                    {
                        props.basketItems.map((item, i) =>
                            <TournamentItem
                                key={item.id}
                                itemClass="basket-item"
                                item={item}
                                index={i}
                                showFullItem={props.showFullItem}
                                handleDelete={props.deleteFromBasket} />)
                    }
                </div>
                {!props.basketItems.length && <div className="text-center pt-3 no-items">no tournaments</div>}
            </div>
        </div>
    );
};