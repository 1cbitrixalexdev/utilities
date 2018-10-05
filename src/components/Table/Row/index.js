/**
 * Created by Stas on 10.09.2018.
 */
import React, {Component} from "react";
import "./styles.css";

class Row extends Component {

    controlInput(value) {
        console.log('fixing');
        if (value % 1 === 0) {
            return value
        } else {
            return value.toFixed(6)
        }
    }

    render() {
        const {row, followChanges, tableData, dataNum, editThis} = this.props;
        const cellCurrent = (row.current !== '') && <input
                type="text"
                name={row.id + 'Current'}
                id={row.id + 'Current'}
                value={tableData.current ? tableData.current : 0}
                onChange={e => followChanges(dataNum, 'current', parseInt(e.target.value,0) || '')}
                className="form-control text-right"
                maxLength={12}
            />;
        const cellPrevious = (row.current !== '') && <input
                type="text"
                name={row.id + 'Previous'}
                id={row.id + 'Previous'}
                value={tableData.previous ? tableData.previous : 0}
                onChange={e => followChanges(dataNum, 'previous', parseInt(e.target.value,0) || '')}
                className="form-control text-right"
                maxLength={12}
            />;
        const cellUsed = (typeof row.used === 'number') ? <input
            type="text"
            name={`${row.id}Used`}
            id={`${row.id}Used`}
            value={(tableData.used ) ? tableData.used : 0}
            onChange={e => followChanges(dataNum, 'used', e.target.value || '')}
            className="form-control text-right"
            maxLength={12}
        /> : tableData.used();
        return (
            <tr className="d-flex">
                <td className="col-2">{row.service}</td>
                <td title="Натисніть, щоб редагувати" onClick={e => editThis(dataNum)}
                    className="col-2">{row.price % 1 === 0 ? row.price.toFixed(2) : row.price}</td>
                <td className="col-2">{cellCurrent}</td>
                <td className="col-2">{cellPrevious}</td>
                <td className="col-2">{cellUsed}
                    <small>{row.units}</small>
                </td>
                <td className="col-2">{tableData.rowTotal()}</td>
            </tr>
        )
    }
}

export default Row;