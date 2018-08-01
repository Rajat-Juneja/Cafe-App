import React,{Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './product.css';

export class Product extends Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state={result:{},unit:''};
    }
    componentDidMount(){
        // console.log(this.props.match.params.name);
        fetch('http://localhost:3000/menuprod/'+this.props.match.params.name).then(response=>{
            response.json().then(data=>{
                console.log("SETTING STATE");
                this.setState({...this.state,result:data.data[0]});
                this.checkQuant(this.state.result.type);
            }).catch(err=>{
                console.log(err)});
        }).catch(err=>{
            console.log(err)});
    }
    checkQuant(type){
        console.log(type);
        if(type=='solid'){
            this.setState({...this.state,unit:'gm'});
        }
        else
        if(type=='liquid'){
            this.setState({...this.state,unit:'ml'});
        }
        else
        if(type=='bread'){
            this.setState({...this.state,unit:''});
        }
    }
    render(){
        // console.log(this.state.result);
        if(this.state.result.name){
        return(
            <div className="product">
             <div className="media">
               <img className="mr-3" src={this.state.result.image} alt={this.state.result.name}/>
                <div className="media-body">
                    <h3 className="mt-0"><b>{this.state.result.name}</b></h3>
                    <p>{this.state.result.desc}</p>
                    <p className="dull">MRP : <strike>&#8377;{this.state.result.price}</strike></p>
                    <p className="bright">Price : &#8377;{this.state.result.discounted_price}</p>    
                    <p>Quantity: {this.state.result.quantity} {this.state.unit}</p>
                </div>
            </div> 
            </div>
        )
    }
    else{
        return(
            <div className="comp">
                <img src={require("../../images/loader.gif")} alt="Loading"/>
            </div>
        )
    }
    }
}