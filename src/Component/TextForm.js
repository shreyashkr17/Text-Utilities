import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
      // console.log("UpperCase was clicked " + text);
      let newText = text.toLowerCase();
      setText(newText);
    }
    const handleTitleCaseClick=()=>{
      // console.log("UpperCase was clicked " + text);
      // let newText = text.charAt(0).toUpperCase()+text.slice(1).toLowerCase();
      // setText(newText);
      var result = text.replace( /([A-Z])/g, " $1" );
      var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
      setText(finalResult)
    }
    const handleBinClick=()=>{
      // console.log("UpperCase was clicked " + text);
      let newText = text.split('').map(char => {
                        return char.charCodeAt(0).toString(2);
                    }).join(' ');
      setText(newText);
    }
    const handleReverseClick=()=>{
      // console.log("UpperCase was clicked " + text);
      let newText = text.split("").reverse().join("");
      setText(newText);
    }
    const handleClearClick=()=>{
      // console.log("UpperCase was clicked " + text);
      let newText = '';
      setText(newText);
    }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text,setText]=useState('Enter text here without any punctuation.')

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"><h1>Textarea</h1></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>

        <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mt-3 mx-3" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mt-3" onClick={handleTitleCaseClick}>Convert To TitleCase</button>
        <button className="btn btn-primary mt-3 mx-3" onClick={handleReverseClick}>Reverse Line</button>
        <button className="btn btn-primary mt-3" onClick={handleBinClick}>Convert To Binary</button>
        <button className="btn btn-danger mt-3 mx-5" onClick={handleClearClick}>Clear Text</button>
        </div>
    </div>
    <div className="container mt-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read.</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something above to Preview the text:"}</p>
    </div>
    </>
  )
}
