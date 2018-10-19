import React from "react";

export const Modal = (props) => {
    let { title, description, image } = props.item;

    return (
        <div className="item-modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header head">
                        <div className="modal-header-left">
                            <img className="img" src={image} alt="tournment" />
                            <h5 className="modal-title">{title}</h5>
                        </div>
                        <button type="button" className="close" onClick={props.closeModal}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">{description}</div>
                </div>
            </div>
        </div>
    );
};