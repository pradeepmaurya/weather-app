import React from "react";
import humidityImage from "../assets/img/humidity.gif";
import windImage from "../assets/img/icons8-wind.gif";
import cloudImage from "../assets/img/icons8-rain.gif";
import { Box, Text } from "@chakra-ui/react";

function WindDetails(props) {
  const { data } = props;

  if (!data) {
    return (
      <Box display="flex" pt={2} justifyContent="center">
        <Text textAlign="center">City Not found..</Text>
      </Box>
    );
  }
  
  return (
    <div className="raw-data">
      <div className="wind">
        <img src={windImage} alt="wind" />
        <h3>{data?.currentConditions?.windspeed} km/h</h3>
        <p>wind</p>
      </div>
      <div className="humidity">
        <img src={humidityImage} alt="humidity" />
        <h3>{data?.currentConditions?.humidity}%</h3>
        <p>humidity</p>
      </div>
      <div className="rain">
        <img src={cloudImage} alt="rain" />
        <h3>{data?.currentConditions?.cloudcover}%</h3>
        <p>Cloud Cover</p>
      </div>
    </div>
  );
}

export default WindDetails;
