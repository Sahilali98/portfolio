import React from 'react'
import Image from './Image'

export default function AboutMe() {
  return (
    <>
      <div className="container">
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5  rounded-3">
              <h1>SK SAHIL ALI</h1>
              <p id="introText">Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
            </div>
          </div>
          <div className="col-md-6 text-center">
              <Image />
          </div>
        </div>
      </div>
    </>

  )
}
