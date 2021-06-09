import React from "react";
import { Bar } from "react-chartjs-2";
//import { Pie } from "react-chartjs-2";
//import { SpriteProperties } from "../pages/Alien.js";

/*let results = {
  filename: "t.png",
  baseFilename: "t",
  originalSpriteHeight: 107,
  originalSpriteWidth: 85,
  totalPixelsOriginal: 9095,
  scaledSpriteHeight: 1070,
  scaledSpriteWidth: 850,
  totalPixelsScaled: 90950,
  uniqueRGBColors: [
    "55,189,200",
    "224,136,248",
    "248,192,248",
    "248,248,248",
    "56,48,56",
    "224,232,200",
    "112,200,248",
    "88,136,208",
    "56,88,128",
    "176,80,216",
    "248,224,176",
    "248,144,48",
    "248,192,112",
    "248,152,80",
    "184,64,40",
    "248,200,120",
    "136,0,80",
    "176,32,120",
    "216,56,168",
    "248,128,208",
    "200,232,248",
  ],
  uniqueHexColors: [
    "#37bdc8",
    "#e088f8",
    "#f8c0f8",
    "#f8f8f8",
    "#383038",
    "#e0e8c8",
    "#70c8f8",
    "#5888d0",
    "#385880",
    "#b050d8",
    "#f8e0b0",
    "#f89030",
    "#f8c070",
    "#f89850",
    "#b84028",
    "#f8c878",
    "#880050",
    "#b02078",
    "#d838a8",
    "#f880d0",
    "#c8e8f8",
  ],
  colorDistributionHex: {
    "#37bdc8": 5768,
    "#383038": 629,
    "#70c8f8": 396,
    "#5888d0": 371,
    "#d838a8": 295,
    "#b02078": 286,
    "#880050": 274,
    "#385880": 176,
    "#f880d0": 170,
    "#f8c878": 143,
    "#b84028": 134,
    "#f89850": 116,
    "#f8f8f8": 100,
    "#e0e8c8": 98,
    "#e088f8": 40,
    "#c8e8f8": 37,
    "#f8c0f8": 24,
    "#b050d8": 14,
    "#f8e0b0": 12,
    "#f8c070": 8,
    "#f89030": 4,
  },
  backgroundColor: "#37bdc8",
  chartColor: [
    "#383038",
    "#70c8f8",
    "#5888d0",
    "#d838a8",
    "#b02078",
    "#880050",
    "#385880",
    "#f880d0",
    "#f8c878",
    "#b84028",
    "#f89850",
    "#f8f8f8",
    "#e0e8c8",
    "#e088f8",
    "#c8e8f8",
    "#f8c0f8",
    "#b050d8",
    "#f8e0b0",
    "#f8c070",
    "#f89030",
  ],
  chartCount: [
    629,
    396,
    371,
    295,
    286,
    274,
    176,
    170,
    143,
    134,
    116,
    100,
    98,
    40,
    37,
    24,
    14,
    12,
    8,
    4,
  ],
};*/

/*let blackBorderColor = [];
for (var i = 0; i < results.chartColor.length; i++)
  blackBorderColor.push("rgb(0, 0, 0)");

let chartConfig = {
  type: "doughnut",
  data: {
    labels: results.chartColor,
    datasets: [
      {
        label: "Instances of this color",
        data: results.chartCount,
        backgroundColor: results.chartColor,
        borderColor: blackBorderColor,
        borderWidth: 2,
        barThickness: 50,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};*/

const BarChart = (props) => {
  console.log("in BarChart")
  console.log(props.pixelObject)
  let results = props.pixelObject;

  let blackBorderColor = [];
  for (var i = 0; i < results.chartColor.length; i++)
    blackBorderColor.push("rgb(0, 0, 0)");

  let chartConfig = {
    type: "doughnut",
    data: {
      labels: results.chartColor,
      datasets: [
        {
          label: "Instances of this color",
          data: results.chartCount,
          backgroundColor: results.chartColor,
          borderColor: blackBorderColor,
          borderWidth: 2,
          barThickness: 50,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  return (
    <div>
      <Bar
        data={chartConfig.data}
        height={400}
        width={600}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default BarChart;
