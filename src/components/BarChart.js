import React from "react";
import { Bar } from "react-chartjs-2";
//import { Pie } from "react-chartjs-2";

const BarChart = (props) => {
  
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
          label: false,
          data: results.chartCount,
          backgroundColor: results.chartColor,
          borderColor: blackBorderColor,
          borderWidth: 2,
          barThickness: 50,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      backgroundColor: "#dadada",
      layout: {
        padding: {
          top: 50,
          bottom: 50
        }
      },
      plugins: {
        legend: {
          display: false
      },
    },
      scales: {
        yAxes: 
        [
          {
            scaleLabel: {
              display: true,
              labelString: 'YEE'
            }
          },
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        xAxes: 
        [
          {
            scaleLabel: {
              display: true,
              labelString: 'Hex Values'
            }
          },
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };
  console.log("chartConfig: ")
  console.log(chartConfig)

  return (
    <div>
      <Bar
        data={chartConfig.data}
        height={400}
        width={600}
        options={chartConfig.options}

        /*options={{maintainAspectRatio: false}}*/
      />
    </div>
  );
};

export default BarChart;
