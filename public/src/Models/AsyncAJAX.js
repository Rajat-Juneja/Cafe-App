export const AsyncAJAX = (actionName) =>{

    console.log("ASYNC CALL",actionName);
    
    return(dispatch)=>{
        fetch('http://localhost:1234/menu',{
            method:'GET'
        }).then(response=>{response.json().then((data)=>{
            dispatch({type:actionName,payLoad:data});
            }).catch(err=>{
                console.log("ERR1");
            })
        }).catch(err=>{
            console.log("ERR2");
        });
    }

}