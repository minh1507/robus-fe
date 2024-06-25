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
import "./animalFood.scss";

function AnimalFood() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  useTitle(t("animalFood"));

  const items = [{ label: t("animalFood") }];
  const home = {
    icon: "pi pi-home",
    command: () => {
      navigation("/admin/home");
    },
  };

  const [products, setProducts] = useState([
    {
      category: "animal Food",
      name: "trứng",
      description: "trứng...",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRdA-hspIYdAHEYxiZ9Y8MxmMfoenSgQAOOAPdfeY63wOKoZOroCo8d7htbQeSu",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " animel Food",
      name: "thịt heo",
      description: "thịt ba chỉ, mỡ, hành, hạt tiêu...",
      image:
        "https://th.bing.com/th/id/OIP.FFli2mUrOwjPmx-sFVrFDQHaEL?rs=1&pid=ImgDetMain",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " animal Food",
      name: "thịt gà tươi",
      description: "gà , ",
      image:
        "https://th.bing.com/th/id/R.93afbf0ddca0b9791c66c56bd345be56?rik=k8fO1v4pcWy1wQ&riu=http%3a%2f%2fwww.garanfkt.vn%2fpublic%2fupload%2fbaiviet%2fLbEz_uc-ga.jpg&ehk=D21D7o%2f4a%2b1jkR0i3izjHMTnk7B0T3I7cLA1UGsMpDY%3d&risl=&pid=ImgRaw&r=0",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " animal Food",
      name: "thịt cá hồi",
      description: "cá chép, gừng, xả, ớt...",
      image:
        "https://th.bing.com/th/id/OIP.tyzpnvjeIL74VpI0lyP4fQHaEH?w=290&h=180&c=7&r=0&o=5&pid=1.7",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " animal Food",
      name: "sữa bò",
      description: "sữa bò...",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTCeviMHdk3NjQ8ey9cBQxo3wF2jJgM5UqjVAc2HAh3kiYa7X7HjsdNPDfdxlOP",
      weight: "100 gram",
      price: 10000,
    },
    {
      category: " animal Food",
      name: "mật ongi",
      description: "mật ong...",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiJZ2oQNaIZ8S5Baisgt-8ShdjBYbWcLb_TSYqzHTV5xdIk6W9gFh_eSkP4pdX",
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

export default AnimalFood;
