import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './menu.css';

export class MenuData extends Component{
constructor(props){
    super(props);
    this.props=props;
    this.state={redirect:''};
    this.class='';
}
openProd(name){
    this.setState({...this.state,redirect:name});
}
render(){
    if (this.state.redirect) {
        var url = "/product/"+this.state.redirect;
        return <Redirect push to={url}/>;
      }
      else{
return(
    
    <div className="menu">
    <h1>BreakFast</h1>
    <div className="row">
    {this.props.data.map(Obj=>{
        if(Obj.time=='breakfast'){
            if(!Obj.availability){
                this.class="shadeIt";
            }
            else{
                this.class='';
            }
          return (
          <div className="col-md-4 col-12" key={Obj._id}>
          <div className={"box "+this.class} onClick={()=>{this.openProd(Obj.name)}}>
          <div className="img">
          <img className="imgProd" src={Obj.image} alt={Obj.name}/>
          </div>
          <h3>{Obj.name}</h3>
          </div>
          <h4 className="error">Out of Stock</h4>
          </div>
          )
        }
    })
    }
     </div>
     <br/><br/>
     <h1>Lunch</h1>
     <div className="row">
     {this.props.data.map(Obj=>{
        if(Obj.time=='lunch'){
            if(!Obj.availability){
                this.class="shadeIt";
            }
            else{
                this.class='';
            }
          return (
          <div className="col-md-4 col-12" key={Obj._id}>
          <div className={"box "+this.class} onClick={()=>{this.openProd(Obj.name)}}>
          <div className="img">
          <img className="imgProd" src={Obj.image} alt={Obj.name}/>
          </div>
          <h3>{Obj.name}</h3>
          </div>
          <h4 className="error">Out of Stock</h4>
          </div>
          )
        }
    })
    }
     </div>
     <br/><br/>
     <h1>Dinner</h1>
     <div className="row">
     {this.props.data.map(Obj=>{
        if(Obj.time=='dinner'){
            if(!Obj.availability){
                this.class="shadeIt";
            }
            else{
                this.class='';
            }
          return (
          <div className="col-md-4 col-12" key={Obj._id}>
          <div className={"box "+this.class} onClick={()=>{this.openProd(Obj.name)}}>
          <div className="img">
          <img className="imgProd" src={Obj.image} alt={Obj.name}/>
          </div>
          <h3>{Obj.name}</h3>
          </div>
          <h4 className="error">Out of Stock</h4>
          </div>
          )
        }
    })
    }</div>
    </div>
)
}
}
}