import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const Home = () => {
  const getData = async () => {
    try {
      const response = await axios.get("/api/user/get-all-approved-doctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <p>Home</p>
    </Layout>
  );
};

export default Home;
