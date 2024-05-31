import React from "react";
import { Image } from "@chakra-ui/react";
import "./style.css";
function WeatherDetailComp({ data }) {
  if (!data) return;
  //   console.log(data);
  return (
    <div>
      <div className="image-details">
        <Image
          src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data?.currentConditions?.icon}.svg`}
          alt="Weather image"
          maxWidth="200px"
          boxSize="250px"
          objectFit="fill"
        />
        <div className="temp">
          <h2>{data?.address}</h2>
          <h1>{data?.currentConditions.temp}°C</h1>
          <p>{data?.currentConditions.conditions}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetailComp;
