import React from "react";
import { Skeleton } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";

/**
 *
 * @param {bg} backgroundColor
 */
export const Card = ({
  bg = "#4A26AB",
  isLoading = false,
  children,
  ...restProps
}) => {
  return (
    <Box
      bg={bg}
      minH={400}
      rounded="lg"
      as="ul"
      color="#fff"
      zIndex={20}
      width={[
        "100%", // base
        "50%", // 480px upwards
      ]}
    >
      <Skeleton
        isLoaded={!isLoading}
        minW="100%"
        minH={400}
        colorEnd={bg}
        speed={0.8}
        {...restProps}
      >
        <Box p={4}>{children}</Box>
      </Skeleton>
    </Box>
  );
};
