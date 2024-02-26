import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="divclass">
    <Header />
    <Content />
    <Footer />
  </div>
);

function Header() {
  return <header>Header</header>;
}
function Footer() {
  return <footer>Footer</footer>;
}
function Question(props) {
  return (
    <div>
      <h2>{props.q}</h2>

      <h3>
        {" "}
        <input type="radio" name={props.name} value={props.op1}></input>
        {props.op1}
      </h3>

      <h3>
        {" "}
        <input type="radio" name={props.name} value={props.op2}></input>
        {props.op2}
      </h3>

      <h3>
        <input type="radio" name={props.name} value={props.op3}></input>
        {props.op3}
      </h3>

      <h3>
        <input type="radio" name={props.name} value={props.op4}></input>
        {props.op4}
      </h3>
    </div>
  );
}
function Content() {
  return (
    <div>
      <div>
        <Question
          q="what is Java?"
          op1="a.java is oops"
          op2="b.java is os"
          op3="c.java is ps"
          op4="d.java is st"
          name="q1"
        />

        <Question
          q="what is sql?"
          op1="a.sql is oops"
          op2="b.sql is querry"
          op3="c.sql is ps"
          op4="d.sql is st"
          name="q2"
        />
        <Question
          q="what is os?"
          op1="a.os is oops"
          op2="b.os is querry"
          op3="c.os is ps"
          op4="d.os is operating systems"
          name="q2"
        />
        <Question
          q="what is st?"
          op1="a.st is oops"
          op2="b.st is querry"
          op3="c.st is ps"
          op4="d.st is software testing"
          name="q2"
        />
      </div>
      <br />
      <br />
      <input id="submit" type="submit" value="submit the quizz"></input>
      <br />
      <br />
    </div>
  );
}
