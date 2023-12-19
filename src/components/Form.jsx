import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
//Datatable Modules
import axios from "axios";

import Navbar from "./Navbar";
import DataTable from "react-data-table-component";
import "datatables.net-dt/css/jquery.dataTables.css"; // Add this line for styling
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "jquery/dist/jquery.min.js"; //search functionality in datatable
//Datatable Modules

import $ from "jquery";
import Enrollments from "./Enrollments";
import "./Dashboard.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//styling for the 1st model
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "720px",
};

function Form() {
  //1St MOdel
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputText, setInputText] = useState("");

  let [pincode, setPincode] = useState("");
  let [state, setState] = useState("");
  let [country, setCountry] = useState("");
  let [city, setCity] = useState("");

  let handleSubmit = () => {
    if (pincode.trim() === "") {
      return;
    }

    axios
      .get(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((res) => {
        console.log(res.data[0]["PostOffice"][0]["Pincode"]);
        setCountry(res.data[0]["PostOffice"][0]["Country"]);
        setState(res.data[0]["PostOffice"][0]["State"]);
        setCity(res.data[0]["PostOffice"][0]["District"]);
      })
      .catch(() => {
        setPincode("");
      });
  };

  let handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

//   const handleInputChange = (event) => {
//     const inputValue = event.target.value;

//     // Use a regular expression to check if the input contains only letters
//     const isValidInput = /^[A-Za-z]+$/.test(inputValue);

//     // If the input is valid, update the state
//     if (isValidInput || inputValue === "") {
//       setInputText(inputValue);
//     }
//   };

  // FOr the post the data to the database
  const [formData, setFormData] = useState({
    //     fullName: '',
    //     email: '',
    //     designation:  '',
    //     role: '',
    //     contactNumber: '',
    //     pincode: '',
    //     city: '',
    //     country: '',
    //     state: '',
    //     street: '',
  });

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Make your Axios POST request here using formData
//       await axios
//         .post
//         //  'http://localhost:3063/admin/api/save-user-postt',
//         //  formData
//         ();

//       toast.success("User enrolled successfully", {
//         position: "top-right",
//         autoClose: 3000, // Close the toast after 3 seconds
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });

//       // Close the modal after successful submission
//       handleClose();
//     } catch (error) {
//       console.error("Error submitting form:", error);

