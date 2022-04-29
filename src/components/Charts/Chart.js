import "./Chart.css";
import ChartBar from "./ChartBar";
import Card from "../UI/Card";
const Chart = (props) => {
  const pricees = props.dataPoints.map((datapoint) => datapoint.value);
  const max = Math.max(...pricees);
  return (
    <Card className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={max}
          lable={dataPoint.lable}
        />
      ))}
    </Card>
  );
};
export default Chart;
