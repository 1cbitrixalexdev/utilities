/**
 * Created by Stas on 03.10.2018.
 */
import React, {Component} from "react";
//import PropTypes from "prop-types";
import Price from './Price/index'

export default class Edit extends Component {
    render() {
        const {isVisible, tableData} = this.props;
        const electricityPrice = tableData[0].price.split('~');
        return (
            <div style={isVisible ? {display: 'block'} : {display: 'none'}}>
                <h2>Зміна тарифів</h2>
                <Price disclaimer={0} price={electricityPrice} />
            </div>
        )
    }
}

