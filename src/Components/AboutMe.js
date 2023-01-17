import React from 'react'
import Image from './Image'

export default function AboutMe(props) {
  return (
    <>
      <div className="container">
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5  rounded-3">
              <h1>SK SAHIL ALI</h1>
              <p id="introText">
                Intro:
              </p>
              <ul>My name is SK SAHIL ALI</ul>
              <ul>I am from ODISHA</ul>
              <ul>I am a SoftWare Engineer</ul>
              <ul>I do WebDevlopment</ul>
              <ul>Email id:<a  aria-current="page" href="sksahilali.ind@gmail.com" target="_blank" rel="noopener noreferrer">sksahilali.ind@gmail.com</a></ul>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <Image sahil={props.image} />
          </div>
        </div>
      </div>
    </>

  )
}
