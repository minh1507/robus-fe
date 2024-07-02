import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {BreadCrumb} from "primereact/breadcrumb";
import {useNavigate} from "react-router-dom";
import {useTitle} from "../../../hooks/title/title";
import Role from "./role/role";

import './role-permission.scss'
import {Divider} from "primereact/divider";

function RolePermission() {
    const {t} = useTranslation();
    const navigation = useNavigate();
    useTitle(t("title.role_permission"));
    const items = [{label: t("title.role_permission")}];
    const home = {
        icon: "pi pi-home",
        command: () => {
            navigation("/admin/home");
        },
    };

    return (
        <section className="role-permission-admin-page">
            <BreadCrumb model={items} home={home}/>
            <Divider />
            <section className='role-permission-admin-page-group mt-3'>
                <section className='role-permission-admin-page-child1'>
                    <h2 className='header-title'>Role</h2>
                    <Role/>
                </section>
                <section className='role-permission-admin-page-child2'>
                    <h2 className='header-title'>Permission</h2>
                    <Role/>
                </section>
            </section>
        </section>
    );
}

export default RolePermission;
