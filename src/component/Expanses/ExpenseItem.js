import "./ExpansItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";

function ExpenseItem4(props) {
  // console.log(props);
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-item">
      <div>
        <div>{date}</div>
        <div>{month} </div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

function ExpenseItem(props) {
  // console.log(props);

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}
function ExpenseItem2(props) {
  console.log(props.date);
  const expenseDate = props.date;
  const title = props.title;
  const amount = props.amount;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
}

function ExpenseItem3({ date, title, amount }) {
  // console.log(props.date);
  // const expenseDate = props.date;
  // const title = props.title;
  // const amount = props.amount;
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
}

function ExpenseItem5(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem5;
