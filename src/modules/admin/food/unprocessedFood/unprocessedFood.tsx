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
import "./unprocessedFood.scss";

function UnprocessedFood() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  useTitle(t("ProcessedFood"));

  const items = [{ label: t("ProcessedFood") }];
  const home = {
    icon: "pi pi-home",
    command: () => {
      navigation("/admin/home");
    },
  };

  const [products, setProducts] = useState([
    {
      category: " Prepared Food",
      name: "ba chỉ bò mỹ đông lạnh",
      description: "thị ba chỉ bò.",
      image:
        "https://th.bing.com/th/id/R.ad5abbbf2f33470ab3f37b2b9d10b677?rik=9si1UXQbl1vuGA&riu=http%3a%2f%2fmaychebienthit.com % 2fwp - content % 2fuploads % 2f2020 % 2f11 % 2fth % e1 % bb % 8bt - b % c3 % b2 - m % e1 % bb % b9.jpg & ehk=98rLE27Y7quKI6JwO8J % 2b3ANFs0rKjxi1WEYW9ZTpjJ0 % 3d & risl=& pid=ImgRaw & r=0",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " Prepared Food",
      name: "thịt gà đông lạnh  ",
      description: "thịt gà...",
      image:
        "https://media.istockphoto.com/id/1330009627/photo/packaged-fresh-chicken-leg-for-sale-in-supermarket-displayed-on-shelves.jpg?s=612x612&w=0&k=20&c=FklBj0LPG-to964m7rE8xjoPj7WcA2v60shp5oPYy28=",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " Prepared Food",
      name: "gà đông lạnh",
      description: "gà , nước, gừng, xả...",
      image:
        "https://luatvietphong.vn/wp-content/uploads/2021/08/big_thu-tuc-hai-quan-nhap-khau-thit-ga-dong-lanh.jpg",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " Prepared Food",
      name: "sườn bò đông lạnh ",
      description: "cá chép, gừng, xả, ớt...",
      image:
        "https://th.bing.com/th/id/OIP.pxKha-Vl4LxqEo5JSdejowHaFk?rs=1&pid=ImgDetMain",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " Prepared Food",
      name: "rau củ đông lạnh",
      description: "thịt lợn, ",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYMwBug3OuaWlsY5dhLIAhOl-gnce55AybmcqfV7gK39V_pMlKI0VVvr_K8ok_",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " Prepared Food",
      name: "rau củ đông lạnh",
      description: "thịt lợn, ",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYMwBug3OuaWlsY5dhLIAhOl-gnce55AybmcqfV7gK39V_pMlKI0VVvr_K8ok_",
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

export default UnprocessedFood;
