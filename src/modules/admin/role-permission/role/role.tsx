import React, { useState } from "react";
import { useTitle } from "../../../../hooks/title/title";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Yup from "../../../../yupConfig";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./role.scss";

function Role() {
  const { t } = useTranslation();
  useTitle(t("role"));
  const [visible, setVisible] = useState(false);

  const [products, setProducts] = useState([
    {
      role: "Admin",
      type: "system",
      createOn: "Feb 6, 2021 10:59:41 AM",
      numberUser: "6",
    },
    {
      role: "User ",
      type: "Custom",
      createOn: "Feb 6, 2021 11:59:41 AM",
      numberUser: "600",
    },
    {
      role: "Seller ",
      type: "Custom",
      createOn: "Feb 6, 2021 11:50:41 AM",
      numberUser: "60",
    },
    {
      role: "Admin",
      type: "system",
      createOn: "Feb 6, 2021 10:59:41 AM",
      numberUser: "6",
    },
    {
      role: "User ",
      type: "Custom",
      createOn: "Feb 6, 2021 11:59:41 AM",
      numberUser: "600",
    },
    {
      role: "Seller ",
      type: "Custom",
      createOn: "Feb 6, 2021 11:50:41 AM",
      numberUser: "60",
    },
    {
      role: "Admin",
      type: "system",
      createOn: "Feb 6, 2021 10:59:41 AM",
      numberUser: "6",
    },
    {
      role: "User ",
      type: "system",
      createOn: "Feb 6, 2021 11:59:41 AM",
      numberUser: "600",
    },
    {
      role: "Seller ",
      type: "Custom",
      createOn: "Feb 6, 2021 11:50:41 AM",
      numberUser: "60",
    },
    {
      role: "Admin",
      type: "system",
      createOn: "Feb 6, 2021 10:59:41 AM",
      numberUser: "6",
    },
    {
      role: "User ",
      type: "Custom",
      createOn: "Feb 6, 2021 11:59:41 AM",
      numberUser: "600",
    },
    {
      role: "Seller ",
      type: "Custom",
      createOn: "Feb 6, 2021 11:50:41 AM",
      numberUser: "60",
    },
  ]);

  const actionBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2 shadow-none"
          onClick={() => setVisible(true)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          className="shadow-none"
          onClick={() => deleteProd()}
        />
      </React.Fragment>
    );
  };
  const deleteProd = () => {
    console.log(1);
  };

  return (
    <section className="role-admin-page">
      <DataTable
        value={products}
        stripedRows
        tableStyle={{ minWidth: "300px" }}
      >
        <Column field="role" header="Name" style={{ width: "75%" }} ></Column>
        <Column
          field="action"
          header="Action"
          body={actionBodyTemplate}
          exportable={false}
        ></Column>
      </DataTable>

    </section>
  );
}

export default Role;
