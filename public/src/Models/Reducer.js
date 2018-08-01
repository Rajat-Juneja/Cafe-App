export const reducer = (state={},action) =>{
    if(action.type=='DataGetter'){
        console.log("Inside reducer");
        return {...state,data:action.payLoad.data}
    }
    return state;
};