import React from "react";
import { Bar, Pie } from "react-chartjs-2";
//import { Pie } from "react-chartjs-2";

const BarChart = (props) => {
  
  let results = props.pixelObject;

  // 
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
    }
  };

  let chartOptions = {
    scales: {
        yAxes: [{
            display: true,
            ticks: 
            {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                beginAtZero: true   // minimum value will be 0.
            },
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
        }]
    }
};
  console.log("chartConfig: ")
  console.log(chartConfig)

  let background = "";

  if(chartConfig.backgroundColor === "#dadada")
  {
    background = "chart_background_gray";
    //background = 'background-color:' +  chartConfig.backgroundColor;
    //<div style="background-color:red"> </div>
  } 
  else if(chartConfig.backgroundColor === "#ddf482")
  {
    background = "chart_background_green";
    //background = '"background-color:' + chartConfig.backgroundColor + '"';
    

  } 
  else if(chartConfig.backgroundColor === "#8ac5ff") 
  {
    background = "chart_background_blue";
    //background = '"background-color:' + chartConfig.backgroundColor + '"';
    //<div className={background}>

  }

  return (

    <div className={background}>

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
