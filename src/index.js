import { React } from "react";
import ReactDOM from "react-dom";

const people = [
  {
    id: 1,
    img: "https://rb.gy/ptynra",
    name: "Aarush",
    age: 21
  },
  {
    id: 2,
    img: "https://rb.gy/ptynra",
    name: "Peter",
    age: 13
  },
  {
    id: 3,
    img: "https://rb.gy/ptynra",
    name: "John Doe",
    age: 14
  }
];

function Peoplelist() {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
}

const Person = (props) => {
  const { img, name, age } = props;
  return (
    <article>
      <img src={img} alt={name} width="120px" />
      <h2>{name}</h2>
      <h3>{age}</h3>
    </article>
  );
};

ReactDOM.render(<Peoplelist />, document.getElementById("root"));
