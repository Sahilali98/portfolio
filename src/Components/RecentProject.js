import React from 'react'

export default function RecentProject(props) {
    return (
        <div>
            <div>
                <h1 className='text-center text-white my-2'>Recent Projects</h1>
            </div>
            <div className='container text-center my-3'>
                <p id="aboutProjects">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam commodi, modi minus, vel dolor impedit facere quidem molestias quia, blanditiis harum distinctio est quam tempore incidunt. Ex nulla unde delectus?</p>
            </div>
            <div className='container'>
                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="h-100 p-5 rounded-3">
                            <h2>Portfolio</h2>
                            <p>This is my porfolio, it is my first project in reactjs</p>

                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="h-100   rounded-3 text-center">
                            <img  src={props.portfolio}  alt='Poject Portfolio' style={{ width: 350, height: 200 }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
