import React from "react";
import PropTypes from "prop-types";
import { Box } from "theme-ui";

const joinItem = " <-> ";

const CityPairs = ({ children, ...props }) => (
  <Box {...props}>{children.join(joinItem)}</Box>
);

CityPairs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string)
};

export default CityPairs;
