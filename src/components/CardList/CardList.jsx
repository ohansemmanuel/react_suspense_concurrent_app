import React, { useState } from "react";
import {
  Stack,
  Box,
  Spinner,
  Text,
  Collapse,
  Skeleton,
  Code,
} from "@chakra-ui/core";

/**
 *
 * @param {bg} backgroundColor
 */
export const CardList = ({
  bg = "#9543A7",
  isLoading = false,
  style: userStyles = {},
  children,
  details = {},
  ...restProps
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails((val) => !val);

  const variantColor = ["red", "yellow", "purple", "blue", "green", "orange"];

  return (
    <Box
      bg={!!showDetails ? "#E350A8" : bg}
      w={"100%"}
      p={4}
      my={3}
      minH={50}
      borderWidth="2"
      as="li"
      rounded="lg"
      style={{ listStyle: "none", cursor: "pointer", ...userStyles }}
      onClick={toggleDetails}
      {...restProps}
    >
      <Stack>
        <Box d="flex">
          {isLoading && (
            <Spinner size="xs" mr={2} opacity={0.75} color="#fff" />
          )}
          <Text fontWeight={showDetails ? "bold" : "normal"} color="#fff">
            {children}
          </Text>
        </Box>
        <Collapse mt={4} isOpen={showDetails}>
          {isLoading ? (
            <>
              <Skeleton height="20px" my="10px" />
              <Skeleton height="20px" my="10px" />
              <Skeleton height="20px" my="10px" />
            </>
          ) : (
            <Stack>
              {Object.keys(details).map((objKey, index) => (
                <Box w={"100%"}>
                  <Code
                    my={2}
                    variantColor={variantColor[index]}
                  >{`${objKey}: ${details[objKey]}`}</Code>
                </Box>
              ))}
            </Stack>
          )}
        </Collapse>
      </Stack>
    </Box>
  );
};
