import React, {Component} from "react"
import { connect } from 'react-redux'
import {setValue, resetValues, clearValues} from '../actions/PageActions'
import tableConfig from "../tableConfig.js"
import Table from "./Table/index"
import Edit from "./Edit/index"
import PropTypes from "prop-types"
import "./styles.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: -1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (num) => {
        this.setState({
            isVisible: num
        });
        setTimeout(function() {
            window.scrollTo(0, document.body.scrollHeight)
        }, 100);
    }
    render() {
        return (
            <div className="container">
                <h1>Комунальний чек</h1>
                <Table tableData={this.props.store}
                       tableConfig={tableConfig}
                       editNum={this.handleClick}
                       setValue={this.props.setValueAction}
                       resetValues={this.props.resetAction}
                       clearValues={this.props.clearAction}
                />
                <Edit tableData={this.props.store}
                      setValue={this.props.setValueAction}
                      isVisible={this.state.isVisible} />
                <Footer />
            </div>
        );
    }

}

const mapStateToProps = store => {
    //console.log(store)
    return {store}
}

const mapDispatchToProps = dispatch => {
    return {
        setValueAction: (index, item, val) => dispatch(setValue(index, item, val)),
        resetAction: () => dispatch(resetValues()),
        clearAction: () => dispatch(clearValues())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

const Footer = () => {
    return (
        <div id="footer" className="text-muted small">
            <p>&copy; &laquo;Комунальний чек&raquo;, версія 1.2 (beta)</p>
            <p>Розроблено: <a href="https://www.alex.kr.ua/dev/">Пономарьов Станіслав</a>, за допомогою <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React.js</a> з використанням <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a><br />Якщо ви помітили якусь помилку чи стикнулися із проблемою, обраховуючи результати, будь ласка, зверніться на мою пошту <a href="mailto:ponomaryov.stas@gmail.com" rel="noopener noreferrer">ponomaryov.stas@gmail.com</a>
            </p>
        </div>
    )
}

Table.propTypes = {
    tableData: PropTypes.array.isRequired,
    tableConfig: PropTypes.object.isRequired
};
Edit.propTypes = {
    tableData: PropTypes.array.isRequired,
    isVisible: PropTypes.number
};

// TODO:
