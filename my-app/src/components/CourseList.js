import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import courseService from "../services/course.service";

const CourseList = () => {
  const [course, setCourse] = useState([]);

  const init = () => {
    courseService
      .getAllcourse()
      .then((response) => {
        console.log("Printing course data", response.data);
        setCourse(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  // Remove
  const handleDelete = (cid) => {
    console.log("Printing id", cid);
    courseService
      .removecourse(cid)
      .then((response) => {
        console.log("course deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container">
      <h3 style={{ color: 'white' }}>List of Courses</h3>
      <hr />
      <div>
        
        <Link to="/addcourse" className="btn btn-primary mb-2">
          Add Course
        </Link>
        
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th> Id</th>
              <th> Course Name</th>
              <th> Duration</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody id="table-text">
            {course.map((course) => (
              <tr key={course.cid}>   
                <td>{course.cid}</td>
                <td>{course.cname}</td>
                <td>{course.cduration}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={`/course/edit/${course.cid}`}
                  >
                    Update
                  </Link>

                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(course.cid);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseList;
