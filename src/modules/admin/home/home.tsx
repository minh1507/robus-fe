import { useState } from "react";
import HomeAdminPage from '../../../assets/home-admin.jpg'
import "./home.scss";

import { useTitle } from "../../../hooks/title/title";
import { useTranslation } from "react-i18next";

function Home() {
  const {t, i18n} = useTranslation()
  useTitle(t('home'))

  return (
    <section className="home-admin-page">
      <img src={HomeAdminPage} alt="..." />
      <p>{t('main')}</p>
    </section>
  );
}

export default Home;
