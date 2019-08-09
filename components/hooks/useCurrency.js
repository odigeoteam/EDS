import { useContext } from "react";
import currencyContext from "../Provider/currencyContext";

export default function useCurrency() {
  return useContext(currencyContext);
}