//       // // Show error toast
//       // toast.error('Failed to enroll user', {
//       //   position: 'top-right',
//       //   autoClose: 3000,
//       //   hideProgressBar: false,
//       //   closeOnClick: true,
//       //   pauseOnHover: true,
//       //   draggable: true,
//       // });
//     }
//   };

  return (
    <>
      <Navbar />
      <h1 id="db">Enrollments</h1>
      <div className="caregiver">
        {/* <button >+Add Enrollments</button> */}
        <Button
          className="add_enrollment_button"
          style={{
            width: "200px",
            height: "40px",
            borderRadius: "10px",
            color: "white",
            backgroundColor: "black",
          }}
          onClick={handleOpen}
        >
          +Add Enrollments
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div
                className="full-screen"
                style={{ marginTop: "-50px", padding: "5px" }}
              >
                <div className="header">
                  <div>
                    <p style={{ marginBottom: "35px", marginRight: "900px" }}>
                      <h1>Add Enrollments</h1>{" "}
                    </p>
                    <p style={{ marginTop: "-35px", marginRight: "800px" }}>
                      Enter the required details to register a new number
                    </p>
                  </div>

                  <hr></hr>
                </div>
                <div className="form" style={{ padding: "65px" }}>
                  <form
                    onSubmit={handleFormSubmit}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div className="left">
                      {/* Full Name */}
                      <label>FullName</label>
                      <label style={{ color: "red" }}>*</label>
                      <br />
                      <input
                        type="text"
                        id="textInput"
                        name="textInput"
                        placeholder="Full name"
                        value={inputText}
                        onChange={handleInputChange}
                        style={{
                          width: "450px",
                          height: "30px",
                          marginTop: "9px",
                        }}
                      />

                      <br />
                      <br />
                      <label style={{ margin: "" }}>Email</label>
                      <label style={{ color: "red" }}>*</label>
                      <br />
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: "450px",
                          height: "30px",
                          marginTop: "9px",
                        }}
                      />

                      <br />
                      <br />
                      <label style={{ margin: "" }}>Designation</label>
                      <label style={{ color: "red" }}>*</label>
                      <br />
                      <select
                        style={{ width: "456px", height: "35px" }}
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        required
                      >
                        <option>Select</option>
                        <option value="Vizzhy Executive">
                          Vizzhy Executive
                        </option>
                        <option value="Nutritionist">Nutritionist</option>
                        <option value="Physiotherapist">Physiotherapist</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Nurse">Nurse</option>
                        <option value="Counselor">Counselor</option>
                        <option value="Phlebotomist">Phlebotomist</option>
                      </select>
                      <br />
                      <br />
                      <label style={{ margin: "" }}>Role</label>
                      <label style={{ color: "red" }}>*</label>
                      <br />
                      <select
                        style={{ width: "456px", height: "35px" }}
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                      >
                        <option>Select</option>
                        <option value="Admin">Admin</option>
                        <option value="Caregiver">Caregiver</option>
                        <option value="Operations">Operations</option>
                        <option value="Doctor">Doctor</option>
                      </select>

                      <br />
                      <br />
                      <label style={{ margin: "" }}>Contact Number</label>
                      <label style={{ color: "red" }}>*</label>
                      <br />
                      <input
                        type="number"
                        placeholder="Contact Number"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: "450px",
                          height: "30px",
                          marginTop: "9px",
                        }}
                      />
                    </div>
                    <div className="right" style={{ marginLeft: "200px" }}>
                      <label>Pincode</label>
                      <label style={{ color: "red" }}>*</label>
                      <br />
                      <input
                        type="number"
                        placeholder="Pincode"
                        name="pincode"
                        value={pincode}
                        onChange={handlePincodeChange}
                        onBlur={handleSubmit}
                        required
                        style={{
                          width: "450px",
                          height: "30px",
                          marginTop: "9px",
                        }}
                      />

                      <br />
                      <br />
                      <label style={{ margin: "" }}>City</label>
                      <label style={{ color: "red" }}>*</label>
                      <br />
                      <input
                        type="text"
                        placeholder="City"
                        name="city"
                        value={city}
                        required
                        style={{
                          width: "450px",
                          height: "30px",
                          marginTop: "9px",
                        }}
                      />

                      <br />
                      <br />
                      <label style={{ margin: "" }}>Country</label>
                      <label style={{ color: "red" }}>*</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Country"
                        name="country"
                        value={country}
                        required
                        style={{ width: "450px", height: "30px" }}
                      ></input>

                      <br />
                      <br />
                      <label style={{ margin: "" }}>State</label>
                      <label style={{ color: "red" }}>*</label>
                      <br />
                      <input
                        type="text"
                        required
                        style={{ width: "450px", height: "30px" }}
                        name="state"
                        value={state}
                        placeholder="State"
                      ></input>

                      <br />
                      <br />
                      <label style={{ margin: "" }}>Street</label>
                      <label style={{ color: "red" }}>*</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Street"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: "450px",
                          height: "30px",
                          marginTop: "9px",
                        }}
                      />

                      <br />
                      <br />
                      <br />
                      <div
                        className="button"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button
                          style={{
                            width: "185px",
                            height: "40px",
                            borderRadius: "7px",
                            color: "white",
                            backgroundColor: "black",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            setTimeout(() => {
                              handleClose();
                            }, 100);
                          }}
                        >
                          cancel
                        </button>
                        <button
                          type="submit"
                          style={{
                            width: "185px",
                            height: "40px",
                            borderRadius: "7px",
                            color: "white",
                            backgroundColor: "black",
                          }}
                        >
                          Enroll
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>

      <div id="inputtag">
        <Enrollments />
      </div>
      <ToastContainer />
    </>
  );
}

export default Form;
