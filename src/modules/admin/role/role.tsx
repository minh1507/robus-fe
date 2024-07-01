import React, { useState } from "react";
import { useTitle } from "../../../hooks/title/title";
import { useTranslation } from "react-i18next";
import { BreadCrumb } from "primereact/breadcrumb";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import Yup from "../../../yupConfig";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from "primereact/paginator";
import "./role.scss";

function Role() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  useTitle(t("role"));
  const [visible, setVisible] = useState(false);
  const items = [{ label: t("role") }];
  const home = {
    icon: "pi pi-home",
    command: () => {
      navigation("/admin/home");
    },
  };

  const schema = Yup.object().shape({
    username: Yup.string().required().label("search"),
  });

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSearch = (data: any) => {
    console.log(data);
  };

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

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event: { first: number; rows: number }) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <section className="role-admin-page">
      <BreadCrumb model={items} home={home} />
      <form className=" Fix mt-3" onSubmit={handleSubmit(onSearch)}>
        <section>
          <InputText className="shadow-none" placeholder={t("name")} />
        </section>
        <section>
          <Button className="mt-3 shadow-none" label="Search" />
        </section>
      </form>
      <Divider />

      <DataTable
        value={products}
        stripedRows
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="role" header="Role" style={{ width: "25%" }}></Column>
        <Column field="type" header="Type" style={{ width: "25%" }}></Column>
        <Column
          field="createOn"
          header="Create On"
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="numberUser"
          header="Number"
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="action"
          header="Action"
          body={actionBodyTemplate}
          exportable={false}
          style={{ minWidth: "12rem" }}
        ></Column>
      </DataTable>

      <div className="card">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={120}
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
}

export default Role;
