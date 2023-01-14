import React from 'react'



function Image(props) {


    return (
        <div className='box'>
            {/* <img src={process.env.PUBLIC_URL+"images/sahil.jpg"} className="rounded-circle" alt='Profile Pic'/> */}
            <img src={props.sahil} className="rounded-circle" alt='Profile Pic'/>
        </div>
    )
}

export default Image
