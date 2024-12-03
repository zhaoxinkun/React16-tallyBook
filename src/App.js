import React, {Component, Fragment} from 'react';
// 导入路由
// import {BrowserRouter as Router,Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Home from './container/Home';
import PriceList from './component/PriceList';

class App extends Component {
    render() {
        return (
        <Fragment>

            <div>
                <Home></Home>
                <PriceList></PriceList>
            </div>
        </Fragment>
        );
    }
}

export default App;
