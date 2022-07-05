import React from "react";
import Clock1 from "./Clock1"
import { Component } from 'react';
import "./First.css";
import Create from "./Create";
import ProfileUi from "react-profile-card";

class First extends Component {


  render() {
    return (

      <div>



        <Clock1></Clock1>

        <div className="in">
          <h1 className="pk">Time Waits For No One!!!!</h1>
          <h2 className="np"> <a className="np" href="http://localhost:3000/add">JOIN NOW</a></h2>
        </div>
        <div className="in">
          <h5 className="np"> <br></br><a className="np" href="http://localhost:3000/courselist">CHECK OUR EXCLUSIVE COLLECTION OF </a></h5>
          <br></br>
          <br></br>
          <h2 className="but"> <a className="jp" href="http://localhost:3000/courselist"><b>COURSES</b></a></h2>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          
        <div className="l">
          <br></br>
          <h2><b><i>OUR EXPERTISE</i></b></h2>
          <div >
          <br></br>
          <img class="cb" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png" />
          <h2 class="c"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
          <img class="c" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"></img>
          <h2 class="c"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
          <img class="c" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png"></img>
          <h2 class="c"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
          <img class="cc" src=" https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/800px-The_C_Programming_Language_logo.svg.png"></img>
        
          <h2 class="c"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
          <img class="c" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"></img>
          <h2 class="c"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
          <img class="c" src="  https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1920px-PHP-logo.svg.png"></img>
          
          <h2 class="c"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
          <img class="ca" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Kotlin_logo_2021.svg/1920px-Kotlin_logo_2021.svg.png"></img>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="set"><b><i>Learn From The Experts World Wide</i></b> </h2>
          <a href="/facultylist">
          <img class="ca" src="https://thumbs.dreamstime.com/b/teacher-text-nice-red-lettering-sandy-metal-surface-spelling-33180900.jpg"></img>
          </a>
          <br></br>
          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
<div className="s">
  <h2>ADMINISTRATOR</h2>
  <br></br>
  </div><div className="sm">
          <ProfileUi className="sm"
          imgUrl='https://i.ibb.co/g3H969y/Whats-App-Image-2022-06-26-at-10-16-33-AM.jpg' 
          name='Mrs. Sangeeta JOSHI '
          />
</div>
<br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
       

         
          
        </div>  
        
        <Create></Create>
        </div>
        
      </div>


    );

  }
}
export default First;