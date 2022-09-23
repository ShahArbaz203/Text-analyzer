import React , {useState} from 'react';

function Textare() {
    const [text, settext] = useState(" ");

    const handleValue = (event) =>{
     settext(event.target.value);
    
    }
    
    const ToUperCase = () =>{
     settext(text.toUpperCase())
    }

    const ToLowCase =()=>{
        settext(text.toLowerCase())
    }

    const textClear = () =>{
        let Clear = " ";
        settext(Clear);
    }
  return (
    <>
    <div className='container'>
    <h1>Text analyzer </h1>
    <p>Enter text in this text area</p>
  <textarea className="form-control" value={text} onChange={handleValue}  id="exampleFormControlTextarea1" rows="9"></textarea>
  <button className="btn btn-primary my-2 mx-2"  onClick={ToUperCase} >Convert to UperCase</button>
  <button className="btn btn-primary mx-2 " onClick={ToLowCase} >Convert to LowerCase</button> 
<button className="btn btn-primary mx-2 " onClick={textClear} >Clear text</button>
<h1>Your text summary</h1>
<p>{text.split(" ").length-1} words and {text.length} is characters</p>
<p>{0.008 *  text.split(" ").length} Minuts to read </p>
<h2>Preview your text</h2>
<p>{text}</p>

    </div>
    </>
  );
}

export default Textare;
