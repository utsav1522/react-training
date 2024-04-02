import Greeting from "./components/Question1";
import UserCard from "./components/Question2";
import Weather from "./components/Question3";
import Counter from "./components/Question4";
import TaskList from "./components/Question5";
import Button from "./components/Question6";
import { data, tasks } from "./mock.js";
const Assignment1 = () => {
  return (
    <>
      <Greeting />
      <hr />
      {data.map((element, index) => {
        return (
          <UserCard
            name={element.name}
            email={element.email}
            avatarURL={element.avatarURL}
            key={index}
          />
        );
      })}
      <hr />
      <Weather temperature={16} />

      <hr />
      <Counter />
      <hr />
      <TaskList taskList={tasks} />
      <hr />
      <Button Text={"Passing text from index.js"} Color={"blue"} />
    </>
  );
};

export default Assignment1;
