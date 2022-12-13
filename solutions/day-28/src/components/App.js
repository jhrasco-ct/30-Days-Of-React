import { useState } from "react";
import moment from "moment";

import Form from "./Form";
import Post from "./Post";
import "../styles/App.css";

const generateID = () => Math.floor(new Date().getTime());

const currentUser = {
  fullName: "John Harold Rasco",
  username: "@jhrasco",
};

const currentFormattedDate = () =>
  moment(new Date()).format("MMM DD, yyyy hh:mm a");

const initialData = [
  {
    id: generateID(),
    fullName: currentUser.fullName,
    username: currentUser.username,
    tweet:
      "30 Days Of React challenge has been started on 1 October and still ongoing. It will end the 30 October 2020. It was a real challenge for everyone. Students learned quite a lot of concepts. I hope this will help lots of students.",
    date: currentFormattedDate(),
  },
];

const App = () => {
  const [data, setData] = useState(initialData);

  const onPost = (text) => {
    const data = {
      id: generateID(),
      fullName: currentUser.fullName,
      username: currentUser.username,
      tweet: text,
      date: currentFormattedDate(),
    };
    setData((previousData) => [data, ...previousData]);
  };

  const onDelete = (dataToBeDeleted) => {
    setData((data) => data.filter((data) => dataToBeDeleted.id !== data.id));
  };

  return (
    <div className="app">
      <Form onPost={onPost} />
      {data.map((data) => (
        <Post key={data.id} data={data} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default App;
