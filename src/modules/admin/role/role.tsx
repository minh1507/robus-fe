import { useState } from "react";
import { useTitle } from "../../../hooks/title/title";
import { useTranslation } from "react-i18next";

function Role() {
  const {t, i18n} = useTranslation()
  useTitle(t('role'))

  return (
    <section className="role-admin-page">
        role page
    </section>
  );
}

export default Role;
