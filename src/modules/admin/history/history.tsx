import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { classNames } from "primereact/utils";
import { BreadCrumb } from "primereact/breadcrumb";
import { Paginator } from "primereact/paginator";
import "./history.scss";
import Yup from "../../../yupConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { useForm } from "react-hook-form";
function History() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const items = [{ label: t("history") }];

  const home = {
    icon: "pi pi-home",
    command: () => {
      navigation("/admin/home");
    },
  };

  const [products, setProducts] = useState([
    {
      language: "VN",
      name_Module: "Login",
      name_event: "admin đăng nhập",
      note: "login test",
      implementer: "Cuong",
      date: "13/06/2024 10:59:41 AM",
    },
    {
      language: "EN",
      name_Module: " Create Product ",
      name_event: " create product",
      note: "create new product",
      implementer: "Hoang",
      date: "13/06/2024 12:59:41 PM",
    },
    {
      language: "EN",
      name_Module: " detail Product ",
      name_event: "Fix bug",
      note: "complete",
      implementer: "Long",
      date: "13/06/2024 12:59:41 PM",
    },
  ]);

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event: { first: number; rows: number }) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const schema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    gender: Yup.string().required(""),
    age: Yup.number()
      .required("Age is required")
      .positive("is not positive")
      .integer("is not integer"),
    number: Yup.number()
      .required("number is required")
      .positive("is not positive")
      .integer("is not integer "),
    address: Yup.string().required("Address is required"),
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

  return (
    <section>
      <BreadCrumb model={items} home={home} className="bread_Crumb" />
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
        showGridlines
        tableStyle={{ minWidth: "50rem" }}
        className="data_table"
      >
        <Column
          className="data_table"
          field="language"
          header="Language"
        ></Column>
        <Column
          className="data_table"
          field="name_Module"
          header="Name Module"
        ></Column>
        <Column
          className="data_table"
          field="name_event"
          header="Name"
        ></Column>
        <Column className="data_table" field="note" header="Note"></Column>
        <Column
          className="data_table"
          field="implementer"
          header="Implementer"
        ></Column>
        <Column className="data_table" field="date" header="Date"></Column>
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
export default History;
