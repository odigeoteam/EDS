import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Box } from "theme-ui";
import { useLanguage, useCurrency } from "./hooks";

const Currency = ({ children, ...props }) => {
  const lang = useLanguage();
  const currency = useCurrency();
  const formatter = useMemo(
    () => new Intl.NumberFormat(lang, { style: "currency", currency }),
    [lang, currency]
  );
  return <Box {...props}>{formatter.format(children)}</Box>;
};

Currency.propTypes = {
  currency: PropTypes.string,
  children: PropTypes.number.isRequired
};

export default Currency;
