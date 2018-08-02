export const reducer = (state={},action) =>{
    if(action.type=='DataGetter'){
        return {...state,data:action.payLoad.data}
    }
    else
    if(action.type=='Mob'){
        console.log(action.Mobile);
        return {...state,mobile:action.Mobile};
    }
    return state;
};