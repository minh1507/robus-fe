import { useState } from "react";
import { useTitle } from "../../../hooks/title/title";
import { useTranslation } from "react-i18next";

function Setting() {
  const {t} = useTranslation()
  useTitle(t('setting'))

  return (
    <section className="setting-admin-page">
        setting page
    </section>
  );
}

export default Setting;
