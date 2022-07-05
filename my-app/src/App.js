import React from "react";
import StudentList from "./components/StudentList";
//import AddStudent from "./components/AddStudent";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import AddCourse from "./components/AddCourse";
import AddStudent from "./components/AddStudent";
import FacultyList from "./components/FacultyList";
import AddFaculty from "./components/AddFaculty";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import First from "./First";
import Create from "./Create";
import Header from "./Header";


function App() {
  return (
    
    <Router>              
      <div >
      <body>  
      <Header/>
      
          <Switch>
            <Route exact path="/" component={First}/>
            <Route path="/add" component={AddStudent} />
            <Route path="/List" component={StudentList} />
            <Route path="/student/edit/:id" component={AddStudent} />
            <Route path="/addfaculty" component={AddFaculty} />
            <Route path="/facultylist" component={FacultyList} />
            <Route path="/faculty/edit/:id" component={AddFaculty} />
            <Route path="/courselist" component={CourseList} />
            <Route path="/course/edit/:id" component={AddCourse} />
            <Route path="/addcourse" component={AddCourse} />
            <Route path="/*" component={NotFound} />
          </Switch>

        </body>
      </div>
    </Router>
    
  );
}

export default App;
