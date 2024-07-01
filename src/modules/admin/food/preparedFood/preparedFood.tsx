import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { BreadCrumb } from "primereact/breadcrumb";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Yup from "../../../../yupConfig";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Paginator } from "primereact/paginator";
import { useTitle } from "../../../../hooks/title/title";
import "./preparedFood.scss";

function PreparedFood() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  useTitle(t("PreparedFood"));

  const items = [{ label: t("PreparedFood") }];
  const home = {
    icon: "pi pi-home",
    command: () => {
      navigation("/admin/home");
    },
  };

  const [products, setProducts] = useState([
    {
      category: " processed Food",
      name: "Thị heo đã tẩm ướp",
      description: "thị heo, mắm muối , mì chính.",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3jLo8OvT90edgm1fVGC3PROYZ5pvS1LbLeJZx7KuM3_JhIv3G39xEp2Vkwsr9",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " processed Food",
      name: "bánh bao  ",
      description: "thịt heo , bột ...",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSpwIAc-iUjWnS6grXutNqpeWCf-3P3rCeDZE-hv0w1SHF7S3XFQrdy2NHZv2ZJ",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " processed Food",
      name: "kem",
      description: "kem...",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqmWVghiWr_Hi4RLmrXePdGMKBK0CFY1nFi5endxu0vLinweY1KGHq9VHJTjeS",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " processed Food",
      name: "phở ",
      description: "cá chép, gừng, xả, ớt...",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQyLa5eNRT34YTwLmwmUrzY44xvQr7nSOe-TpgPGaEGyPH5mptqPCRgCm2x08dt",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " processed Food",
      name: "nsack",
      description: "khoai tây , ",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTxKwre_IQ78B4wiZq4zR4TNwQ8Ik8gDxxFhOVuIqBX37OcDgrmnViGGJRhshWb",
      weight: "100 gram",
      price: 10000,
    },
  ]);

  const imageBodyTemplate = (product: { image: string }) => {
    return (
      <img
        src={`${product.image}`}
        alt={product.image}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const [selectedProducts, setSelectedProducts] = useState([]);

  const schema = Yup.object().shape({
    name: Yup.string().required("Username is required"),
    category: Yup.string().required(" category is required"),
    description: Yup.string().required("Age is required"),
    weight: Yup.number()
      .required("number is required")
      .positive("is not positive")
      .required("is not required"),
    price: Yup.number().required("price is required"),
    image: Yup.string().required("image is required"),
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

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event: { first: number; rows: number }) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <section className="cannedFood-admin-page">
      <BreadCrumb model={items} home={home} />
      <form className="Fix mt-3" onSubmit={handleSubmit(onSearch)}>
        <section>
          <InputText
            className="shadow-none inputSearch"
            placeholder={t("name")}
          />
        </section>
        <section>
          <Button className="mt-3 shadow-none" label="Search" />
        </section>
      </form>
      <Divider />

      <DataTable
        value={products}
        tableStyle={{ minWidth: "50rem" }}
        selectionMode="multiple"
        selection={selectedProducts}
        onSelectionChange={(e: any) => setSelectedProducts(e.value)}
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
        ></Column>
        <Column field="image" header="Image" body={imageBodyTemplate}></Column>
        <Column field="name" header="Name Of Food"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="description" header="Description"></Column>
        <Column field="weight" header="Weight"></Column>
        <Column field="price" header="Price"></Column>
        <Column
          body={actionBodyTemplate}
          exportable={false}
          style={{ minWidth: "12rem" }}
          header="Action"
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

export default PreparedFood;
