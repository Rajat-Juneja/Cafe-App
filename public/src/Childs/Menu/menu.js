import React,{Component} from 'react';
import { Store } from '../../Models/Store';
import {AsyncAJAX} from '../../Models/AsyncAJAX';
import {MenuData} from '../Menu/menuData';
import {connect} from 'react-redux';

var results=[];

class Menu extends Component{
constructor(props){
    super(props);
    // this.error=true;
    // this.state={result:{}};
}
componentDidMount(){
    Store.dispatch(AsyncAJAX('DataGetter'));
}
render(){
    while(!results.length){
        return(
            <div className="comp">
                <img src={require("../../images/loader.gif")} alt="Loading"/>
            </div>
        )
}
return(
    <div>
        <MenuData data={results}></MenuData>
    </div>
)
}



}


const mapStateToProps=(state)=>{
    if(state.data){
        let mainResult=state.data;
        results=mainResult;
        return {result:mainResult}
    }
    return {}
}

export default connect(mapStateToProps)(Menu);

