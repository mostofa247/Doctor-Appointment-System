import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/home.css";
import Layout from "../components/Layout";
import opi from "../style/asset/pexels-mart-production-7088510 (Original).mp4";
import doctor1 from "../style/asset/Untitled design.png";
import doctor2 from "../style/asset/Untitled design (1).png";
import doctor3 from "../style/asset/Untitled design (2).png";
import { Col, Row } from "antd";
import Doctor from "../components/Doctor";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
function Home() {
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get("/api/user/get-all-approved-doctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(hideLoading());
      if (response.data.success) {
        setDoctors(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <section className="">
        <div id="carouselExampleIndicators" class="carousel ">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={doctor1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={doctor2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={doctor3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <br />

      <section className="">
        <h4 className="text-center">
          <span className="text-title text-uppercase">Doctors Here</span>
        </h4>
        <Row gutter={20}>
          {doctors.map((doctor) => (
            <Col span={8} xs={24} sm={24} lg={8}>
              <Doctor doctor={doctor} />
            </Col>
          ))}
        </Row>
      </section>
      <section>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="hospital-title">
                  <strong>
                    <span className="text-title">Hospital Overview</span>
                  </strong>
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 5 hours ago
                  </small>
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <video width="450" height="200" controls>
                <source
                  src={opi}
                  class="img-fluid rounded-start"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
