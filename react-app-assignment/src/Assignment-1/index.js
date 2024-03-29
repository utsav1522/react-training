import Greeting from "./Question-1";
import UserCard from "./Question-2";
import Weather from "./Question-3";
import Counter from "./Question-4";
import TaskList from "./Question-5/Question-5";
import Button from "./Question-6";

const Question1 = () => {
  const url =
    "https://img.freepik.com/free-photo/3d-render-little-boy-with-eyeglasses-blue-shirt_1142-50994.jpg?t=st=1711533019~exp=1711536619~hmac=8e07bc934b6ae11858918e35c4700e9e0703f6dc61273b397ca73a11dfa8c479&w=740";
  const data = [
    {
      name: "Utsav Jain",
      email: "utsav.jain@successive.tech",
      avatarURL: url,
    },
    {
      name: "Abcd",
      email: "ab.cd@successive.tech",
      avatarURL:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    },
    {
      name: "efgh",
      email: "ef.gh@successive.tech",
      avatarURL:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    },
    {
      name: "ijkl",
      email: "ij.kl@successive.tech",
      avatarURL: url,
    },
  ];

  const tasks = [
    "to do basic HTML",
    "to learn basic CSS",
    "to do JS",
    "to do react basics",
    "to do rect hooks",
  ];

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
      <Weather temperature={40} />

      <hr />
      <Counter />
      <hr />
      <TaskList taskList={tasks} />
      <hr />
      <Button Text={"Passing text from index.js"} Color={"blue"} />
    </>
  );
};
export default Question1;
