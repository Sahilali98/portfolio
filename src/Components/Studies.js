import React from 'react'

export default function Studies() {
    return (
        <div>
            <div>

                <h1 className='text-center text-white my-2'>Studies</h1>
            </div>
            <div className='container text-center my-3'>
                <p id="aboutStudies">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam commodi, modi minus, vel dolor impedit facere quidem molestias quia, blanditiis harum distinctio est quam tempore incidunt. Ex nulla unde delectus?</p>
            </div>
            <div className='container'>
                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="h-100 p-5 rounded-3">
                            <h2>10th Class</h2>
                            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                           
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="h-100   rounded-3 text-center">
                            <img src="" className="rounded" alt='10th marksheet' style={{width:400,height:400}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
