import "../../css/Chart.css";
import ReactApexChart from "react-apexcharts";


import React from "react";

export default function Charts() {
  const series = [
    {
      name: "DK - 1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "DK - 2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "DK - Gas",
      data: [],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        reset:
          true |
          '<img src="https://pics.freeicons.io/uploads/icons/png/2674342741552644384-512.png" width="20" />',
      },
    },
    markers: {
      size: 5,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div className="charts">
      <h3 className="chartTitle">Power Cost</h3>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={250}
        />
      </div>
    </div>
  );
}
