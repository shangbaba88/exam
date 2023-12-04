import { useLocation } from "react-router-dom";

function useIsShowHeader() {
  const key = useLocation().pathname.split("/")[1];
  if (key === "login") {
    return false;
  }
  return true;
}
export default useIsShowHeader;
