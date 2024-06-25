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
import "./longTermCannedFood.scss";

function LongTermCannedFood() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  useTitle(t("longTermCannedFood"));

  const items = [{ label: t("longTermCannedFood") }];
  const home = {
    icon: "pi pi-home",
    command: () => {
      navigation("/admin/home");
    },
  };

  const [products, setProducts] = useState([
    {
      category: " Long",
      name: "cấ hộp",
      endDate: "toi, rau muống, mỡ hành...",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwnhv2x2B4nC10VLRz6daVYBBdzJodiAxwSU5rSKoH0U5hTVYhQg4cA6wh3UmZ",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " Long",
      name: "Pate ngỗng",
      endDate: "thịt ba chỉ, mỡ, hành, hạt tiêu...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVds7eE-IEIIhOsY2dlkbjWvXrnXBml_f2hBzTXpEnwurnAaTe-W_pBLaU8p8H",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " Long",
      name: "Sốt cà chua",
      endDate: "gà , nước, gừng, xả...",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjciAVpC4az8QGsxGvDgZWZvW5yNynw7ZL6vLtI2L_ZoqsU0ihAakXPZZt_D0b",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " Long",
      name: "Dưa Chuột Muối",
      endDate: "cá chép, gừng, xả, ớt...",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTyaTTjj2iXPhXPodViG0oAPq2Wa3wclPyca-G9Ngn4qTyGw7bOOEJxK_NAieYd",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " Long",
      name: "Sữa ông thọ",
      endDate: "rau cải gừng nước...",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlA1uGaUfqPK_0KSktkVp27bcfPMWU8OnqkrFHWdrdcRMCgN0EIZjuxrQXWSwC",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " Long",
      name: "đậu đen ",
      endDate: "toi, rau muống, mỡ hành...",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcStZUwBH6DuI5s5sj0CRgeDRcrPK9d46UsppmtWBZVnmojL2SQ7L3XdItDKXa6m",
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
    endDate: Yup.number()
      .required("endDate is required")
      .positive("is not positive"),
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
        <Column field="endDate" header="endDate"></Column>
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

export default LongTermCannedFood;
