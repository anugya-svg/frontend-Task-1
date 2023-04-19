


const addAtttribute = (state=[], action)=>{

    function solve(item, parent, c_id, temp) {
        const demo = {
            id: c_id,
            type: "string",
            required: false,
            delete: false,
            nested:[],
            placeholder: "addName"
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
                item[i].type=c_type;
                if(c_type!=="object")
                {
                    item[i].nested=[];
                }
                return;
            }
            if(item[i].nested.length>0)
            {
                changeToObject(item[i].nested, c_id, c_type)
            }
        }
        return;
    }
    
    function deleteAttribute(item, c_id) {
        for(let i=0;i<item.length;i++)
        {
            if(item[i].id===c_id)
            {
                item.splice(i,1);
                return;
            }
            if(item[i].nested.length>0)
                deleteAttribute(item[i].nested, c_id);
        }
        return;
    }

    function editName(item, c_id, c_name) {
        for(let i=0;i<item.length;i++)
        {
            if(item[i].id===c_id)
            {
                item[i].placeholder=c_name;
                return;
            }
            if(item[i].nested.length>0)
                editName(item[i].nested, c_id, c_name);
        }
        return;
    }

    function changeRequired(item, c_id, c_req) {
        for(let i=0;i<item.length;i++)
        {
            if(item[i].id===c_id)
            {
                item[i].required=c_req;
                return;
            }
            if(item[i].nested.length>0)
                editName(item[i].nested, c_id);
        }
        return;
    }

    if(action.type==="Add") {
        // console.log([...state, action.payload])
        return [...state, action.payload]
    }
    
    else if (action.type==="Remove") {
        let temp=[...state];
        deleteAttribute(temp, action.payload)
        return temp;
    }

    else if(action.type==="Required")
    {   
        let temp = [...state];
        changeRequired(temp, action.payload.index, !action.payload.c_req);
        return temp;
    }

    else if(action.type==="DataType")
    {
        let temp=[...state];
        changeToObject(temp, action.payload.index, action.payload.type);
        return temp;
    }

    else if(action.type === "NestedObject") {
        let temp=[...state];
        solve(temp, action.payload.ParentId, action.payload.count, state);
        console.log(temp);
        return temp;
    }
    else if(action.type==="EditName") {
        let temp=[...state];
        editName(temp, action.payload.index, action.payload.c_name);
        return temp;
    }

    return state;
}
export default addAtttribute;