import { useRef, useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from 'react-router-dom';
import "./auth.scss";

import Yup from "../../../yupConfig";
import { useTitle } from "../../../hooks/title/title";
import { Login } from "./type/login";
import useToast from "../../../hooks/toast/toast";
import { useTranslation } from "react-i18next";
import StringUtil from "../../common/util/string.util";

function Auth() {
  const { showToast } = useToast();
  const { t, i18n } = useTranslation();
  useTitle(t('login'))
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    username: Yup.string()
      .required()
      .label('username'),
    password: Yup.string()
      .required()
      .label('password'),
  });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: Login) => {
    console.log(data)
    showToast(StringUtil.firstLetterUppercase(t('mix.login', {object: 'success'})), 'success')
    navigate('/admin/home')
  }

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
          <i className="pi pi-lock"></i>
        </span>
        <InputText {...register("password")}  className="shadow-none" placeholder="Username" />
      </section>
      <small>{errors.password?.message}</small>
      <Button className="button mt-3" label="Login"/>
    </form>
  );

  return (
    <section className="auth-admin-page">
      <Card header={title} className="auth-admin-page-card">
        {form}
      </Card>
    </section>
  );
}

export default Auth;
