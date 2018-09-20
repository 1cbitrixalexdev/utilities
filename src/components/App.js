import React, {Component} from "react";
import tableData from "../tableData.js";
import tableConfig from "../tableConfig.js";
import Table from "./Table/index";
import PropTypes from "prop-types";
import "./styles.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            tableData: tableData
        };

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick = () => {
        this.setState({
            isVisible: !this.isVisible
        })
    }

    render() {
        const electricityPrice = tableData[0].price.split('~'),
            priceElectricityFirst = electricityPrice[0],
            priceElectricitySecond = electricityPrice[1];
        return (
            <div className="container">
                <h1>Комунальний чек</h1>
                <Table tableData={this.state.tableData} tableConfig={tableConfig}/>
                <div id="changeElectricityTariff" className="row">
                    <h2>Зміна тарифів</h2>
                    <div className="col-md-4 col-lg-3 input-group">
                        <input type="text" className="form-control" name={tableData[0].id + "First"} id="" value={priceElectricityFirst}/>
                        <span className="ml-1 mr-1">~</span>
                        <input type="text" className="form-control" name={tableData[0].id + "Second"} id="" value={priceElectricitySecond}/>
                    </div>
                    <div className="col-md-8 col-lg-9">
                        <div className="alert alert-warning small">
                            Будьте уважні при зміні тарифу на електроенергію. Тариф подано у конфігурації <b>[тариф до 100 кВт]~[тариф від 100 кВт]</b>, тобто до позначки <b>~</b> вказано тариф, за яким обраховується використана електроенергія до 100 кВт включно, а після позначки - тариф, за яким обраховуються все, що понад 100 кВт. Ціни подано в гривнях. Якщо ви платите за одним тарифом, вкажіть однакові ціни з обох боків.
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

Table.propTypes = {
    tableData: PropTypes.array.isRequired,
    tableConfig: PropTypes.object.isRequired
};

export default App;

// TODO: показать/скрыть поля для ввода тарифа при клике на тариф
