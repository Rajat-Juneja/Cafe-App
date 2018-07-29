import React,{Component} from 'react';
import './feedback.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Feedback extends Component{
    constructor(){
        super();
        this.disabled=true;
        this.class="curse";
        this.state={isGood1:false,isGood2:false,isGood3:false};
    }
    checkVal(event){
        var toCheck = event.target.attributes.getNamedItem('myvalue').value;
        var value = event.target.value;
        if(toCheck=='name'){
            if(value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g) && value)
            {
                event.target.classList.remove('red');
                this.setState({...this.state,isGood1:true},()=>{this.checkState();});
            }
            else{
                event.target.classList.add('red');
                this.setState({...this.state,isGood1:false},()=>{this.checkState();});
            }
            console.log(this.state);
        }
        else 
        if(toCheck=='email'){
            if(value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) && value){
                event.target.classList.remove('red');
                this.setState({...this.state,isGood2:true},()=>{this.checkState();});
            }
            else{
                event.target.classList.add('red');
                this.setState({...this.state,isGood2:false},()=>{this.checkState();});
            }
            console.log(this.state);
        }
        else 
        if(toCheck=='sugg'){
            if(value){
                event.target.classList.remove('red');
                this.setState({...this.state,isGood3:true},()=>{this.checkState();});
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
            this.setState({...this.state}); 
        }
        else{
            this.disabled=true;
            this.class="curse";
            this.setState({...this.state});
        }
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
            <button disabled={this.disabled} className={this.class}>Submit</button>
            </div>
            </form>
            </div>
        )
    }
}