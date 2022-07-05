import React from "react";
import ReactDOM, { render } from "react-dom";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import facultyService from "../services/faculty.service";

const AddFaculty = () => {
  const [fname, setFname] = useState("");
  const [femail, setFemail] = useState("");
  const [fphone, setFphone] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const saveFaculty = (e) => {
    e.preventDefault();

    const faculty = { 
        id,
        fname,
        femail,
        fphone};

    if (id) {
      //update
      facultyService
        .updatefaculty(faculty)
        .then((response) => {
          console.log("faculty data updated successfully", response.data);
          history.push("/");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      facultyService
        .createfaculty(faculty)
        .then((response) => {
          console.log("faculty added successfully", response.data);
          history.push("/");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      facultyService
        .getfaculty(id)
        .then((faculty) => {
        
          setFname(faculty.data.fname);
          setFemail(faculty.data.femail);
          setFphone(faculty.data.fphone);
          }
        )
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div className="container">
      <h3 style={{ color: 'white' }}>Add Faculty</h3>
      <hr />
      <form className="was-validated">
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="Enter Faculty Name"
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control col-4"
            id="femail"
            value={femail}
            onChange={(e) => setFemail(e.target.value)}
            placeholder="Enter Faculty Email"
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="fphone"
            value={fphone}
            onChange={(e) => setFphone(e.target.value)}
            placeholder="Enter Faculty Phone"
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>


        <div>
          <button onClick={(e) => saveFaculty(e)} className="btn btn-success">
            Save
          </button>
        </div>
      </form>
      <hr />
      <Link to="/">Back to Faculty List</Link>
    </div>
  );

};


export default AddFaculty;
