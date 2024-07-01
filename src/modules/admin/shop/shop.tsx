import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { InputText } from "primereact/inputtext";
import Yup from "../../../yupConfig";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Paginator } from "primereact/paginator";
import { BreadCrumb } from "primereact/breadcrumb";
import { Divider } from "primereact/divider";
import { useTitle } from "../../../hooks/title/title";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import "./shop.scss";

export default function TemplateDemo() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  useTitle(t("account"));
  const [visible, setVisible] = useState(false);
  const items = [{ label: t("account") }];
  const home = {
    icon: "pi pi-home",
    command: () => {
      navigation("/admin/home");
    },
  };

  const [products, setProducts] = useState([
    {
      store: "BOKobeSHOP",
      describe: "sương bò đông lạnh nhập khẩu từ mỹ",
      image:
        "https://down-bs-vn.img.susercontent.com/vn-11134216-7r98o-luued7wml1r95e_tn.webp",
      rating: "5",
      quantity: "600",
      type: "đồ đông lạnh",
      date: "13/06/2024 10:59:41 AM",
    },
    {
      store: "THIÊN THẢO ORGANIC",
      describe: "rau xuất khẩu đi mỹ",
      image:
        "https://down-bs-vn.img.susercontent.com/5377809ebac6f347d9551c42cbc00f11_tn.webp",
      rating: "5",
      quantity: "1600",
      type: "đồ đông lạnh",
      date: "13/06/2024 10:59:41 AM",
    },
    {
      store: "1889SHOP",
      describe: "chuyên bán đồ ăn chín mang về",
      image:
        "https://down-bs-vn.img.susercontent.com/vn-11134216-7r98o-ltnpa1zhtyq521_tn.webp",
      rating: "5",
      quantity: "6003",
      type: "đồ đông lạnh",
      date: "13/06/2024 10:59:41 AM",
    },
  ]);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const imageBodyTemplate = (product: { image: string }) => {
    return (
      <img
        src={`${product.image}`}
        alt={product.image}
        className="w-6rem shadow-2 border-round"
      />
    );
  };
  const schema = Yup.object().shape({
    username: Yup.string().required().label("search"),
  });
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

  const descriptionBodyTemplate = (product: { describe: number }) => {
    return formatCurrency(product.describe);
  };

  const ratingBodyTemplate = (product: { rating: number }) => {
    return <Rating value={product.rating} readOnly cancel={false} />;
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Products</span>
      <Button icon="pi pi-refresh" rounded raised />
    </div>
  );
  const footer = `In total there are ${
    products ? products.length : 0
  } products.`;

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event: { first: number; rows: number }) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  return (
    <section className="shop-admin-page">
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
        header={header}
        footer={footer}
        tableStyle={{ minWidth: "60rem" }}
      >
        <Column field="store" header="Store name"></Column>
        <Column header="Image" body={imageBodyTemplate}></Column>
        <Column
          field="description"
          header="Description"
          body={descriptionBodyTemplate}
        ></Column>
        <Column
          field="rating"
          header="Reviews"
          body={ratingBodyTemplate}
        ></Column>
        <Column field="quantity" header="Quantity"></Column>
        <Column field="date" header="Start Date"></Column>
        <Column
          field="action"
          header="Action"
          body={actionBodyTemplate}
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
