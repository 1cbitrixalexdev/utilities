import React, {Component} from "react";
import tableData from "../tableData.js";
import tableConfig from "../tableConfig.js";
import Table from "./Table/index";
import Edit from "./Edit/index";
import PropTypes from "prop-types";
import "./styles.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: -1,
            tableData: tableData
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (num) => {
        this.setState({
            isVisible: num
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Комунальний чек</h1>
                <Table tableData={this.state.tableData} tableConfig={tableConfig} editNum={this.handleClick} />
                <Edit tableData={this.state.tableData} isVisible={this.state.isVisible} />
                <div id="footer" className="text-muted small">
                    <p>&copy; &laquo;Комунальний чек&raquo;, версія 1.1 (beta)</p>
                    <p>Розроблено: <a href="https://www.alex.kr.ua/dev/">Пономарьов Станіслав</a>, за допомогою <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React.js</a> з використанням <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a><br />Якщо ви помітили якусь помилку чи стикнулися із проблемою, обраховуючи результати, будь ласка, зверніться на мою пошту <a href="mailto:ponomaryov.stas@gmail.com" rel="noopener noreferrer">ponomaryov.stas@gmail.com</a>
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
Edit.propTypes = {
    tableData: PropTypes.array.isRequired,
    isVisible: PropTypes.number
};

export default App;

// TODO:
