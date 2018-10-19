import React from 'react';

export const TournamentItem = (props) => {
    let { title, description, image } = props.item;

    let handleClick = (item) => {
        props.itemClass === "basket-item" ? props.showFullItem(item) : props.addToBasket(item);
    };
    
    return (
        <div className={props.itemClass}>
            <div className="item-content" onClick={() => handleClick(props.item)}>
                <img className="img" src={image} alt="Tournament" />
                <div className="item-txt">
                    <div className="header-txt">{title}</div>
                    <div className="description-txt">{description}</div>
                </div>
            </div>
            {props.itemClass === "basket-item" ? <div className="close-button" onClick={() => props.handleDelete(props.item, props.index)} /> : null}
        </div>
    );
};