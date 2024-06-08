import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import "./home.scss";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required()

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: any) => console.log(data)

  const title = <h3 className="text-center">Sign in</h3>;
  const form = (
    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
      <section className="p-inputgroup flex-1 input">
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText {...register("username")}  className="shadow-none" placeholder="Username" />
      </section>
      <small>{errors.username?.message}</small>
      <section className="p-inputgroup flex-1 input mt-3">
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText {...register("password")}  className="shadow-none" placeholder="Username" />
      </section>
      <small>{errors.username?.message}</small>
      <Button className="button mt-3" label="Login"/>
    </form>
  );

  return (
    <section className="home-admin-page">
      <Card header={title} className="home-admin-page-card">
        {form}
      </Card>
    </section>
  );
}

export default Home;
