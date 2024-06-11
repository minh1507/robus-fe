import { useRef } from "react";
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import './header.scss';
import { classNames } from "primereact/utils";
import { useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
import useToast from "../../../../hooks/toast/toast";
import StringUtil from "../../../common/util/string.util";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

function Header() {
  const { showToast } = useToast();
  const { t } = useTranslation();
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const navigation = useNavigate()
  const menu = useRef<Menu>(null);
  const itemsMenuRight = [
    {
      template: (item: any, options: any) => {
        return (
          <button onClick={(e) => options.onClick(e)} className={classNames(options.className, 'w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround')}>
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle" />
            <div className="flex flex-column align">
              <span className="font-bold">Dương Đức Anh</span>
              <span className="text-sm">Admin</span>
            </div>
          </button>
        );
      }
    },
    {
      command: () => {
        navigation('/admin/setting')
      },
      label: 'Setting',
      icon: 'pi pi-cog'
    },
    {
      command: () => {
        showToast(StringUtil.firstLetterUppercase(t('mix.logout', { object: 'success' })), 'success')
        navigation('/admin/login')
      },
      label: 'Logout',
      icon: 'pi pi-sign-out'
    },
  ];

  const itemsMenuLeft = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        navigation('/admin')
      },
    },
    {
      label: 'System',
      icon: 'pi pi-server',
      items: [
        {
          label: 'Role',
          icon: 'pi pi-shield',
          command: () => {
            navigation('/admin/role')
          },
        },
        {
          label: 'Account',
          icon: 'pi pi-users',
          command: () => {
            navigation('/admin/account')
          },
        },
      ]
    },
  ];

  return (
    <header className="header-admin-page">
      <Menubar className="header-admin-page-menu-bar" model={itemsMenuLeft} />

      <Menu model={itemsMenuRight} popup ref={menu} id="menu" popupAlignment="right" />
      <Avatar
        label="D"
        size="normal"
        onClick={(event) => menu.current?.toggle(event)}
        aria-controls="menu"
        aria-haspopup
      />
    </header>

  );
}

export default Header;
