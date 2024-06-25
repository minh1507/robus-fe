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
import "./seller.scss";

function Seller() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  useTitle(t("seller"));
  const [visible, setVisible] = useState(false);
  const items = [{ label: t("seller") }];
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
      name: "Ca Quynh Son",
      phone: "08564712543",
      email: "namdhgch190700@gmail.com",
      address: "250 nguyen xien",
      business_Type: "grocery store",
      registration_Time: "	Feb 6, 2021 10:59:41 AM",
      account_Status: "Online",
    },
    {
      name: "Nguyen Thi Huyen",
      phone: "09756842531",
      email: "namdhgch190700@gmail.com",
      address: "250 nguyen xien",
      business_Type: "grocery store",
      registration_Time: "	Feb 6, 2021 10:59:41 AM",
      account_Status: "Online",
    },
    {
      name: "le viet phuong",
      phone: "0932201001",
      email: "namdhg190700@gmail.com",
      address: "250 nguyen xien",
      business_Type: "hotel",
      registration_Time: "	Feb 6, 2021 10:59:41 AM",
      account_Status: "disabled",
    },
    {
      name: "Duong Duc Anh",
      phone: "08653378573",
      email: "DuongDucAnh1@gmail.com",
      address: "250 nguyen xien",
      business_Type: "restaurant",
      registration_Time: "	Feb 6, 2021 10:59:41 AM",
      account_Status: "Online",
    },
    {
      name: "Le Minh Quan",
      phone: "0223361215",
      email: "namdhgch190700@gmail.com",
      address: "250 nguyen xien",
      business_Type: "supermarket",
      registration_Time: "	Feb 6, 2021 10:59:41 AM",
      account_Status: "temporarily locked",
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
      <form className="mt-3" onSubmit={handleSubmit(onSearch)}>
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
        <Column field="name" header="Name" style={{ width: "14%" }}></Column>
        <Column
          field="phone"
          header="Phone Number"
          style={{ width: "14%" }}
        ></Column>
        <Column field="email" header="Email" style={{ width: "14%" }}></Column>
        <Column
          field="address"
          header="Address"
          style={{ width: "14%" }}
        ></Column>
        <Column
          field="registration_Time"
          header="Registration time"
          style={{ width: "14%" }}
        ></Column>
        <Column
          field="account_Status"
          header="Account status time"
          style={{ width: "14%" }}
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

export default Seller;
