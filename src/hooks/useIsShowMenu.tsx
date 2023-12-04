import { routersData, RouterKeys } from "@/config";
import { useLocation } from "react-router-dom";

function useIsShowMenu() {
  const key: RouterKeys = useLocation().pathname.split("/")[1] as RouterKeys;
  if (routersData[key]?.hasMenu === false) {
    return false;
  }
  return true;
}
export default useIsShowMenu;
