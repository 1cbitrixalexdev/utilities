/**
 * Created by Stas on 03.10.2018.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import Price from './Price/index'

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: this.props.tableData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (index, val) => {
        /*this.setState({
            tableData: this.state.tableData.map((row, i) => (
                i === index ? {...row, 'price': val} : row
            ))
        });*/
        //console.log(val);
        //console.log('row number:'+index, 'value new:'+val, this.state.tableData[index].item);
        this.props.setValue(index, 'price', val);
    };

    render() {
        const {tableData, isVisible} = this.props,
            price = (isVisible === 0) ? tableData[0].price.split('~') : tableData[isVisible];

        return (
            <div id="editArea" style={isVisible >= 0 ? {display: 'block'} : {display: 'none'}}>
                <h2>Зміна тарифів</h2>
                <Price disclaimer={isVisible} price={price} tableData={this.props.tableData} followChange={this.handleChange} />
            </div>
        )
    }
}

Price.defaultProps = {
    price: 0
};
Price.propTypes = {
    disclaimer: PropTypes.number.isRequired,
    followChange: PropTypes.func.isRequired
};

export default Edit;