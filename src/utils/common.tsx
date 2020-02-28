import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const handleCombineTextLength = (param1: any, param2: any) => {
    let param3 = param1.length;
    return param3.toString().concat(param2);
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
