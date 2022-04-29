import Chart from "../Charts/Chart";
const ExpensesChart = (props) => {
  //here we should make datapoints
  const newDataPoints = [
    { lable: "Jan", value: 0 },
    { lable: "Feb", value: 0 },
    { lable: "Mar", value: 0 },
    { lable: "Apr", value: 0 },
    { lable: "May", value: 0 },
    { lable: "Jun", value: 0 },
    { lable: "Jul", value: 0 },
    { lable: "Aug", value: 0 },
    { lable: "Sep", value: 0 },
    { lable: "Oct", value: 0 },
    { lable: "Nov", value: 0 },
    { lable: "Dec", value: 0 },
  ];
  for (const expense of props.items) {
    const month = expense.date.getMonth();
    newDataPoints[month].value += expense.price;
  }
  return <Chart dataPoints={newDataPoints} />;
};
export default ExpensesChart;
