import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./component/Expanses/ExpenseItem";
import Card from "./component/UI/card";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 235.5, date: new Date(2024, 2, 25) },
    { title: "Car ", amount: 235.5, date: new Date(2024, 2, 25) },
    { title: "Insurance", amount: 235.5, date: new Date(2024, 2, 25) },
    { title: "Car  + Insurance", amount: 235.5, date: new Date(2024, 2, 25) },
  ];
  // const expenseElement = expenses.map((item) => (
  //   <ExpenseItem
  //     title={item.title}
  //     amount={item.amount}
  //     date={item.date}
  //   ></ExpenseItem>
  // ));
  return (
    <Card className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default App;
