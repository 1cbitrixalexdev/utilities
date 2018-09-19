/**
 * Created by Stas on 10.09.2018.
 */
import React, {Component} from "react";
import './styles.css';

export default class Row extends Component {

    render() {
        const {row, followChanges, tableData, dataNum} = this.props;
        const cellCurrent = (row.current !== '') && <input
                type="text"
                name={row.id+'Current'}
                id={row.id+'Current'}
                value={tableData.current}
                onChange={e => followChanges(dataNum, 'current', e.target.value || '')}
                className="form-control text-right"
            />;
        const cellPrevious = (row.current !== '') && <input
                type="text"
                name={row.id+'Previous'}
                id={row.id+'Previous'}
                value={tableData.previous}
                onChange={e => followChanges(dataNum, 'previous', e.target.value || '')}
                className="form-control text-right"
            />;
        const cellUsed = (row.previous === '') ? <input
                type="text"
                name={`${row.id}Used`}
                id={`${row.id}Used`}
                value={tableData.used}
                onChange={e => followChanges(dataNum, 'used', e.target.value || '')}
                className="form-control text-right"
            /> : row.used();
        return (
            <tr>
                <td>{row.service}</td>
                <td>{row.price}</td>
                <td>{cellCurrent}</td>
                <td>{cellPrevious}</td>
                <td>{cellUsed}</td>
                <td>{tableData.rowTotal()}</td>
            </tr>
        )
    }
}