import React, { useState } from "react";
import { useTitle } from "../../../hooks/title/title";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { BreadCrumb } from "primereact/breadcrumb";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Yup from "../../../yupConfig";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import './account.scss'
import { Dropdown } from "primereact/dropdown";

function Account() {
  const { t } = useTranslation()
  const navigation = useNavigate()
  useTitle(t('account'))
  const [visible, setVisible] = useState(false);
  const items = [{ label: t('account') }];
  const home = {
    icon: 'pi pi-home', command: () => {
      navigation('/admin/home')
    },
  }
  const [products, setProducts] = useState([{
    age: 13,
    username: 'A1',
    address: '2A Mĩ Đình',
    number: '(84) 913924185',
    gender: 'Female'
  },
  {
    age: 24,
    username: 'B1',
    address: '3A Mĩ Đình',
    number: '(84) 913924186',
    gender: 'Male'
  }]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const schema = Yup.object().shape({
    username: Yup.string()
      .required()
      .label('search'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSearch = (data: any) => {
    console.log(data)
  }

  const actionBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <Button icon="pi pi-pencil" rounded outlined className="mr-2 shadow-none" onClick={() => setVisible(true)} />
        <Button icon="pi pi-trash" rounded outlined severity="danger" className="shadow-none" onClick={() => deleteProd()} />
      </React.Fragment>
    );
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button label="New" icon="pi pi-plus" severity="success" className="shadow-none" onClick={() => setVisible(true)} />
        <Button label="Delete" icon="pi pi-trash" severity="danger" className="shadow-none" onClick={() => { }} disabled={!selectedProducts || !selectedProducts.length} />
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return <Button label="Export" icon="pi pi-upload" className="shadow-none" onClick={() => { }} />;
  };

  const deleteProd = () => {
    console.log(1)
  }

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
      { name: 'Female', code: 'F' },
      { name: 'Male', code: 'M' },
  ];

  return (
    <section className="account-admin-page">
      <BreadCrumb model={items} home={home} />
      <form className="mt-3" onSubmit={handleSubmit(onSearch)}>
        <section>
          <InputText className="shadow-none" placeholder={t('name')} />
        </section>
        <section>
          <Button className="mt-3 shadow-none" label="Search" />
        </section>
      </form>
      <Divider />
      <Toolbar className="mb-3" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
      <DataTable value={products} tableStyle={{ minWidth: '50rem' }} selectionMode="multiple" selection={selectedProducts}
        onSelectionChange={(e: any) => setSelectedProducts(e.value)}>
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
        <Column field="username" header="Username" ></Column>
        <Column field="age" header="Age" ></Column>
        <Column field="gender" header="Gender" ></Column>
        <Column field="number" header="Number" ></Column>
        <Column field="address" header="Address" ></Column>
        <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
      </DataTable>

      <Dialog header="Account" visible={visible} className="account-admin-page-dialog" onHide={() => { if (!visible) return; setVisible(false); }}>
        <section className="flex flex-wrap gap-4">
          <section className="flex flex-column flex-1 gap-2">
            <label htmlFor="username">Username</label>
            <InputText placeholder="Type username" className="shadow-none w-full" id="username" aria-describedby="username-help" />
          </section>
          <section className="flex flex-column flex-1 gap-2">
            <label htmlFor="gender">Gender</label>
            <Dropdown id='gender' value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
              placeholder="Select gender" className="w-full shadow-none" />
          </section>
        </section>

        <section className="flex flex-wrap gap-4 mt-3">
          <section className="flex flex-column flex-1 gap-2">
            <label htmlFor="age">Age</label>
            <InputText placeholder="Type age" className="shadow-none w-full" id="age" aria-describedby="age-help" />
          </section>
          <section className="flex flex-column flex-1 gap-2">
            <label htmlFor="number">Number</label>
            <InputText placeholder="Type number" className="shadow-none w-full" id="number" aria-describedby="number-help" />
          </section>
        </section>
        <section className="flex flex-column gap-2 mt-3">
          <label htmlFor="address">Address</label>
          <InputText placeholder="Type address" className="shadow-none w-full" id="address" aria-describedby="address-help" />
        </section>

        <div className="flex justify-content-end">
          <Button onClick={() => { if (!visible) return; setVisible(false); }} className="shadow-none mt-4" label="Submit" />
        </div>
      </Dialog>
    </section>
  );
}

export default Account;
