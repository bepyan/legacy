import React from "react";

import LandingBio from "../components/LandingBio";
import Layout from "../components/Layout";
import SearchEngine from "../components/SearchEngine";

const LandingPage = () => (
  <Layout>
    <SearchEngine title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio />
  </Layout>
);

export default LandingPage;
