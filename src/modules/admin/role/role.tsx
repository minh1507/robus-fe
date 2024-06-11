import { useState } from "react";
import { useTitle } from "../../../hooks/title/title";
import { useTranslation } from "react-i18next";
import { BreadCrumb } from 'primereact/breadcrumb';
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import Yup from "../../../yupConfig";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "primereact/button";

function Role() {
  const { t } = useTranslation()
  const navigation = useNavigate()
  useTitle(t('role'))

  const items = [{ label: t('role') }];
  const home = {
    icon: 'pi pi-home', command: () => {
      navigation('/admin/home')
    },
  }

  const schema = Yup.object().shape({
    username: Yup.string()
      .required()
      .label('search'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSearch = (data: any) => {
    console.log(data)
  }

  return (
    <section className="role-admin-page">
      <BreadCrumb model={items} home={home} />
      <form className="mt-3" onSubmit={handleSubmit(onSearch)}>
        <section>
          <InputText className="shadow-none" placeholder={t('name')} />
        </section>
        <section>
          <Button className="mt-3 shadow-none" label="Search" />
        </section>
      </form>
      <Divider />
    </section>
  );
}

export default Role;
