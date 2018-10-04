/**
 * Created by Stas on 03.10.2018.
 */
import React, {Component} from "react";
import tableConfig from "../../../tableConfig";
import ReactHtmlParser from 'react-html-parser';

export default class Price extends Component {
    render() {
        const {disclaimer, price} = this.props;
        let inputField;
        if (Array.isArray(price)) {
            inputField = (
                <div className="col-md-4 col-lg-3 input-group">
                    <input type="text" className="form-control" value={price[0]}/>
                    <span className="ml-1 mr-1">~</span>
                    <input type="text" className="form-control" value={price[1]}/>
                </div>
            )
        } else if (typeof price.price !== 'undefined') {
            inputField = (
                <div className="col-md-4 col-lg-3 input-group">
                    <input type="text" className="form-control" value={(price.price %1 === 0) ? price.price.toFixed(2) : price.price}/>
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