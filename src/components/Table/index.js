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
        this.defaultData = startData;
        this.handleChange = this.handleChange.bind(this);
        this.resetToDefaults = this.resetToDefaults.bind(this);
        this.clearFields = this.clearFields.bind(this);
    }

    resetToDefaults = () => {
        this.props.resetValues();
    }

    clearFields = () => {
        this.props.clearValues();
    }

    handleChange = (index, item, val) => {
        //if (val%1 !== 0) val = val.replace(/[^\d.]/g,'')
        this.props.setValue(index, item, val);
    };

    countTotal = () => {
        let result = 0;
        for (let i = 0; i < this.props.tableData.length; i++) {
            result += parseFloat(this.props.tableData[i].rowTotal())
        }
        return result.toFixed(2)
    };

    render() {
        const tableHeaders = Object.keys(this.props.tableConfig.tableHeaders).map((key, index) => {
            const myItem = this.props.tableConfig.tableHeaders[key];
            return <th className="col-2" key={index}>{myItem}</th>
        });
        const rows = this.props.tableData.map((row, i) =>
            <Row key={i}
                 tableData={this.props.tableData[i]}
                 dataNum={i}
                 followChanges={this.handleChange}
                 editThis={this.props.editNum} />);
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
                    <button onClick={this.resetToDefaults} className="btn btn-secondary mr-1" title="Стерти виправлене, вивести дані для прикладу">Скинути</button>
                    <button onClick={this.clearFields} className="btn btn-warning" title="Обнулити всі дані крім тарифів">Очистити</button>
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