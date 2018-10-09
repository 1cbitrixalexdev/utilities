/**
 * Created by Stas on 03.10.2018.
 */
import React, {Component} from "react";
import tableConfig from "../../../tableConfig";
import ReactHtmlParser from 'react-html-parser';

class Price extends Component {
    render() {
        const {disclaimer, price, tableData, followChange} = this.props;
        let inputField;
        if (Array.isArray(price)) {
            inputField = (
                <div className="col-md-4 col-lg-3 input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={price[0] ? price[0] : 0}
                        onChange={e => followChange(disclaimer, e.target.value, e.target.nextSibling.value)}
                        maxLength={12}
                    />
                    <input
                        type="text"
                        className="form-control text-right"
                        value={price[1] ? price[1] : 0}
                        onChange={e => followChange(disclaimer, e.target.previousSibling.value, e.target.value)}
                        maxLength={12}
                    />
                </div>
            )
        } else if (typeof price.price !== 'undefined') {
            inputField = (
                <div className="col-md-4 col-lg-3 input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={tableData[disclaimer].price ? tableData[disclaimer].price : 0}
                        onChange={e => followChange(disclaimer, e.target.value)}
                        maxLength={12}
                    />
                </div>
            )
        } else {
            inputField = 'Помилка';
        }
        return (
            <div className="row">
                {inputField}
                <div className="col-md-8 col-lg-9">
                    <div className="alert alert-warning small">
                        {ReactHtmlParser(tableConfig.tariffDisclaimers[disclaimer])}
                    </div>
                </div>
            </div>
        )
    }
}

export default Price;
