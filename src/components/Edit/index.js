/**
 * Created by Stas on 03.10.2018.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import Price from './Price/index'

class Edit extends Component {
    render() {
        const {tableData, isVisible} = this.props;
        const passPrice = isVisible === 0 ? tableData[0].price.split('~') : tableData[isVisible];
        return (
            <div style={isVisible >= 0 ? {display: 'block'} : {display: 'none'}}>
                <h2>Зміна тарифів</h2>
                <Price disclaimer={isVisible} price={passPrice} />
            </div>
        )
    }
}

Price.defaultProps = {
    price: 0
};
Price.propTypes = {
    disclaimer: PropTypes.number.isRequired
}

export default Edit;