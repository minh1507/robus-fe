import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { classNames } from "primereact/utils";
import { BreadCrumb } from "primereact/breadcrumb";
import { Paginator } from "primereact/paginator";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import Yup from "../../../yupConfig";
import { useForm } from "react-hook-form";
import { Divider } from "primereact/divider";
import { yupResolver } from "@hookform/resolvers/yup";

import "./post.scss";

const Post = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const items = [{ label: t("List Of Post ") }];

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
      title: "Đồ sương bò đông lạnh",
      describe: "sương bò",
      price: "100000 $",
      quantity: "Good",
      type: "đồ đông lạnh",
      date: "13/06/2024 10:59:41 AM",
      status: "Pendding",
      poster: "admin",
    },
    {
      title: "Rau muống tươi",
      describe: "Rau",
      price: "1000 $",
      quantity: "Good",
      type: "đồ tươi sống",
      date: "13/06/2024 10:59:41 AM",
      status: "approved",
      poster: "admin",
    },
    {
      title: "thịt hộp spam",
      describe: "thị hộp vẫn còn hạn sử dụng",
      price: "1000001 $",
      quantity: "Good",
      type: "đồ hộp",
      date: "13/06/2024 10:59:41 AM",
      status: "expired,",
      poster: "admin",
    },
    {
      title: "Đồ sương bò đông lạnh",
      describe: "sương bò",
      price: "100000 $",
      quantity: "Good",
      type: "đồ đông lạnh",
      date: "13/06/2024 10:59:41 AM",
      status: "Pendding",
      poster: "admin",
    },
    {
      title: "Cá kho",
      describe: "cá kho tươi ngon",
      price: "100000 $",
      quantity: "Good",
      type: "đã nấu chín",
      date: "13/06/2024 10:59:41 AM",
      status: "Deleted",
      poster: "admin",
    },
    {
      title: "Đồ sương bò đông lạnh",
      describe: "sương bò",
      price: "100000 $",
      quantity: "Good",
      type: "đồ đông lạnh",
      date: "13/06/2024 10:59:41 AM",
      status: "Pendding",
      poster: "admin",
    },
    {
      title: "Đồ sương bò đông lạnh",
      describe: "sương bò",
      price: "100000 $",
      quantity: "Good",
      type: "đồ đông lạnh",
      date: "13/06/2024 10:59:41 AM",
      status: "Pendding",
      poster: "admin",
    },
    {
      title: "Đồ sương bò đông lạnh",
      describe: "sương bò",
      price: "100000 $",
      quantity: "Good",
      type: "đồ đông lạnh",
      date: "13/06/2024 10:59:41 AM",
      status: "Pendding",
      poster: "admin",
    },
  ]);

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event: { first: number; rows: number }) => {
    setFirst(event.first);
    setRows(event.rows);
  };

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
  return (
    <section>
      <BreadCrumb model={items} home={home} className="bread_Crumb" />
      <form className="Fix mt-3" onSubmit={handleSubmit(onSearch)}>
        <section>
          <InputText className="shadow-none" placeholder={t("name")} />
        </section>
        <section>
          <Button className="mt-3 shadow-none" label="Search" />
        </section>
      </form>
      <DataTable
        value={products}
        showGridlines
        tableStyle={{ minWidth: "20rem" }}
        className="data_table"
      >
        <Column className="data_table" field="title" header="Title"></Column>
        <Column
          className="data_table"
          field="describe"
          header="Describe"
        ></Column>
        <Column className="data_table" field="price" header="Price"></Column>
        <Column
          className="data_table"
          field="quantity"
          header="Quantity"
        ></Column>

        <Column className="data_table" field="type" header="Type"></Column>
        <Column className="data_table" field="date" header="Date"></Column>
        <Column className="data_table" field="status" header="Status"></Column>
        <Column className="data_table" field="poster" header="Poster"></Column>
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
};
export default Post;
