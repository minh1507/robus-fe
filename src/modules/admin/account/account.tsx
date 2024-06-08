import { useState } from "react";
import { useTitle } from "../../../hooks/title/title";
import { useTranslation } from "react-i18next";

function Account() {
  const {t, i18n} = useTranslation()
  useTitle(t('account'))

  return (
    <section className="account-admin-page">
        account page
    </section>
  );
}

export default Account;
