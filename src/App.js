import React, { useState } from "react";
import "./App.css";

function  WordCounter(){
    const [val,setVal]=useState('')
    const [word,setWord]=useState(0)

    const handleChange =(e)=>{
        const data = e.target.value.split(' ')
        console.log(data)

        
            setVal(e.target.value)
            setWord(data.length)
            if(e.target.value === ''){
                setWord(0)
            }
       
    }

    return(
        <div className="container">
           <h1>Responsive Paragraph Word Counter</h1>
            
            <textarea placeholder="Enter Text" cols={50} rows={10} value={val} onChange={(e)=>handleChange(e)} />
            <br>
            </br>
            <p>Word Count: {word}</p>
        </div>
    )
}
export default WordCounter;
