import React, { useState } from "react";
import { opacify } from "polished";
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
  bg = "honeydew",
  isLoading = false,
  style: userStyles = {},
  children,
  details,
  ...restProps
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails((val) => !val);
  const variantColor = ["red", "yellow", "purple", "blue", "pink"];

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
      onClick={toggleDetails}
      {...restProps}
    >
      <Stack>
        <Text>{children}</Text>
        <Collapse mt={4} isOpen={showDetails}>
          {isLoading ? (
            <>
              <Skeleton height="20px" my="10px" />
              <Skeleton height="20px" my="10px" />
              <Skeleton height="20px" my="10px" />
            </>
          ) : (
            <Code>
              {Object.keys(details).map((objKey, index) => (
                <Code
                  my={2}
                  variantColor={variantColor[index]}
                >{`${objKey}: ${details[objKey]}`}</Code>
              ))}
            </Code>
          )}
        </Collapse>
        {isLoading && <Spinner size="xs" marginLeft="auto" />}
      </Stack>
    </Box>
  );
};
