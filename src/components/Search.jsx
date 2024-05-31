import React from "react";
import { Input, Button, Box } from "@chakra-ui/react";

function Search(props) {
  const { fetchData, handleCityValue, cityValue } = props;

  return (
    <Box display='flex' flexDirection='row' justifyContent='space-between' >
      <Input
        placeholder="Enter city..."
        size="lg"
        value={cityValue}
        variant="flushed"
        onChange={handleCityValue}
      />
      <Button colorScheme="blue" variant={"ghost"} onClick={fetchData}>
        Search
      </Button>
    </Box>
  );
}

export default Search;
