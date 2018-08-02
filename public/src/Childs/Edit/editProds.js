import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Store} from '../../Models/Store';
import {AsyncAJAX} from '../../Models/AsyncAJAX';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './edit.css';

class Edit extends Component{
    constructor(props){
        super(props);
        this.props=props;
        this.desc='';
        this.price=0;
        this.discounted_price=0;
        this.availability='';
        this.quantity=0;
        this.state={file:[]};
        this.done=false;
        this.name='';
        this.url='';
        this.names='';
    }
    componentDidMount(){
        Store.dispatch(AsyncAJAX('DataGetter'));
    }
    changeImg(){
        console.log("INSIDE IMAGE CHANGE");
        this.url = URL.createObjectURL(this.state.file);
        this.setState({...this.state});
    }
    Upload(id){
        var Obj={};
        console.log(id);
        Obj.id=id;
        if(this.state.file){
        Obj.file=this.state.file;
        }   
        if(this.name){
            Obj.name=this.name;
        }
        if(this.price){
            Obj.price=this.price;
        }
        if(this.discounted_price){
            Obj.discounted_price=this.discounted_price;
        }
        if(this.desc){
            Obj.desc=this.desc;
        }
        if(this.price){
            Obj.price=this.price;
        }
        if(this.availability){
            Obj.availability=this.availability;
        }
        if(this.quantity){
            Obj.quantity=this.quantity;
        }
        if(Obj.price){
            if(Obj.price<=0){
                return 
            }
        }
        if(Obj.discounted_price){
            if(Obj.discounted_price<=0){
                return
            }
        }
        if(Obj.quantity){
            if(Obj.quantity<=0){
                return
            }
        }
        if(Obj.name){
            if(Obj.name.length==0){
                return
            }
        }
        if(Obj.desc){
            if(Obj.desc.length==0){
                return
            }
        }
        fetch('/update',{
            method:'POST',
            body:JSON.stringify(Obj),
            headers:{
                'Content-Type': 'application/json'
              }
        }).then(response=>{  
            response.json().then(data=>{
                
                }).catch(error=>{
                    console.log("Error in Ajax Update Call",error)});
            }).catch(err=>{
                console.log("Error in Server Update Call ",err);
            });
    }
    changed(event){
        this.setState({...this.state,file:event.target.files[0]},()=>{
            this.printName(this.name);
        });
    }
    printName(name){
        this.name=name;
        if(this.state.file){
            if(this.state.file.name){
                this.changeImg();
            }
        }
        
    }
    getName(event){
        this.name=event.target.value;
    }
    getAvail(event){
        this.availability=event.target.value;
    }
    getDesc(event){
        this.desc=event.target.value;
    }
    getPrice(event){
        this.price=event.target.value;
    }
    getDiscPrice(event){
        this.discounted_price=event.target.value;
    }
    getQuant(event){
        this.quantity=event.target.value;
    }
    render(){
        while(!this.props.result){
            return(
                <div className="comp">
                    <img src={require("../../images/loader.gif")} alt="Loading"/>
                </div>
            )
    }
        return(
            <div className="row edit">
            {this.props.result.map(Obj=>{
                var image,measure;
                if(Obj.type=='liquid'){
                    measure = 'ml';
                }
                else
                if(Obj.type=='solid'){
                    measure = 'gm';
                }
                else{
                    measure = '';
                }
                if(this.url.length>0 && Obj.name==this.name){
                    image = <img className="imgProd" src={this.url} alt={Obj.name}/>
                }
                else{
                    image = <img className="imgProd" src={Obj.image} alt={Obj.name}/>
                }
          return (
          <div className="col-md-4 col-12" key={Obj._id}>
          <div className="box ">
          <form method="POST" action="/update" encType="multipart/form-data">
          <div className="img">
          
          <label className="remove">
          <input type="file" accept="image/*" onChange={this.changed.bind(this)} onClick={()=>{
              this.printName(Obj.name);
          }}  name="myImage"/>
          <i className="fa fa-pencil" aria-hidden="true"></i>
          </label>

          
          {image}
          </div>
          <br/>
          <label>
             <b>Name:&nbsp;&nbsp;</b>
              <input type="text" onChange={this.getName.bind(this)} defaultValue={Obj.name}/>
          </label><br/>
          <label>
            <b>Description:&nbsp;&nbsp;</b> 
              <input type="text" onChange={this.getDesc.bind(this)} defaultValue={Obj.desc}/>
          </label><br/>
          <label>
              <b>Price:&nbsp;&nbsp;</b>
              <input type="number" onChange={this.getPrice.bind(this)} defaultValue={Obj.price}/>
          </label><br/>
          <label>
              <b>Discounted Price:&nbsp;&nbsp;</b>
              <input type="number" onChange={this.getDiscPrice.bind(this)} defaultValue={Obj.discounted_price}/>
          </label><br/>
          <label>
              <b>Quantity:&nbsp;&nbsp;</b>
              <input type="number" onChange={this.getQuant.bind(this)} defaultValue={Obj.quantity}/>&nbsp; <b>in {measure}</b>
          </label>
          <br/>
            <label>
                <b>Available: &nbsp;&nbsp;</b>
                No:&nbsp;<input type="radio" onChange={this.getAvail.bind(this)} value="false" name="check"  id="check1" defaultChecked={!Obj.availability}/>
                &nbsp; &nbsp;
                Yes:&nbsp;<input type="radio" onChange={this.getAvail.bind(this)} value="true" name="check" id="check2" defaultChecked={Obj.availability}/>
            </label>
            <br/><br/>
            <input type="submit" onClick={()=>{
                this.Upload(Obj._id);
            }} value="Submit"/>
            </form>
          </div>
          </div>
          )
    })
    }
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    if(state.data){
        let mainResult=state.data;
        // results=mainResult;
        return {result:mainResult}
    }
    return {}
}

export default connect(mapStateToProps)(Edit);