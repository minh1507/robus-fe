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
import "./transaction.scss";

function Transaction() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  useTitle(t("Transaction"));
  const [visible, setVisible] = useState(false);
  const items = [{ label: t("Transaction") }];
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
      transaction_Time: "	Feb 6, 2021 10:59:41 AM",
      name: "Ca Quynh Son",
      email: "namdhgch190700@gmail.com",
      trading_Code: "08564712543",
      transaction_Amoun: "250000",
      transaction_Content: "Mua Thit heo",
      transaction_Status: "completed",
    },
    {
      transaction_Time: "	Feb 6, 2021 10:59:41 AM",
      name: "Nguyen Thi Huyen",
      email: "namdhgch190700@gmail.com",
      trading_Code: "09756842531",
      transaction_Amoun: "250000",
      transaction_Content: "Mua Thit heo",
      transaction_Status: "completed",
    },
    {
      transaction_Time: "	Feb 6, 2021 10:59:41 AM",
      name: "le viet phuong",
      email: "namdhg190700@gmail.com",
      trading_Code: "0932201001",
      transaction_Amoun: "250000",
      transaction_Content: "mua đồ hộp",
      transaction_Status: "Canceled",
    },
    {
      transaction_Time: "	Feb 6, 2021 10:59:41 AM",
      name: "Duong Duc Anh",
      email: "DuongDucAnh1@gmail.com",
      trading_Code: "08653378573",
      transaction_Amoun: "250000",
      transaction_Content: "mua cá kho",
      transaction_Status: "completed",
    },
    {
      transaction_Time: "	Feb 6, 2021 10:59:41 AM",
      name: "Le Minh Quan",
      email: "namdhgch190700@gmail.com",
      trading_Code: "0223361215",
      transaction_Amoun: "250000",
      transaction_Content: "ok",
      transaction_Status: "completed",
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
        <Column
          field="transaction_Time"
          header="Transaction Time"
          style={{ width: "14%" }}
        ></Column>
        <Column field="name" header="Name" style={{ width: "14%" }}></Column>
        <Column field="email" header="Email" style={{ width: "14%" }}></Column>
        <Column
          field="trading_Code"
          header="Trading Code"
          style={{ width: "14%" }}
        ></Column>
        <Column
          field="transaction_Amoun"
          header="Transaction Amount"
          style={{ width: "14%" }}
        ></Column>
        <Column
          field="transaction_Content"
          header="Transaction Content"
          style={{ width: "14%" }}
        ></Column>
        <Column
          field="transaction_Status"
          header="Transaction Status"
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

export default Transaction;
