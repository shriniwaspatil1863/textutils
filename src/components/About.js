// import React,{useState} from 'react'

export default function About(props) {


    //   let props.aboutcolor={
    //     color:props.mode==='dark'?"white":"black",
    //     backgroundColor:props.mode==='dark'?"pink":"white",
    //   }
    // //   #088cab



    return (
        <div className='container pb-3'>
            <h1 className='my-3' style={{ color: props.mode === 'dark' ? "white" : "black", }}>About Us</h1>
            <div className="accordion" id="accordionExample" style={props.aboutcolor}>
                <div className="accordion-item" style={props.aboutcolor}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={props.aboutcolor}>
                            <strong>ANALYZE YOUR TEXT</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            TextUtils allows you to easily analyze your text by providing a range of tools to manipulate and understand content. Whether you need to convert case, remove unwanted spaces, or count characters and words, TextUtils helps streamline your text-processing tasks
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.aboutcolor}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={props.aboutcolor}>
                            <strong>FREE TO USE</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is completely free to use! You can access all of its features without any cost or subscription, making it accessible for everyone, whether you're a student, professional, or just someone working with text on a regular basis.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.aboutcolor}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={props.aboutcolor}>
                            <strong>BROWSER COMPATIBLE </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            TextUtils is compatible with all modern web browsers. Whether you're using Chrome, Firefox, Safari, or Edge, you can rely on TextUtils to work seamlessly, ensuring that you can analyze and manage text from any device with an internet connection
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
