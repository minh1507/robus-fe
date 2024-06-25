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
import "./cannedFood.scss";

function CannedFood() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  useTitle(t("CannedFood"));
  const items = [{ label: t("CannedFood") }];
  const home = {
    icon: "pi pi-home",
    command: () => {
      navigation("/admin/home");
    },
  };

  const [products, setProducts] = useState([
    {
      category: " Canned Food",
      name: "Thịt Hộp Tulip",
      description: "Thịt heo, mỡ hành...",
      image:
        "https://img.vn.my-best.com/product_images/dffd60eac529970b16286a4a29406db4.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=d1a0f939f99e6bfa17ff2a9a308fbce2",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " Canned Food",
      name: "Thịt Hộp Lotte The Luncheon Meat",
      description: "thịt ba chỉ, mỡ, hành, hạt tiêu...",
      image:
        "https://img.vn.my-best.com/product_images/419d53aa87d42068deefc8421060e17a.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=9b482cc416bcd7fabe4eed2e2043907a",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " Canned Food",
      name: "Ức Gà Cắt Khúc Expect",
      description: "ức gà , nước, gừng, xả...",
      image:
        "https://img.vn.my-best.com/product_images/87d21920ec977befaf461a6a75252a57.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=f1b8b14b76a840bbfd0b0d36c2416775",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " Canned Food",
      name: "Cá Ngừ Century Ngâm Xốt Gia Vị Cay",
      description: "cá ngừ, gừng, xả, ớt...",
      image:
        "https://emartmall.com.vn/image/cache/catalog/products/748485102511/748485102511%20-%20new-600x600.jpg",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " Canned Food",
      name: "Vải Tươi Wenatur",
      description: "vải nước...",
      image:
        "https://emartmall.com.vn/image/cache/catalog/products/8936086141257/8936086141257-600x600.jpg",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " Canned Food",
      name: " Mì Gà Vifo ",
      description: "mỳ, hành...",
      image:
        "https://emartmall.com.vn/image/cache/catalog/products/8935311100410/8935311100410-600x600.jpg",
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

export default CannedFood;
