
// we have used event handling and hooks in this component


import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("upper case was clicked" + text)
        let newTxt = text.toUpperCase();
        setText(newTxt)
    }
    const handleLoClick = ()=>{
        // console.log("upper case was clicked" + text)
        let newTxt = text.toLowerCase();
        setText(newTxt)
    }

    const handleCopy = ()=>{
        var text = document.getElementById("exampleFormControlInput1")
        text.select();
        navigator.clipboard.writeText(text.value);   
    }

    const handleSpace = ()=>{
        let nextText = text.split(/[ ]+/);
        setText(nextText.join(" "))  
    }

    const handleClear = ()=>{
        let newtext = "";
        setText(newtext)
    }

    const handleOnChange = (event)=>{
        console.log("on change")
        setText(event.target.value);
    }
    const [text,setText] = useState("Enter the Text to convert it into uppercase");
    return (
        <>
            <div className="container" style={{color:props.mode===`dark`?`white`:`#042743`}} >
                 <h1>{props.heading}</h1>
                <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor:props.mode===`dark`?`black`:`white`,color:props.mode===`dark`?`white`:`#042743`}} id="exampleFormControlInput1" rows="6"></textarea>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
             <button className="btn btn-primary mx-2 my=2" onClick={handleLoClick}>Convert to Lower Case</button>
             <button className="btn btn-primary mx-2 my=2" onClick={handleCopy}>text copied</button>
             <button className="btn btn-primary mx-2 my=2" onClick={handleSpace}>Space removed</button>
             <button className="btn btn-primary mx-2 my=2" onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color:props.mode===`dark`?`white`:`#042743`}} >
                <h2>Your Text Summary </h2>
                <p>{text.split(" ").filter((element)=>{return element.length!== 0}).length} Words and {text.length} Charcters</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter Something to preview it here"}</p>
            </div>
        </>
    )
}

