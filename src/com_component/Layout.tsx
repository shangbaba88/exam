import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Header from "./Header";
import useIsShowMenu from "@/hooks/useIsShowMenu";
import useIsShowHeader from "@/hooks/useIsShowHeader";

function Layout() {
  const is_show_menu = useIsShowMenu();
  const is_show_header = useIsShowHeader();
  return (
    <div className="layout">
      <div className="header_wrap">{is_show_header ? <Header /> : null}</div>
      <div className="nav_wrap">{is_show_menu ? <Menu /> : null}</div>
      <div className="outlet_wrap">
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
