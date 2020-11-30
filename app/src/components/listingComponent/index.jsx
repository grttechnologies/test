import React, { useState } from 'react';
import './index.css';
import {deleteCommemt,updateComment} from '../../actions/comment'
import store from '../../reducers/store'


function ListingComponent(props) {

  const [editKey,setEditKeys] = useState({})


  return (
    <div className="listContainer">
      <ul>
        {props.modelList && props.modelList.map((element,index) => {
          if(editKey.hasOwnProperty(element._id)){
            return(<EditComponent element={element} editKey={editKey} setEditKeys={setEditKeys} />)
          } else{
            return(<ListComponent index={index} element={element} editKey={editKey} setEditKeys={setEditKeys}/>)
          }
        })}
      </ul>
      
    </div>
  )
}


const EditComponent = (props) =>{
  const {editKey,element,setEditKeys} = props
  const [text,setText]=useState(element.comment)
  return (<div>
    <input type="text" value={text} onChange={(e)=>{
      setText(e.target.value)
    }}/>              
    <button onClick={()=>{
      let keys = editKey;
      delete keys[element._id]
      setEditKeys(JSON.parse(JSON.stringify(keys)))
      store.dispatch(updateComment(element._id,text))
    }}>Update</button>
    <button onClick={()=>{
      let keys = editKey;
      delete keys[element._id]
      setEditKeys(JSON.parse(JSON.stringify(keys)))
    }}>Cancel</button>    
    </div>)
}

const ListComponent = (props) =>{
  const {editKey,element,setEditKeys,index} = props
  return (
    <div>
    <li key={index} className={'textStyle'}>{element.comment}</li>
    <button onClick={()=>{
      let keys = editKey;
      keys[element._id] = true
      setEditKeys(JSON.parse(JSON.stringify(keys)))
    }}>Edit</button>
    <button onClick={()=>{
      store.dispatch(deleteCommemt(element._id))
    }}>Delete</button>    
    </div>
  )
}

export default ListingComponent;
