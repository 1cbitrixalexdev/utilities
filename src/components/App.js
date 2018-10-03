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
            isVisible: !this.state.isVisible
        })
    }

    render() {
        const electricityPrice = tableData[0].price.split('~'),
            priceElectricityFirst = electricityPrice[0],
            priceElectricitySecond = electricityPrice[1];
        return (
            <div className="container">
                <h1>Комунальний чек</h1>
                <Table tableData={this.state.tableData} tableConfig={tableConfig} edit={this.handleClick}/>

                <div id="changeElectricityTariff" style={this.state.isVisible ? {display: 'block'} : {display: 'none'}}>
                    <h2>Зміна тарифів</h2>
                    <div className="row">
                        <div className="col-md-4 col-lg-3 input-group">
                            <input type="text" className="form-control" name={tableData[0].id + "First"} id=""
                                   value={priceElectricityFirst}/>
                            <span className="ml-1 mr-1">~</span>
                            <input type="text" className="form-control" name={tableData[0].id + "Second"} id=""
                                   value={priceElectricitySecond}/>
                        </div>
                        <div className="col-md-8 col-lg-9">
                            <div className="alert alert-warning small">
                                Будьте уважні при зміні тарифу на електроенергію. Тариф подано у конфігурації <b>[тариф
                                до 100 кВт]~[тариф від 100 кВт]</b>, тобто до позначки <b>~</b> вказано тариф, за яким
                                обраховується використана електроенергія до 100 кВт включно, а після позначки - тариф,
                                за яким обраховуються все, що понад 100 кВт. Ціни подано в гривнях. Якщо ви платите за
                                одним тарифом, вкажіть однакові ціни з обох боків.
                            </div>
                        </div>
                    </div>
                </div>

                <div id="footer" className="text-muted small">
                    <p>&copy; &laquo;Комунальний чек&raquo;, версія 1.1 (beta)</p>
                    <p>Розроблено: <a href="https://www.alex.kr.ua/dev/">Пономарьов Станіслав</a>, за допомогою <a
                        href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React.js</a> з
                        використанням <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a><br />Якщо
                        ви помітили якусь помилку чи стикнулися із проблемою, обраховуючи результати, будь ласка,
                        зверніться на мою пошту <a href="mailto:ponomaryov.stas@gmail.com" rel="noopener noreferrer">ponomaryov.stas@gmail.com</a>
                    </p>
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
