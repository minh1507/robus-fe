import { useState } from "react";
import "./home.scss";

import { useTitle } from "../../../hooks/title/title";

function Home() {
  useTitle("Home")


  return (
    <section className="home-admin-page">
      <p>body</p>
    </section>
  );
}

export default Home;
