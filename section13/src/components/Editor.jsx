import './Editor.css';
import { useState, useRef } from 'react';

const Editor = ({oncreate})=>{
  const [input, setInput] = useState('');
  const inputRef = useRef(null);  
  const onSetInput = (e)=>{
    setInput(e.target.value); 
  };

  const onSubmit = ()=>{
    if(input === ''){
      alert('값을 입력해주세요');
      inputRef.current.focus(); 
      return;  
    }
    oncreate(input);
    setInput('');  
  }; 

  //input 태그에서 enter치는순간 => onSubmi()
  const onKeyDown = (e)=>{
    if(e.keyCode === 13){
      onSubmit(); 
    }
  };


  return (
    <>
    <div className="Editor">
      <input ref={inputRef} value={input}  onChange={onSetInput}  onKeyDown={onKeyDown} placeholder="새로운 Todo..." />
      <button onClick={onSubmit}>추가</button>
    </div>
    </>
  ); 
};

export default Editor; 