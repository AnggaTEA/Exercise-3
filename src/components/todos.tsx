import { Row } from "./todoslist";
import { data } from "../api/apitodos";
// import { Post } from "../api/api";

export const Todos = () => {
  return (
    <section>
      {data.map((todo) => (
        <Row key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
