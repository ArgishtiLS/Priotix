import React from "react";
import { Input } from "./InputComponent/InputComponent";
import { DropDown } from "./DropDownComponent/DropDownComponent";

export const Search = (props) => {
    let { handleSearch, data, isSearchFocused, handleSearchFocus,
        handleSearchBlur, addToBasket } = props;

    let showDropDown = isSearchFocused && data;
    
    return (
        <div className="field search">
            <Input
                handleSearch={handleSearch}
                handleSearchFocus={handleSearchFocus}
                handleSearchBlur={handleSearchBlur} />
            {showDropDown && <DropDown data={data} addToBasket={addToBasket} />}
        </div>
    );
};