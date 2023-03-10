import React from 'react'

function Skills(props) {
    return (

        <div>
            <div>

                <h1 className='text-center text-white my-2'>Skills</h1>
            </div>
            <div className='container text-center my-3'>
                <p id="aboutStudies">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam commodi, modi minus, vel dolor impedit facere quidem molestias quia, blanditiis harum distinctio est quam tempore incidunt. Ex nulla unde delectus?</p>
            </div>
            <div className='container'>
                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="h-100 p-5 rounded-3">
                            <h2>Reactjs</h2>
                            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>

                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="h-100   rounded-3 text-center">
                            <img id="reactImage" src={props.reactIcon} className="rounded" alt='10th marksheet' style={{ width: 200, height: 200 }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills
