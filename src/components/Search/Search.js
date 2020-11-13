import Axios from 'axios';
import React, { Component } from 'react';

import "./Search.scss";

const JSON_URL = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

class Search extends Component {
    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        Axios.get(JSON_URL)
        .then(res => {
            console.log(res.data);
        })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    render(){
        return(
            <div>
                <form action="#" class="search">
                    <input type="text" class="search__input" placeholder="Search citizens" />
                    <button class="search__button">
                        <i class="fas fa-search search__icon"></i>
                    </button>
                </form>
            </div>
        )
    }
}

export default Search;