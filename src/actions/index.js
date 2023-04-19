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
const required=(index)=>{
    return{
        type:"Required",
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

const editName =(item)=>{
    return {
        type:"EditName",
        payload:item
    }
}
export {add, remove, required, dataType, nestedObject, editName};