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
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { Paginator } from "primereact/paginator";
import { useTitle } from "../../../../hooks/title/title";
import "./cannedFood.scss";

function CannedFood() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  useTitle(t("CannedFood"));
  const [visible, setVisible] = useState(false);
  const items = [{ label: t("CannedFood") }];
  const home = {
    icon: "pi pi-home",
    command: () => {
      navigation("/admin/home");
    },
  };

  const [products, setProducts] = useState([
    {
      category: " Frozen Food",
      name: "rau muống xào tỏi",
      description: "toi, rau muống, mỡ hành...",
      image: "https://bing.com/th?id=OSK.a4618435f0f7019f53cc6310f8d3e8f9",
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

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="New"
          icon="pi pi-plus"
          severity="success"
          className="shadow-none"
          onClick={() => setVisible(true)}
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          severity="danger"
          className="shadow-none"
          onClick={() => {}}
          disabled={!selectedProducts || !selectedProducts.length}
        />
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        className="shadow-none"
        onClick={() => {}}
      />
    );
  };

  const deleteProd = () => {
    console.log(1);
  };

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "Frozen Food", code: "FF" },
    { name: "Canned Food", code: "CAF" },
    { name: "Cooked Food", code: "COF" },
    { name: "Raw food", code: "RF" },
  ];

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
      <Toolbar
        className="mb-3"
        left={leftToolbarTemplate}
        right={rightToolbarTemplate}
      ></Toolbar>
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

      <Dialog
        header="ADD NEW FOOOD"
        visible={visible}
        className="cannedFood-admin-page-dialog"
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <section className="flex flex-wrap gap-4">
          <section className="flex flex-column gap-2 mt-3">
            <label htmlFor="image">Image</label>
            <InputText
              placeholder="Type Image"
              className="shadow-none w-full"
              id="Image"
              aria-describedby="Image-help"
              {...register("image")}
            />
            {errors.image && <p>{errors.image.message}</p>}
          </section>
          <section className="flex flex-column flex-1 gap-2">
            <label htmlFor="name">Name</label>
            <InputText
              placeholder="Type Name Of Food"
              className="shadow-none w-full"
              id="name"
              aria-describedby="name-help"
              {...register("name")}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </section>
          <section className="flex flex-column flex-1 gap-2">
            <label htmlFor="category">Category</label>
            <Dropdown
              id="category"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="Select a City"
              className="w-full md:w-14rem"
              checkmark={true}
              highlightOnSelect={false}
            />
          </section>
        </section>

        <section className="flex flex-wrap gap-4 mt-3">
          <section className="flex flex-column flex-1 gap-2">
            <label htmlFor="description">Description</label>
            <InputText
              placeholder="Type description"
              className="shadow-none w-full"
              id="description"
              aria-describedby="age-help"
              {...register("description")}
            />
            {errors.description && <p>{errors.description.message}</p>}
          </section>
          <section className="flex flex-column flex-1 gap-2">
            <label htmlFor="price">Price</label>
            <InputText
              placeholder="Type price"
              className="shadow-none w-full"
              id="price"
              aria-describedby="price-help"
              {...register("price")}
            />
            {errors.price && <p>{errors.price.message}</p>}
          </section>
        </section>
        <section className="flex flex-column gap-2 mt-3">
          <label htmlFor="weight">Weight</label>
          <InputText
            placeholder="Type weight"
            className="shadow-none w-full"
            id="weight"
            aria-describedby="weight-help"
            {...register("weight")}
          />
          {errors.weight && <p>{errors.weight.message}</p>}
        </section>

        <div className="flex justify-content-end">
          <Button
            onClick={handleSubmit((data) => {
              console.log(data);
              if (!visible) return;
              setVisible(false);
            })}
            className="shadow-none mt-4"
            label="Submit"
          />
        </div>
      </Dialog>

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

export default CannedFood;
