import { useContext } from "react";
import langContext from "../Provider/langContext";

export default function useLanguage() {
  return useContext(langContext);
}
