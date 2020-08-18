import React from "react";
import { opacify } from "polished";
import { Stack, Box, Spinner, Text } from "@chakra-ui/core";

/**
 *
 * @param {bg} backgroundColor
 */
export const CardList = ({
  bg = "honeydew",
  isLoading = false,
  style: userStyles = {},
  children,
  ...restProps
}) => {
  return (
    <Box
      bg={isLoading ? opacify(0.1, bg) : bg}
      w={"100%"}
      p={4}
      my={3}
      minH={50}
      borderWidth="2"
      as="li"
      rounded="lg"
      style={{ listStyle: "none", cursor: "pointer", ...userStyles }}
      {...restProps}
    >
      <Stack isInline spacing={4}>
        <Text>{children}</Text>
        {isLoading && <Spinner size="xs" marginLeft="auto" />}
      </Stack>
    </Box>
  );
};
