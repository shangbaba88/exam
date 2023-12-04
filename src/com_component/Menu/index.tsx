import React, { useState, useEffect } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { RouterKeys, routersData, superAdminMenus } from "@/config";
import { useNavigate } from "react-router-dom";
import usePathKey from "@/hooks/usePathKey";

const App: React.FC = () => {
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();
  // const key: RouterKeys = useLocation().pathname.split("/")[1] as RouterKeys;

  const path_key = usePathKey();

  useEffect(() => {
    if (path_key) {
      setCurrent(path_key);
    }
  }, [path_key]);
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate(routersData[e.key as RouterKeys].path);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={superAdminMenus}
    />
  );
};

export default App;
