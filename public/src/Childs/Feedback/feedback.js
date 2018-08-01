import React,{Component} from 'react';
import './feedback.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Store} from '../../Models/Store';

export default class Feedback extends Component{
    constructor(){
        super();
        this.disabled=true;
        this.class="curse";
        this.state={isGood1:false,isGood2:false,isGood3:false,object:{}};
    }
    checkVal(event){
        var toCheck = event.target.attributes.getNamedItem('myvalue').value;
        var value = event.target.value;
        if(toCheck=='name'){
            if(value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g) && value)
            {
                event.target.classList.remove('red');
                this.setState({...this.state,isGood1:value},()=>{this.checkState();});
            }
            else{
                event.target.classList.add('red');
                this.setState({...this.state,isGood1:false},()=>{this.checkState();});
            }
        }
        else 
        if(toCheck=='email'){
            if(value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) && value){
                event.target.classList.remove('red');
                this.setState({...this.state,isGood2:value},()=>{this.checkState();});
            }
            else{
                event.target.classList.add('red');
                this.setState({...this.state,isGood2:false},()=>{this.checkState();});
            }
        }
        else 
        if(toCheck=='sugg'){
            if(value){
                event.target.classList.remove('red');
                this.setState({...this.state,isGood3:value},()=>{this.checkState();});
            }
            else{
                event.target.classList.add('red');
                this.setState({...this.state,isGood3:false},()=>{this.checkState();});
            }
        }
        

    }
    checkState(){
        if(this.state.isGood1 && this.state.isGood2 && this.state.isGood3){
        this.disabled=false;
            this.class="";
            var Obj={};
            Obj.name=this.state.isGood1;
            Obj.email = this.state.isGood2;
            Obj.message = this.state.isGood3;
            this.setState({...this.state,object:Obj}); 
        }
        else{
            this.disabled=true;
            this.class="curse";
            this.setState({...this.state});
        }
    }
    doAjax(){
        fetch('/feedback',{
            method: 'POST', // or 'PUT'
            body: JSON.stringify(this.state.object), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
        }).then(response=>{   
       response.json().then(data=>{
           }).catch(err=>console.log("Error in Ajax Call"));
       }).catch(err=>{
           console.log("Error in Server Call ",err);
       });
    }
    render(){
        return(
            <div className="container feedback">
            <h1>We're waiting for your feedback/suggestions.</h1>
            <form className="row">
            <div className="col-sm-6 col-12">
            <input type="text" myvalue="name" ref="name" placeholder="Enter your Name" onChange={this.checkVal.bind(this)}/>
            </div>
            <div className="col-12 col-sm-6">
            <input type="text" myvalue="email" ref="email" placeholder="Enter your email id" onChange={this.checkVal.bind(this)}/>
            </div>
            <div className="col-12 col-sm-12">
            <textarea name="sugg" myvalue="sugg" ref="sugg" cols="30" rows="7" onChange={this.checkVal.bind(this)} placeholder="Enter your Suggestions / Feedbacks / Complaints"></textarea>
            <br/>
            </div>
            <div className="col-sm-12 col-12">
            <button disabled={this.disabled} className={this.class} onClick={this.doAjax.bind(this)}>Submit</button>
            </div>
            </form>
            </div>
        )
    }
}