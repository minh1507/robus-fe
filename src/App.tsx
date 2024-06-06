import { useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <h1>{t('Welcome to React')}</h1>
    </>
  );
}

export default App;
