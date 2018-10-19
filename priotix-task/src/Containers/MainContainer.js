import React, { Component } from 'react';
import axios from 'axios';
import { Search } from '../Components/SearchComponent/SearchComponent';
import { Basket } from '../Components/BasketComponent';
import { Modal } from '../Components/ModalComponent';

class MainContainer extends Component {
    state = {
        data: null,
        isSearchFocused: false,
        basketItems: JSON.parse(localStorage.getItem("basketItems")) || [],
        showModal: false,
        showFullItem: {},
    };

    sendRequest = (value) => {
        const url = `https://api-search.priotix.xyz/search?q=${value}&index=tournament`;
        axios.get(url)
            .then(res => this.setState({ data: res.data.length ? res.data[0].documents : res.data }))
            .catch(err => alert("something was wrong on server"));
    };

    handleSearch = (e) => {
        let value = e.target.value;
        value.length > 1 ? this.sendRequest(value) : this.setState({ data: null });
    };

    addToBasket = (item) => {
        let basketItems = this.state.basketItems;
        let canBeAdded = basketItems.every((basketItem) => basketItem.id !== item.id);
        if (!canBeAdded) return alert("Tournament has already been added");
        basketItems.push(item);
        localStorage.setItem("basketItems", JSON.stringify(basketItems))
        this.setState({ basketItems })
    };

    deleteFromBasket = (item, i) => {
        let basketItems = this.state.basketItems;
        basketItems.splice(i, 1);
        localStorage.setItem("basketItems", JSON.stringify(basketItems))
        this.setState({ basketItems })
    };

    render() {
        return (
            <div className="content">
                <Search
                    handleSearch={this.handleSearch}
                    isSearchFocused={this.state.isSearchFocused}
                    data={this.state.data}
                    handleSearchFocus={() => this.setState({ isSearchFocused: true })}
                    handleSearchBlur={() => setTimeout(() => this.setState({ isSearchFocused: false }), 300)}
                    addToBasket={this.addToBasket} />
                <Basket
                    basketItems={this.state.basketItems}
                    deleteFromBasket={this.deleteFromBasket}
                    showFullItem={(item) => this.setState({ showModal: true, showFullItem: item })} />
                {
                    this.state.showModal &&
                    <Modal
                        item={this.state.showFullItem}
                        closeModal={() => this.setState({ showModal: false })} />
                }
            </div>
        );
    };
};

export default MainContainer;