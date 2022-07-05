import "./Header.css";
import React from "react";
import { Component } from 'react';
import "./First.css";
function Header() 
{
    return (
       
<div class="na">
<d class='active'>  
  <a className="co" href="http://localhost:3000"><b>HOME</b>
 </a>
 </d>
 <q class='active'>  
  <a className="co1" href="http://localhost:3000/List"><b><strong>STUDENT MANAGEMENT SYSTEM</strong></b>
 </a>
 </q>

  <c class='active'> 
  <a className="co" href="http://localhost:3000/List"><b>DISPLAY</b></a>
  </c>
</div>
    );
  }
  
   
  export default Header;
  