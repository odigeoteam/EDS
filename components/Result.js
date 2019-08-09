import React from "react";
import PropTypes from "prop-types";
import { Flex } from "theme-ui";
import Image from "./Image";
import CityPairs from "./CityPairs";
import FromTo from "./FromTo";
import Currency from "./Currency";

const Result = ({ fromCity, toCity, price, fromDate, toDate, type, img }) => (
  <Flex>
    <Image width="100" height="100" borderRadius={3} src={img} />
    <Flex>
      <CityPairs w={1} px={2}>
        {[fromCity, toCity]}
      </CityPairs>
      <FromTo w={1} px={2}>
        {[fromDate, toDate]}
      </FromTo>
    </Flex>
    <Currency color="blacks.8" ml="auto">
      {price}
    </Currency>
  </Flex>
);

Result.propTypes = {
  children: PropTypes.arrayOf(PropTypes.instanceOf(Date))
};

export default Result;
