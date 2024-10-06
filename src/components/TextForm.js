import React, { useState } from 'react'

export default function TextForm(props) {
    const handleupclick = () => {

        // console.log("uppercase was clicked"+text)
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert("converted to uppercase", "success")
    }
    const handlechange = (event) => {

        console.log("onchange done");
        settext(event.target.value);


    }
    const handledownclick = () => {

        let newtext = text.toLowerCase();
        settext(newtext);
        props.showalert("converted to Lowercase", "success")

    }
    const handlecleartext = (value) => {

        let newtext = text.replace(text, "")
        settext(newtext);
        setcountlist({})
        props.showalert("Text cleared", "success")

    }
    const wordCounter = () => {
        let newlist = text.split(/\s+/);
        let wordlists = {};

        for (let i = 0; i < newlist.length; i++) {
            let word = newlist[i]
            if (wordlists[word]) {
                wordlists[word]++;
            }
            else {
                wordlists[word] = 1;
            }

        }
        for (let word in wordlists) {
            console.log(word, "numberofcount", wordlists[word])
        }
        let wordcounts = wordlists;
        setcountlist(wordcounts)
        props.showalert("word count displayed below", "success")
    };
    const speak = () => {

        let msg = new SpeechSynthesisUtterance();
        msg.text = text
        window.speechSynthesis.speak(msg)
        props.showalert("app is speaking", "success")
    }
    const handlecopy = () => {
        navigator.clipboard.writeText(text)
        props.showalert("copied successfully", "success")
    }
    const removespaces = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" ")
        )

        props.showalert("spaces removed successfully", "success")

    }

    const [text, settext] = useState("");

    const [wordcounts, setcountlist] = useState({});
    return (
        <>
            <div>
                <h1 style={{ color: props.textcolor }} className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="Mybox" rows="8" value={text} onChange={handlechange} style={{ backgroundColor: props.mode === 'dark' ? '#088cab' : 'white', color: props.mode === 'dark' ? 'white' : 'black', fontSize: "18px" }}></textarea>

                </div>
                <button disabled={text.length === 0} className={`btn btn-primary  mx-1 my-1`} onClick={handleupclick} style={{ backgroundColor: props.btncolor.buttoncolor, color: props.btncolor.fontcolor }}>convert to uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 my-1" onClick={handledownclick} style={{ backgroundColor: props.btncolor.buttoncolor, color: props.btncolor.fontcolor }}>convert to lowercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handlecleartext} style={{ backgroundColor: props.btncolor.buttoncolor, color: props.btncolor.fontcolor }}>Clear</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={wordCounter} style={{ backgroundColor: props.btncolor.buttoncolor, color: props.btncolor.fontcolor }}>count words</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={speak} style={{ backgroundColor: props.btncolor.buttoncolor, color: props.btncolor.fontcolor }}>Speak</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handlecopy} style={{ backgroundColor: props.btncolor.buttoncolor, color: props.btncolor.fontcolor }}>Copy</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={removespaces} style={{ backgroundColor: props.btncolor.buttoncolor, color: props.btncolor.fontcolor }}>Remove Spaces</button>


            </div>
            <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                <h2 style={{ color: props.textcolor }}>Your Text summary</h2>
                <p style={{ color: props.textcolor }}><b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</b></p>
                <p style={{ color: props.textcolor }}><b>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes required to read</b></p>
                <p style={{ fontSize: "20px", color: props.textcolor }}><b style={{ fontSize: '25px' }}>Occurences of words</b>
                    {Object.entries(wordcounts).map(([word, count], index) => (
                        <div key={index}>
                            {word} :-     {count}{"\n"}
                        </div>
                    ))}</p>
                <h2 style={{ color: props.textcolor }}>Preview</h2>
                <p style={{ color: props.textcolor, fontSize: '17px' }}>{text.length > 0 ? text : "Nothing to Preview"}</p>


            </div>

        </>
    )
}
