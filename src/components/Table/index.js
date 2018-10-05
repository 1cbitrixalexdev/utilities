/**
 * Created by Stas on 10.09.2018.
 */
import React, {Component} from "react";
import Row from "./Row/index";
import startData from "../../tableData.js";
import PropTypes from "prop-types";
import "./styles.css";

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: this.props.tableData
        };
        this.defaultData = startData;
        this.handleChange = this.handleChange.bind(this);
        this.resetToDefaults = this.resetToDefaults.bind(this);
        this.clearFields = this.clearFields.bind(this);
        this.editThis = this.editThis.bind(this);
    }

    resetToDefaults = () => {
        this.setState({tableData:this.defaultData});
    }

    clearFields = () => {
        let tempArray = [...this.state.tableData];
        tempArray.forEach((item, index) => {
            if (item.current) tempArray[index] = {...tempArray[index], 'current': 0};
            if (item.previous) tempArray[index] = {...tempArray[index], 'previous': 0};
            if (typeof item.used === 'number') tempArray[index] = {...tempArray[index], 'used': 0};
        });
        this.setState({ tableData: tempArray });
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

    editThis = (rowNumber) => {
        console.log('#Row to edit tariff', rowNumber);

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
            return <th className="col-2" key={index}>{myItem}</th>
        });
        const rows = this.props.tableData.map((row, i) => <Row key={i} row={row} tableData={this.state.tableData[i]} dataNum={i} followChanges={this.handleChange} editThis={this.props.editNum} />);
        return (
            <div id="dataSheet" className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr className="d-flex">
                        {tableHeaders}
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                    <tfoot>
                    <tr className="d-flex">
                        <td className="col-12 text-right"><b>Всього</b>: <span>{this.countTotal()}</span></td>
                    </tr>
                    </tfoot>
                </table>
                <div className="text-right">
                    <button onClick={this.resetToDefaults} className="btn btn-secondary mr-1">Скинути</button>
                    <button onClick={this.clearFields} className="btn btn-warning">Очистити</button>
                </div>
            </div>
        );
    }
}

Row.propTypes = {
    tableData: PropTypes.object.isRequired,
    dataNum: PropTypes.number,
    followChanges: PropTypes.func.isRequired,
    editThis: PropTypes.func.isRequired
};

export default Table;