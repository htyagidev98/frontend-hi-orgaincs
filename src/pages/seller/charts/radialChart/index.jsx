import React from "react";
import ReactApexChart from "react-apexcharts";

const MultipleRadial = ({ chartState }) => {
  return (
    <ReactApexChart
      options={chartState.options}
      series={chartState.series}
      type="radialBar"
      // width={500}
      height={350}
    />
  );
};

export default MultipleRadial;
