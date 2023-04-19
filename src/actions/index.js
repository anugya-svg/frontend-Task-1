const add=(item)=>{
    return{
        type:"Add",
        payload:item
    }
}
const remove=(index)=>{
    return{
        type:"Remove",
        payload:index
    }
}
const checkbox=(index)=>{
    return{
        type:"Checkbox",
        payload:index
    }
}

const dataType = (index)=>{
    return {
        type: "DataType",
        payload: index
    }
}

const nestedObject = (index)=>{
    return {
        type: "NestedObject",
        payload: index
    }
}
export {add,remove,checkbox, dataType, nestedObject};