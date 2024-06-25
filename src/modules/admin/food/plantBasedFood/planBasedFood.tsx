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
import "./planBasedFood.scss";

function PlanBasedFood() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  useTitle(t("planBasedFood"));

  const items = [{ label: t("planBasedFood") }];
  const home = {
    icon: "pi pi-home",
    command: () => {
      navigation("/admin/home");
    },
  };

  const [products, setProducts] = useState([
    {
      category: " vegetable",
      name: "su su",
      description: "su su...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmstXpqJ7-J7sfxIRqvyRv1cWTgq_p_Gmm_391qk7_I4ZTc6kd_XmgZ3SJpRPK",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " vegetable",
      name: "khoai tây",
      description: "khoai tây...",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrSZipWaBUKZGB_mQA9NZIY39Va01RLhIDaYp577dEl27hkw1xJiAI4U-yxuel",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " vegetable",
      name: "bắp cải",
      description: "bắp cải, ",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhiOu4ZvmhHAxdxm6jBJvQ26P3xUGXTEJUJXjxS1X7FrCvSGfbun7ZSv2yO_Y6",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " vegetable",
      name: "bông cải xanh",
      description: "bông cải xanh...",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ07p3wV9elW6ju_7r7_Y0Kdj2xkNIC_aXPWVBQTrMJnd3A_PzcCvDmjz7frjAX",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " vegetable",
      name: "củ khoai",
      description: "củ khoai...",
      image:
        "https://cdn.tgdd.vn/Products/Images/8785/271508/bhx/khoai-lang-nhat-tui-1kg-4-10-cu-202205201543281286.jpg",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " vegetable",
      name: "băps cải",
      description: "cà chua...",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRoUw3Jt65u-PMLVKfBFlTI1DKGT2J5tfj7qtgLmuS-hSVfB-oeJlhsw8MZHZP",
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

export default PlanBasedFood;
