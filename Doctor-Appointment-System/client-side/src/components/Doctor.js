import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Doctor.css";

function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-2 cursor-pointer shadow p-3 mb-5 bg-body-tertiary rounded"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <div className="d-flex">
        <div className="col-md-4">
          <img src={doctor.image} alt="" className="m-2 doctor-image" />
        </div>
        <div className="col-md-8 text-start doctor-details">
          <h6 className="card-title">
            {" "}
            <strong>
              <span className="text-color">Name:</span>
            </strong>{" "}
            {doctor.firstName} {doctor.lastName}
          </h6>
          <p>
            <strong>
              <span className="text-color">Specialization:</span>
            </strong>{" "}
            {doctor.specialization}
          </p>
          <p>
            <strong>
              <span className="text-color">Registration Number:</span>
            </strong>{" "}
            {doctor.registration}
          </p>
          <p>
            <strong>
              <span>More Details:</span>
            </strong>{" "}
            {doctor.website}
          </p>
          <p>
            <strong>
              <span className="text-color">Education:</span>
            </strong>{" "}
            {doctor.education}
          </p>
        </div>
      </div>
      <hr />
      <p>
        <b>
          <span className="text-color">Phone Number : </span>
        </b>
        {doctor.phoneNumber}
      </p>
      <p>
        <b>
          <span className="text-color">Address :</span>{" "}
        </b>
        {doctor.address}
      </p>
      <p>
        <b>
          <span className="text-color">Fee per Visit :</span>{" "}
        </b>
        {doctor.feePerCunsultation}
      </p>

      <p>
        <b>
          <span className="text-color">Timings :</span>{" "}
        </b>
        {doctor.timings[0]} - {doctor.timings[1]}
      </p>
    </div>
  );
}

export default Doctor;
