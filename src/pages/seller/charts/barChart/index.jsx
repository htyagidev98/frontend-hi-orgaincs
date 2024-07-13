import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = ({ chartState }) => {
  return (
    <ReactApexChart
      options={chartState.options}
      series={chartState.series}
      type="bar"
      //   width={500}
      height={320}
    />
  );
};

export default BarChart;
