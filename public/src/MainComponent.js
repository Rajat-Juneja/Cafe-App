import React,{Component} from 'react';
import {Header} from './Childs/Header/header';
import {Footer} from './Childs/Footer/footer';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import {Home} from './Childs/Home/home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class MainComponent extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div>
            <div className="bg">
                <Header></Header>
            </div>
                <div className="container">
                {/* <Switch>
                    <Route></Route>
                    <Route></Route>
                    <Route></Route>
                    <Route></Route>
                </Switch> */}
                <Home></Home>
                </div>
            </div>
            <Footer></Footer>
            </div>
        )
    }
}