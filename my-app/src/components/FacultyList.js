import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import facultyService from "../services/faculty.service";

const FacultyList = () => {
  const [faculty, setFaculty] = useState([]);

  const init = () => {
    facultyService
      .getAllfaculty()
      .then((response) => {
        console.log("Printing faculty data", response.data);
        setFaculty(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  // Remove
  const handleDelete = (sid) => {
    console.log("Printing id", sid);
    facultyService
      .removefaculty(sid)
      .then((response) => {
        console.log("faculty deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container">
      <h3 style={{ color: 'white' }}>List of Faculty</h3>
      <hr />
      <div>
        <Link to="/addfaculty" className="btn btn-primary mb-2">
          Add Faculty
        </Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th> Id</th>
              <th> Faculty Name</th>
              <th> Faculty Email</th>
              <th> Faculty Phone</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody id="table-text">
            {faculty.map((faculty) => (
              <tr key={faculty.fid}>   
                <td>{faculty.fid}</td>
                <td>{faculty.fname}</td>
                <td>{faculty.femail}</td>
                <td>{faculty.fphone}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={`/faculty/edit/${faculty.fid}`}
                  >
                    Update
                  </Link>

                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(faculty.fid);
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

export default FacultyList;
