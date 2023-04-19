


const addAtttribute = (state=[], action)=>{

    function solve(item, parent, c_id, temp) {
        const demo = {
            id: c_id,
            type: "string",
            required: false,
            delete: false,
            nested:[]
        }
        
        for(let i=0;i<item.length; i++)
        {
            if(parent==item[i].id)
            {
                item[i].nested.push(demo);
            }
    
            if(item[i].nested.length>0 )
            {
                solve(item[i].nested, parent, c_id, temp);
            }
            
        }
        return ;
    }
    
    function changeToObject(item, c_id, c_type) {
        for(let i=0; i<item.length; i++)
        {
            if(item[i].id===c_id)
            {
                item[i].type="object";
                return;
            }
            if(item[i].nested.length>0)
            {
                changeToObject(item[i].nested, c_id)
            }
        }
        return;
    }
    
    
    if(action.type==="Add") {
        console.log([...state, action.payload])
        return [...state, action.payload]
    }
    
    else if (action.type==="Remove") {
        return state.filter((todo,index)=>index!==action.payload)
    }

    else if(action.type==="Checkbox")
    {   
        return state.map((todo,index)=>index===action.payload?{...todo,checked:!todo.checked}:todo)
    }

    else if(action.type==="DataType")
    {
        changeToObject(state, action.payload.index, action.payload.type);
        return state;
    }

    else if(action.type === "NestedObject") {
        console.log("exp", action.payload.ParentId, action.payload.count)
        
        solve(state, action.payload.ParentId, action.payload.count, state);
        // console.log("temp",temp);
        return state;

    }

    return state;
}
export default addAtttribute;