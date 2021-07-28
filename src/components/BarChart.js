import React from "react";
import { Bar } from "react-chartjs-2";
//import { Pie } from "react-chartjs-2";

const BarChart = (props) => {
  
  let results = props.pixelObject;

  // Pack an array of values for the bar borders
  let blackBorderColor = [];
  for (var i = 0; i < results.chartColor.length; i++)
    blackBorderColor.push("rgb(0, 0, 0)");

  let chartConfig = {
    type: "doughnut",
    backgroundColor: results.uniqueHexColors[0],
    data: {
      labels: results.chartColor,
      datasets: [
        {
          label: false,
          data: results.chartCount,
          backgroundColor: results.chartColor,
          borderColor: blackBorderColor,
          borderWidth: 2,
          barThickness: 100,
        },
      ],
    },
    options: {
    responsive: false,
    scales: {
      xAxes: [{
        ticks: {
          maxRotation: 90,
          minRotation: 80
        },
        scaleLabel: {
        display: true,
        labelString: 'OKAY'
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        scaleLabel: {
        display: true,
        labelString: 'OKAY'
        }
      }]
    }
  }
  };

  console.log("chartConfig: ")
  console.log(chartConfig)
  console.log(chartConfig.data.datasets[0].data)

  console.log("chartConfig.backgroundColor")
  console.log(chartConfig.backgroundColor)

  // Match background color of chart to background color of sprite
  let background = "";
  if(chartConfig.backgroundColor === "#dadada")
    background = "chart_background_gray";
  else if(chartConfig.backgroundColor === "#ddf482")
    background = "chart_background_green";
  else if(chartConfig.backgroundColor === "#8ac5ff") 
    background = "chart_background_blue";
  else if(chartConfig.backgroundColor === "#0070ec") 
    background = "chart_background_black";

  return (

    <div className={background}>

      <Bar
        data={chartConfig.data}
        height={400}
        width={600}
        options={{
      maintainAspectRatio: false,
      backgroundColor: "#dadada",
      layout: {
        padding: {
          top: 25,
          bottom: 10
        }
      },
      plugins: {
        legend: 
        {
          display: false,
        }
      },
      scales: 
      {
        xAxes: 
        [
          {
            gridLines: 
            {
              display: false,
              color: "black"
            },
            scaleLabel: 
            {
              display: true,
              labelString: "Time in Seconds",
              fontColor: "red"
            }
          }
        ],
        yAxes: 
        [
          {
            gridLines: 
            {
              display: false,
              color: "black",
              borderDash: [2, 5],
            },
            scaleLabel: 
            {
              display: true,
              labelString: "Speed in Miles per Hour",
              fontColor: "green"
            }
          }   
        ]
      }
    }}
        
        /*options={{maintainAspectRatio: false}}*/
      />
    </div>
  );
};

export default BarChart;