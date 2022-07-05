import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import studentService from "../services/student.service";
import "./AddStudent.css";

const AddStudent = () => {
  const [sname, setSname] = useState("");
  const [sgender, setSgender] = useState("");
  const [sdob, setSdob] = useState("");
  const [cname, setCname] = useState("");
  const [cduration, setCduration] = useState("");
  const [fname, setFname] = useState("");
  const [femail, setFemail] = useState("");
  const [fphone, setFphone] = useState("");

  const history = useHistory();
  const { id } = useParams();

  const saveStudent = (e) => {
    e.preventDefault();

    const cid = {
      cname,
      cduration
    };

    const fid = {
      fname,
      femail,
      fphone
    };

    const student = {
      id,
      sname,
      sgender,
      sdob,
      cid,
      fid
    };

    if (id) {
      //update
      studentService
        .update(student)
        .then((response) => {
          console.log("Student data updated successfully", response.data);
          history.push("/list");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      studentService
        .create(student)
        .then((response) => {
          console.log("Student added successfully", response.data);
          history.push("/list");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      studentService
        .get(id)
        .then((student) => {

          setSname(student.data.sname);
          setSgender(student.data.sgender);
          setSdob(student.data.sdob);
          setCname(student.data.cid.cname);
          setCduration(student.data.cid.cduration);
          setFname(student.data.fid.fname);
          setFemail(student.data.fid.femail);
          setFphone(student.data.fid.fphone);
        }
        )
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div id="student-form">
    <h1 className="t" >ENTER STUDENT DETAILS   (REGISTRAION FORM)</h1>
    <div  className="ns">
      
      <form className="was-validated">
        <div className="form-group">
          <input
            type="text"
            id="sname"
            className="form-control col-4"
            value={sname}
            onChange={(e) => setSname(e.target.value)}
            placeholder="Enter Student Name"
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>

        <div className="form-group">
          <select name="gender" className="form-control col-4" placeholder="Enter Gender" value={sgender} onChange={(e) => setSgender(e.target.value)}>
            <option selected>Enter Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="dob"
            value={sdob}
            onChange={(e) => setSdob(e.target.value)}
            placeholder="Enter DOB"
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>


        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="course-name"
            value={cname}
            onChange={(e) => setCname(e.target.value)}
            placeholder="Enter Course name"
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>


        <div className="form-group">
          <input
            type="number"
            className="form-control col-4"
            id="course-duration"
            value={cduration}
            onChange={(e) => setCduration(e.target.value)}
            placeholder="Enter Course duration"
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>


        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="Enter faculty name"
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
            placeholder="Enter faculty Email"
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>



        <div className="form-group">
          <input
            type="number"
            className="form-control col-4"
            id="fphone"
            value={fphone}
            onChange={(e) => setFphone(e.target.value)}
            placeholder="Enter Phone Number ex"
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>


        <div>
          <button onClick={(e) => saveStudent(e)} className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
      <hr />
      <Link to="/List">Back to List</Link>
    </div>
    </div>
  );
};

export default AddStudent;
