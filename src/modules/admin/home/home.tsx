import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from 'primereact/inputtext';

import "./home.scss";

function Home() {
  const header = <h3 className="text-center">Login</h3>;
  return (
    <section className="home-admin-page ">
      <Card header={header} className="home-admin-page-card">
        <div className="p-inputgroup flex-1 input">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText placeholder="Username"/>
        </div>
      </Card>
    </section>
  );
}

export default Home;
