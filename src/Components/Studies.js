import React from 'react'

export default function Studies(props) {
    return (
        <div>
            <div>
                <h1 className='text-center text-white my-2'>Studies</h1>
            </div>
            <div className='container text-center my-3'>
                <p id="aboutStudies">
                </p>
            </div>
            <div className='container'>
                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="h-100 p-5 rounded-3">
                            <h2>10th Class</h2>
                            <p>I was completed my 10th class from zilla school,balasore,odisha</p>
                            <p>In 2018</p>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="h-100   rounded-3 text-center">
                            <img src={props.school} className="rounded" alt='zilla school pic' style={{width:200,height:200}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="h-100 p-5 rounded-3">
                            <h2>12th Class</h2>
                            <p>I was completed my 12th class from balangir college,balasore,odisha</p>
                            <p>In 2020,as Stream Science</p>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="h-100 rounded-3 text-center">
                            <img src="" className="rounded" alt='college pic' style={{width:200,height:200}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="h-100 p-5 rounded-3">
                            <h2>B TECH</h2>
                            <p>I will complete my b-tech graduation from srinix college of engineering,balasore,odisha</p>
                            <p>In 2024,as Branch Computer Science</p>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="h-100 rounded-3 text-center">
                            <img src={props.srinix} className="rounded" alt='college pic' style={{width:200,height:200}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
