import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
import HomeAbout from "../Layout/HomeAbout";
import HomeLimited from "../Layout/HomeLimited";

function Home() {
  return (
    <Layout>
      <HomeBanner />
      <HomeAbout />
      <HomeLimited />
    </Layout>
  );
}

export default Home;
