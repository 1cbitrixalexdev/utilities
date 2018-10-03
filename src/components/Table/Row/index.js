/**
 * Created by Stas on 10.09.2018.
 */
import React, {Component} from "react";
import './styles.css';

export default class Row extends Component {

    render() {
        const {row, followChanges, tableData, dataNum, edit} = this.props;
        const cellCurrent = (row.current !== '') && <input
                type="text"
                name={row.id+'Current'}
                id={row.id+'Current'}
                value={tableData.current ? tableData.current : 0}
                onChange={e => followChanges(dataNum, 'current', e.target.value || '')}
                className="form-control text-right"
            />;
        const cellPrevious = (row.current !== '') && <input
                type="text"
                name={row.id+'Previous'}
                id={row.id+'Previous'}
                value={tableData.previous ? tableData.previous : 0}
                onChange={e => followChanges(dataNum, 'previous', e.target.value || '')}
                className="form-control text-right"
            />;
        const cellUsed = (typeof row.used === 'number') ? <input
                type="text"
                name={`${row.id}Used`}
                id={`${row.id}Used`}
                value={tableData.used ? tableData.used : 0}
                onChange={e => followChanges(dataNum, 'used', e.target.value || '')}
                className="form-control text-right"
            /> : tableData.used();
        return (
            <tr className="d-flex">
                <td className="col-2">{row.service}</td>
                <td title="Натисніть, щоб редагувати" onClick={edit} className="col-2">{row.price %1 === 0 ? row.price.toFixed(2) : row.price}</td>
                <td className="col-2">{cellCurrent}</td>
                <td className="col-2">{cellPrevious}</td>
                <td className="col-2">{cellUsed}<small>{row.units}</small></td>
                <td className="col-2">{tableData.rowTotal()}</td>
            </tr>
        )
    }
}