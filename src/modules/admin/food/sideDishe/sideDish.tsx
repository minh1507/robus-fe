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
import "./sideDish.scss";

function sideDish() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  useTitle(t("sideDish"));

  const items = [{ label: t("sideDish") }];
  const home = {
    icon: "pi pi-home",
    command: () => {
      navigation("/admin/home");
    },
  };

  const [products, setProducts] = useState([
    {
      category: " side dish",
      name: "Trứng Óp La",
      description: "trứng...",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTeAMUdqy4-kX3shGftkL5aapWO9KSBanJ_fJZhEEnyebIgfcwVj0IqiijtX_OW",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " side dish",
      name: "soup",
      description: "thịt ba chỉ, mỡ, hành, hạt tiêu...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_0YZSMeQpFUGXDtolKXxVYR7GcwNr3JvFG_ykuDC0fskohv4jVwIO6rAuubt",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " side dish",
      name: "canh cải",
      description: "cải, nước...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjBZGmKWUVg9M3m6_SW8VkZ1UUChpiNhV7MXnv7lhxlIkqQd4AHcSG5wXqUvI8",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " side dish",
      name: "Nộm",
      description: "rau củ, tranh, đường...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYBt4o_je3r8E0fLqil-eCuURN0HfhyTPjr_nmVqsecrA8B1wTmHRvodiKImK",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " side dish",
      name: "rau cải luộc",
      description: "rau cải gừng nước...",
      image:
        "https://bepmina.vn/wp-content/uploads/2021/12/rau-cai-ngong-luoc.jpeg",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " side dish",
      name: "súc xích",
      description: "thịt heo...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToyoJLde2OpCmX6mAwe5Ivnb_8oo8LjHF84xzEF0xm7R45V8UR5AoE4961FZjL",
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

export default sideDish;
