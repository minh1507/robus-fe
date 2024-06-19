import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { classNames } from "primereact/utils";
import { BreadCrumb } from "primereact/breadcrumb";
import { Paginator } from "primereact/paginator";
import "./history.scss";
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
  return (
    <section>
      <BreadCrumb model={items} home={home} className="bread_Crumb" />
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
