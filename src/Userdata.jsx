import { React, useEffect, useState } from "react";
import "./Userdata.css";
export default function Userdata() {
  const [userdata, setUserdata] = useState([]);
  const [updatedata, setUpdatedata] = useState([]);
  const [value2, setValue2] = useState("");

  function fetchuser() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUserdata(res));
  }

  useEffect(() => {
    fetchuser();
  });

  const onchange = (e) => {
    const value1 = e.target.value;
    setValue2(value1);
    const suggest = userdata.filter((data, index) => {
      return (
        data.name.toLowerCase().includes(value1.toLowerCase()) ||
        data.username.toLowerCase().includes(value1.toLowerCase())
      );
    });
    setUpdatedata(suggest);
  };

  return (
    <div className="maindiv">
      <div className="datadiv">
        <input
          type="text"
          className="searchdata"
          placeholder="write for search user"
          onChange={onchange}
        />

        {value2 === "" || updatedata === []
          ? userdata.map((data, index) => {
              return (
                <li key={index}>
                  {" "}
                  {data.id} : ( {data.name} ) #{data.username}
                </li>
              );
            })
          : updatedata.map((data, index) => {
              return (
                <li key={index}>
                  {" "}
                  {data.id} : ( {data.name} ) #{data.username}
                </li>
              );
            })}
      </div>
    </div>
  );
}
