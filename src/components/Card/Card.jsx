import React from "react";
import { Skeleton } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";

/**
 *
 * @param {bg} backgroundColor
 */
export const Card = ({
  bg = "lightblue",
  isLoading = false,
  children,
  ...restProps
}) => {
  return (
    <Box
      bg={bg}
      w={1 / 2}
      p={4}
      minH={400}
      rounded="lg"
      as="ul"
      color="gray.600"
    >
      <Skeleton
        isLoaded={!isLoading}
        minW="100%"
        minH={400}
        colorEnd={bg}
        speed={0.8}
        {...restProps}
      >
        {children}
      </Skeleton>
    </Box>
  );
};
