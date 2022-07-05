import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import studentService from "../services/student.service";

const StudentList = () => {
  const [student, setStudent] = useState([]);

  const init = () => {            {/*Get data from the Db */}
    studentService
      .getAll()
      .then((response) => {             
        console.log("Printing student data", response.data);
        setStudent(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  // Remove
  const handleDelete = (id) => {
    console.log("Printing id", id);              {/*USED TO DELETE RECORD*/}
    studentService
      .remove(id)
      .then((response) => {
        console.log("Student deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container">
      <h3  style={{ color: 'white' }}>List of Students</h3>
      <hr />
      <div>
        <Link to="/add" className="btn btn-primary mb-2">
          Add Student
        </Link>
        <table className="table table-bordered table-striped" id="table-list">
          <thead className="thead-dark">
            <tr>
              <th> Id</th>
              <th> Name</th>
              <th> Gender</th>
              <th> DOB</th>
              <th> Course</th>
              <th> Duration</th>
              <th> Faculty Name</th>
              <th> Faculty Email</th>
              <th> Faculty Phone</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody id="table-text">
            {student.map((student) => (
              <tr key={student.id}>   
                <td>{student.id}</td>
                <td>{student.sname}</td>
                <td>{student.sgender}</td>
                <td>{student.sdob}</td>
                <td>{student.cid.cname}</td>
                <td>{student.cid.cduration}</td>
                <td>{student.fid.fname}</td>
                <td>{student.fid.femail}</td>
                <td>{student.fid.fphone}</td>
                <td id="list-btn">
                  <Link
                    className="btn btn-info"
                    to={`/student/edit/${student.id}`}
                  >
                    Update
                  </Link>

                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(student.id);
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

export default StudentList;
