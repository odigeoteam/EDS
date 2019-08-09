import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { Box } from "theme-ui";

const joinItem = " - ";

const FromTo = ({ children, ...props }) => (
  <Box {...props}>{children.map(x => format(x, "DD MMM")).join(joinItem)}</Box>
);

FromTo.propTypes = {
  children: PropTypes.arrayOf(PropTypes.instanceOf(Date))
};

export default FromTo;
