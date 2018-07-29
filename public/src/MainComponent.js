import React,{Component} from 'react';
import {Header} from './Childs/Header/header';
import {Footer} from './Childs/Footer/footer';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route,Redirect } from 'react-router-dom';
import {Home} from './Childs/Home/home';
import Feedback from './Childs/Feedback/feedback';

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
                <Switch>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/menu" exact render={()=><h1>Menu</h1>}></Route>
                    <Route path="/feedback" exact component={Feedback}></Route>
                    <Route path="/contact" exact render={()=><h1>contact</h1>}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
                </div>
            </div>
            <Footer></Footer>
            </div>
        )
    }
}