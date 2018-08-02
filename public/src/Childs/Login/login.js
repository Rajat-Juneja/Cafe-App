import React,{Component} from 'react';
import './login.css';
import { Redirect } from 'react-router-dom';
import {Store} from '../../Models/Store';
import { connect } from 'react-redux';
import {AsyncAJAX} from '../../Models/AsyncAJAX';

// var loggedIn=false;

export class Login extends Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state={redirect:false};
    }
    componentDidMount(){
        if(this.props.loggedIn){
            this.setState({...this.state,redirect:true});
        }
        else{
            this.setState({...this.state,redirect:false})
        }
    }
    storeMob(){
        Store.dispatch({type:'Mob',Mobile:this.refs.mob.value,loggedIn:true});
        this.setState({...this.state,redirect:true});
        Store.dispatch(AsyncAJAX('DataGetter'));
    }
    render(){
        if(!this.state.redirect){
        return(
            <div className="login">
                <input className="inp" type="text" ref="mob" defaultValue="9911991199" placeholder="Enter phone number"/>
                <br/><br/>
                <input className="inp" type="password" placeholder="Enter password"/>
                <br/><br/>
                <button onClick={this.storeMob.bind(this)}>Submit</button>
            </div>
        )
    }
    else{
        return <Redirect push to="/editmenu"/>;
    }
    }
}

const mapStateToProps=(state)=>{
    if(!state.loggedIn){
    if(state.mobile){
        // loggedIn=true;
        return {loggedIn:true}
    }
    return {}
}
    return {}
}

export default connect(mapStateToProps)(Login);