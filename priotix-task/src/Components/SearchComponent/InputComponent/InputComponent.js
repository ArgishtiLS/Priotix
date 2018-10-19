import React from "react";

export const Input = (props) => {
    return (
        <div className="form-group">
            <label className="label-txt">Enter Term to Search for Tournaments</label>
            <input
                type="text"
                className="form-control w-100"
                placeholder="E.g star"
                onChange={props.handleSearch}
                onFocus={props.handleSearchFocus}
                onBlur={props.handleSearchBlur} />
            <span className="info-txt">word length must be at least 2 characters long</span>
        </div>
    );
};
