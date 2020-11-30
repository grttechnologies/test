import React, { useState } from 'react';
import './index.css';
import {addComment} from '../../actions/comment'
import store from '../../reducers/store'


function InputComponent(props) {
    const [text,setText] = useState('')
    const onChangeText = (e) => {
        setText(e.target.value)
    }

    const onClickButtonAction = () => {
        if (text.trim() !== ''){
            store.dispatch(addComment(text))
        }
    }

  return (
    <div className="rootContainer">
    <input  data-testid="todo-input-field" className="todo-textField" type="text" value={text} placeholder="Enter your todo here" onChange={onChangeText}/>
    <button data-testid="add-Button" className="todo-Button" onClick={onClickButtonAction}>Add</button>
    </div>
  );
}

export default InputComponent;
