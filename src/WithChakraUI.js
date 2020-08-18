import React from "react";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";

const WithChakraUI = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
};

export default WithChakraUI;
