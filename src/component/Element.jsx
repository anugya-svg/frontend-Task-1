import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import {add, remove, checkbox, dataType, nestedObject} from "../actions/index"
import { v4 as uuidV4 } from 'uuid';

export default function Attributes({ attributes }) {
  const dispatch = useDispatch();
  return (
    <div>
    {
      attributes.map((val, index) =>{
          return <div key={index}>
              <p>{val.id}</p>
              <select onChange={(e)=>{
                  console.log("changed !", e.target.value)
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
              {val.type==="object"?<FontAwesomeIcon icon={faPlusSquare} onClick={()=>{
                dispatch(nestedObject({ParentId:val.id, count: uuidV4()}))
    }}/>:<div></div>}
              <FontAwesomeIcon icon={faTrash} onClick={()=>{
                  dispatch(remove(index))
              }}/> 
              {val.nested.length>0 ?<Attributes attributes={val.nested}/>:<></>}             
          </div>
      })
    }
  </div>
  );
}

