import '../app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import  Logo from '../images/logo.svg';
import {useDispatch, useSelector} from "react-redux";
import {add, remove, checkbox, dataType, nestedObject} from "../actions/index"
import { useEffect, useState } from 'react';
import Attributes from "./Element";
import { v4 as uuidV4 } from 'uuid';



function App() {

  const dispatch = useDispatch();
  const attributes = useSelector((state) =>state.addAtttribute);

  return (
    <div className='App'>
      <div className='header'>
        <img src={Logo} width="400"/>
      </div>
      <div className='content'>
        <div className="schema-box">
          <div className="task" style={{margin:"15px", fontSize:"1.5rem",fontWeight:"bold"}}>
            Lets Create Schema
            <FontAwesomeIcon icon={faPlusSquare} style={{marginLeft:"140px"}} onClick={()=>{
                 dispatch(add({
                    id: uuidV4(),
                    type: "string",
                    required: false,
                    delete: false,
                    nested:[],
                    placeholder: "addName"
                }))
            }}/>  
          </div>
          
        </div>
        <div >
        <div style={{backgroundColor:"rgb(29,27,45)", borderRadius:"7px", padding:"10px"}}>
            <Attributes attributes={attributes} />
        </div>
        </div>
    </div>
    </div>
  );
}

export default App;
