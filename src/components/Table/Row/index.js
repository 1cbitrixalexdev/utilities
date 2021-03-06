/**
 * Created by Stas on 10.09.2018.
 */
import React, {Component} from "react";
import "./styles.css";

class Row extends Component {
    render() {
        const {followChanges, tableData, dataNum, editThis} = this.props;
        const cellCurrent = (!(tableData.current instanceof Function)) ? <input
                type="text"
                value={tableData.current ? tableData.current : 0}
                onChange={e => followChanges(dataNum, 'current', e.target.value.replace(/^0+/, ''))}
                className="form-control text-right"
                maxLength={12}
            /> : tableData.current();
        const cellPrevious = (!(tableData.previous instanceof Function)) ? <input
                type="text"
                value={tableData.previous ? tableData.previous : 0}
                onChange={e => followChanges(dataNum, 'previous', e.target.value.replace(/^0+/, ''))}
                className="form-control text-right"
                maxLength={12}
            /> : tableData.previous();
        const cellUsed = (!(tableData.used instanceof Function)) ? <input
            type="text"
            name={`${tableData.id}Used`}
            id={`${tableData.id}Used`}
            value={(tableData.used ) ? tableData.used : 0}
            onChange={e => followChanges(dataNum, 'used', e.target.value.replace(/^0+/, ''))}
            className="form-control text-right"
            maxLength={12}
        /> : tableData.used();
        return (
            <tr className="d-flex">
                <td className="col-2">{tableData.service}</td>
                <td title="Натисніть, щоб редагувати" onClick={e => editThis(dataNum)}
                    className="col-2">{/*tableData.price % 1 === 0 ? tableData.price.toFixed(2) : tableData.price*/ tableData.price}</td>
                <td className="col-2">{cellCurrent}</td>
                <td className="col-2">{cellPrevious}</td>
                <td className="col-2">{cellUsed}
                    <small>{tableData.units}</small>
                </td>
                <td className="col-2">{tableData.rowTotal()}</td>
            </tr>
        )
    }
}

export default Row;
// TODO: