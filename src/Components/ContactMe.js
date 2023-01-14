import React from 'react'

function ContactMe() {
    return (
        <div>
            <div>
                <h1 className='text-center text-white my-2'>Contact Me</h1>
            </div>
            <div className='container text-center my-3'>
                <p id="aboutStudies">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam commodi, modi minus, vel dolor impedit facere quidem molestias quia, blanditiis harum distinctio est quam tempore incidunt. Ex nulla unde delectus?</p>
            </div>
            <div className="container text-center" style={{ width: 380, height: 500}}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label" style={{color:"#20C20E"}}>Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label" style={{color:"#20C20E"}}>Mobile nomber</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="12316545" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label" style={{color:"#20C20E"}}>Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button class="btn btn-success" type="submit">Contact Me</button>
            </div>

        </div>
    )
}

export default ContactMe
