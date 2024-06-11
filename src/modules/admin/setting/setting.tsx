import { useState } from "react";
import { useTitle } from "../../../hooks/title/title";
import { useTranslation } from "react-i18next";
import { BreadCrumb } from 'primereact/breadcrumb';
import './setting.scss'
import { useNavigate } from "react-router-dom";
import { Divider } from 'primereact/divider';

function Setting() {
  const { t } = useTranslation()
  const navigation = useNavigate()
  useTitle(t('setting'))

  const items = [{ label: t('setting') }];
  const home = {
    icon: 'pi pi-home', command: () => {
      navigation('/admin/home')
    },
  }

  return (
    <section className="setting-admin-page">
      <BreadCrumb model={items} home={home} />
      <Divider />
    </section>
  );
}

export default Setting;
