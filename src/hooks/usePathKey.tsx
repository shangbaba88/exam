import { useLocation } from "react-router-dom";
import { type RouterKeys } from "@/config";

// 获取对应菜单key
function usePathKey() {
  const location = useLocation();
  const key: RouterKeys = location.pathname.split("/")[1] as RouterKeys;
  return key;
}

export default usePathKey;
