import React from "react";
import styled from "@emotion/styled";
import { border } from "styled-system";
import { Box } from "theme-ui";

const Img = styled(Box)(border);

export default props => <Img as="img" {...props} />;
