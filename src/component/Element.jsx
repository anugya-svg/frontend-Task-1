import React from "react";
import {useDispatch} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import {remove, required, dataType, nestedObject, editName} from "../actions/index"
import { v4 as uuidV4 } from 'uuid';

export default function Attributes({ attributes }) {
  const dispatch = useDispatch();

  return (
    <div>
    {
      attributes.map((val, index) =>{
        return <div key={index} style={{padding:"7px",paddingLeft:"20px"}}>
              <input type={val.type} className="input" onChange={(e)=>{
                dispatch(editName({index: val.id, c_name: e.target.value}))
              }} placeholder={val.placeholder}/>
              <select className="input" onChange={(e)=>{
                  dispatch(dataType({index: val.id, type: e.target.value}));
              }}>
                  <option value="string"> 
                      String
                  </option>
                  <option value="object">
                      object
                  </option>
                  <option value="number">
                      Number
                  </option>
              </select>
              
              {val.required?<button className="input" onClick={(e)=>{
                dispatch(required({index: val.id, c_req: val.required}))
              }}>Required</button>:<button className="input" onClick={(e)=>{
                dispatch(required({index: val.id, c_req: val.required}))
              }}>Not required</button>}

              {val.type==="object"?<FontAwesomeIcon className = "icon" icon={faPlusSquare} onClick={()=>{
                dispatch(nestedObject({ParentId:val.id, count: uuidV4()}))
    }}/>:<span></span>}
              
              

              <FontAwesomeIcon className = "icon" icon={faTrash} onClick={()=>{
                  dispatch(remove(val.id))
              }}/> 

              {val.nested.length>0 ?<Attributes attributes={val.nested}/>:<></>}             
          </div>
      })
    }
  </div>
  );
}

