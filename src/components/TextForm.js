import React, { useState } from 'react'

export default function TextForm(props) {
    const [wordcountclicked,setwordcount]=useState(false);
    const handleupclick = () => {

        // console.log("uppercase was clicked"+text)
        let newtext = props.text.toUpperCase();
        props.setText(newtext);
        props.showalert("converted to uppercase", "success")
    }
    const handlechange = (event) => {

        console.log("onchange done");
        props.setText(event.target.value);


    }
    const handledownclick = () => {

        let newtext = props.text.toLowerCase();
        props.setText(newtext);
        props.showalert("converted to Lowercase", "success")

    }
    const handlecleartext = (value) => {

        let newtext = props.text.replace(props.text, "")
        props.setText(newtext);
        setcountlist({});
        props.showalert("Text cleared", "success");
setwordcount(false);
    }
    const wordCounter = () => {
        let newlist = props.text.split(/\s+/);
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
        props.showalert("word count displayed below", "success");
        setwordcount(true);
    };
    const speak = () => {

        let msg = new SpeechSynthesisUtterance();
        msg.text = props.text
        window.speechSynthesis.speak(msg)
        props.showalert("app is speaking", "success")
    }
    const handlecopy = () => {
        navigator.clipboard.writeText(props.text)
        props.showalert("copied successfully", "success")
    }
    const removespaces = () => {
        let newtext = props.text.split(/[ ]+/);
        props.props.setText(newtext.join(" ")
        )

        props.showalert("spaces removed successfully", "success")

    }



    const [wordcounts, setcountlist] = useState({});
    return (
        <>
            <div>
                <h1 style={{ color: props.textcolor }} className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="Mybox" rows="8" value={props.text} onChange={handlechange} style={{ backgroundColor: props.mode === 'dark' ? '#088cab' : 'white', color: props.mode === 'dark' ? 'white' : 'black', fontSize: "18px" }}></textarea>

                </div>
                <button disabled={props.text.length === 0} className={`btn btn-primary  mx-1 my-1`} onClick={handleupclick} style={{ backgroundColor: props.btncolor.buttoncolor, color: props.btncolor.fontcolor }}>convert to uppercase</button>
                <button disabled={props.text.length === 0} className="btn btn-primary mx-1 my-1 my-1" onClick={handledownclick} style={{ backgroundColor: props.btncolor.buttoncolor, color: props.btncolor.fontcolor }}>convert to lowercase</button>
                <button disabled={props.text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handlecleartext} style={{ backgroundColor: props.btncolor.buttoncolor, color: props.btncolor.fontcolor }}>Clear</button>
                <button disabled={props.text.length === 0} className='btn btn-primary mx-1 my-1' onClick={wordCounter} style={{ backgroundColor: props.btncolor.buttoncolor, color: props.btncolor.fontcolor }}>count words</button>
                <button disabled={props.text.length === 0} className='btn btn-primary mx-1 my-1' onClick={speak} style={{ backgroundColor: props.btncolor.buttoncolor, color: props.btncolor.fontcolor }}>Speak</button>
                <button disabled={props.text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handlecopy} style={{ backgroundColor: props.btncolor.buttoncolor, color: props.btncolor.fontcolor }}>Copy</button>
                <button disabled={props.text.length === 0} className='btn btn-primary mx-1 my-1' onClick={removespaces} style={{ backgroundColor: props.btncolor.buttoncolor, color: props.btncolor.fontcolor }}>Remove Spaces</button>


            </div>
            <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                <h2 style={{ color: props.textcolor }}>Your Text summary</h2>
                <p style={{ color: props.textcolor }}><b>{props.text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {props.text.length} characters</b></p>
                <p style={{ color: props.textcolor }}><b>{0.008 * props.text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes required to read</b></p>
                <p style={{ fontSize: "20px", color: props.textcolor }}>
                    <h2>Word Count</h2>
                   {props.text.length>0?(wordcountclicked?( Object.entries(wordcounts).map(([word, count], index) => (
                            <div key={index}>
                                {word} : {count}
                            </div>))
                   ):("click on count word button")):
                   ("Nothing to Preview")
                }
                </p>
                {/* {Object.entries(wordcounts).map(([word, count], index) => (
                        <div key={index}>
                            {word} :-     {count}{"\n"}
                        </div>
                    ))}</p> */}
                <h2 style={{ color: props.textcolor }} className='mt-3'>Preview</h2>
                <p style={{ color: props.textcolor, fontSize: '17px' }} >{props.text.length > 0 ? props.text : "Nothing to Preview"}</p>


            </div>

        </>
    )
}
