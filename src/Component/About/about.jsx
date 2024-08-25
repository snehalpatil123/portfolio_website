import React from 'react'
import './about.css'
export default function About() {
  return (
    <div id="about"className="container-fuild  p-2 mt-3 pt-3 pb-5 mb-2" style={{width:"100%"}}>
    <div id="box1"></div>
      <h1 className="text-center mt-5 pt-2 ">About me</h1>
      <div className="row pt-5">
         <div className=" col-sm-6">
         
                <br />Web Developer with expertise of React.js, Redux, Cloud Firestore, HTML and CSS. currently learning React Native for Mobile Application.
                <br /><br/>
                I am passionate programmer and a learner, born and brought up in Pakistan.Currently, I am enrolled in Tech Karo - Web Development Program "Conducted by CIRCLE".
                <br />
                <br />
                Along with that, I also help people as a COACH on their journey of becoming a professional programmer. 
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
         </div>
         <div className="col-sm-6 pt-3 ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcuwiFUdycwrdgnAxxdF_IIxcGv2WRx8tgA&s "  className="rounded" style={{width:"100%",height:"100%"}} alt="" />
         </div>
      </div>
    </div>
  )
}
