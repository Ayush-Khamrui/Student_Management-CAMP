import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import courseService from "../services/course.service";
import Header from "../Header";

const AddCourse = () => {
  const [cname, setCname] = useState("");
  const [cduration, setCduration] = useState("");

  const history = useHistory();
  const { id } = useParams();

  const saveCourse = (e) => {
    e.preventDefault();

    const course = { 
        id,
        cname,
        cduration};

    if (id) {
      //update
      courseService
        .updatecourse(course)
        .then((response) => {
          console.log("Course data updated successfully", response.data);
          history.push("/courselist");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      courseService
        .createcourse(course)
        .then((response) => {
          console.log("Course added successfully", response.data);
          history.push("/courselist");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      courseService
        .getcourse(id)
        .then((course) => {
        
          setCname(course.data.cname);
          setCduration(course.data.cduration);
          }
        )
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div>
    <div className="container">
        <h3 style={{ color: 'white' }}>Add Course</h3>
      <hr />
        <form className="was-validated">
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="cname"
            value={cname}
            onChange={(e) => setCname(e.target.value)}
            placeholder="Enter Course Name"
            required
          />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
        </div>

        <div className="form-group">
          <input
            type="number"
            className="form-control col-4"
            id="sduration"
            value={cduration}
            onChange={(e) => setCduration(e.target.value)}
            placeholder="Enter Course Duration"
              required
          />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
        </div>


        <div>
          <button onClick={(e) => saveCourse(e)} className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
      <hr />
      <Link to="/courselist">Back to Course List</Link>
    </div>
    </div>
  );
};

export default AddCourse;
