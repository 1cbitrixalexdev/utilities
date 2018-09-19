/**
 * Created by Stas on 10.09.2018.
 */
import React, {Component} from "react";
import Row from "./Row/index";
import PropTypes from "prop-types";
import './styles.css';

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: this.props.tableData
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (index, item, val) => {
        this.setState({
            tableData: this.state.tableData.map((row, i) => (
                i === index ? {...row, [item]: val} : row
            ))
        })
        //console.log(item);
        //console.log('row number:'+index, 'value new:'+val, this.state.tableData[index].item);
    };

    countTotal = () => {
        let result = 0;
        for (let i = 0; i < this.state.tableData.length; i++) {
            result += parseFloat(this.state.tableData[i].rowTotal())
        }
        return result.toFixed(2)
    };

    render() {

        const tableHeaders = Object.keys(this.props.tableConfig.tableHeaders).map((key, index) => {
            const myItem = this.props.tableConfig.tableHeaders[key];
            return <th key={index}>{myItem}</th>
        });
        const rows = this.props.tableData.map( (row, i) => <Row key={i} row={row} tableData={this.state.tableData[i]} dataNum={i} followChanges={this.handleChange} />);

        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    {tableHeaders}
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="5" className="text-right"><b>Всього</b>:</td>
                    <td>{this.countTotal()}</td>
                </tr>
                </tfoot>
            </table>
        );
    }
}

Row.propTypes = {
    tableData: PropTypes.object.isRequired,
    dataNum: PropTypes.number,
    followChanges: PropTypes.func.isRequired
};