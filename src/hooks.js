import {useLocation} from "react-router-dom";
import qs from "qs";

export const useQuery = () => {
  return qs.parse(useLocation().search.slice(1));
}


