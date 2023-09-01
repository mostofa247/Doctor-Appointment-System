import React from "react";
import { useNavigate } from "react-router-dom";

function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-2 cursor-pointer"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <div className="d-flex">
        <img
          src={doctor.image}
          alt=""
          height="100"
          width="100"
          className="m-2"
        />
        <div>
          <h1 className="card-title m-2">
            Name: {doctor.firstName} {doctor.lastName}
          </h1>
          <p>Specialization: {doctor.specialization}</p>
          <p>Registration Number: {doctor.registration}</p>
          <p>More Details: {doctor.website}</p>
          <p>Education: {doctor.education}</p>
        </div>
      </div>
      <hr />
      <p>
        <b>Phone Number : </b>
        {doctor.phoneNumber}
      </p>
      <p>
        <b>Address : </b>
        {doctor.address}
      </p>
      <p>
        <b>Fee per Visit : </b>
        {doctor.feePerCunsultation}
      </p>

      <p>
        <b>Timings : </b>
        {doctor.timings[0]} - {doctor.timings[1]}
      </p>
    </div>
  );
}

export default Doctor;
