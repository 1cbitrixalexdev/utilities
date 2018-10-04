/**
 * Created by Stas on 03.10.2018.
 */
import React, {Component} from "react";
import tableConfig from "../../../tableConfig"

export default class Price extends Component {
    render() {
        const {disclaimer, price} = this.props;
        //const inputField = (Array.isArray(price)) ?


        return (
            <div className="row">
                <div className="col-md-4 col-lg-3 input-group">
                    <input type="text" className="form-control" name={1} id="" value={price[0]}/>
                    <span className="ml-1 mr-1">~</span>
                    <input type="text" className="form-control" name={2} id="" value={price[1]}/>
                </div>
                <div className="col-md-8 col-lg-9">
                    <div className="alert alert-warning small">
                        {tableConfig.tariffDisclaimers[disclaimer]}
                    </div>
                </div>
            </div>
        )
    }
}