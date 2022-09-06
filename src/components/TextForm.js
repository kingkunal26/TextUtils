import React, {useState} from 'react'

export default function TexthtmlForm(props) {
    
    const handleUpClick = () => {
       let newText=text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to uppercase","success")
    }
    const handleOnChange=(event)=>{
        console.log("Handle On Change");
        setText(event.target.value);
        // const arr = text.split(' ');
        // setWordsCount(arr.filter(word => word !== '').length);
        // setChars(text.length);
    }
    
    const [text,setText]=useState('Enter text here');
    // const [wordCount,setWordsCount]=useState(0);
    // const [chars,setChars]=useState(0);
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}


