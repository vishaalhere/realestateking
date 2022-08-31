import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import FilterMenu from "./FilterMenu";
import Loader from "./Layout/Loader";
import Navbar from "./Layout/NavBar"

const Homepage = () => {
  const [todos, setTodos] = useState([]);
  const [id, setId] = React.useState(0);
  const [userId, setuserId] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [completed, setCompleted] = React.useState("");
  const [filterData, setFilterData] = useState([]);

  const applyFilters = () => {
    let filters = { userId, id, title, completed };
    console.log("9999999", filters);
    filteredData(filters);
    return filters;
  };

  const clearFilters = () => {
    setuserId(0);
    setId(0);
    setTitle("");
    setCompleted("");
    setFilterData(todos);
  };

  const getData = async () => {
    let link = `https://jsonplaceholder.typicode.com/todos`;
    const res = await axios.get(link);
    console.log("999999", res.data);
    let data = res.data;
    setFilterData(data);
    setTodos(data);
  };

  const filteredData = (filters) => {
    let filteredData = [...todos];
    // console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",todos[0]);
    if (filters.userId) {
      filteredData = filteredData.filter((todo) => {
        return +filters.userId === todo.userId;
      });
    }
    console.log("OOOOOOOOOOOOOOOOOOOOO111", { filteredData });
    if (filters.id) {
      filteredData = filteredData.filter((todo) => {
        return +filters.id === todo.id;
      });
    }
    console.log("OOOOOOOOOOOOOOOOOOOOO2222", { filteredData });
    if (filters.title !== "") {
      filteredData = filteredData.filter((todo) => {
        return todo.title.includes(filters.title);
      });
    }
    console.log("OOOOOOOOOOOOOOOOOOOOO333", { filteredData });
    if (filters.completed !== "") {
      filteredData = filteredData.filter((todo) => {
        return filters.completed === todo.completed.toString();
      });
    }
    setFilterData(filteredData);
    console.log("OOOOOOOOOOOOOOOOOOOOO444", { filteredData });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <Navbar/>
    <p className="my-6 text-center font-serif text-6xl text-gray-500">Welcome to the Real Estate King</p>
      <FilterMenu
        applyFilters={applyFilters}
        clearFilters={clearFilters}
        id={id}
        setId={setId}
        userId={userId}
        setuserId={setuserId}
        title={title}
        setTitle={setTitle}
        completed={completed}
        setCompleted={setCompleted}
      />
      {todos.length > 0 ? <div className="flex flex-wrap m-10 justify-around">
        {filterData.length > 0 ? (
          filterData.map((todo) => {
            return (
              <div className="p-10">
                <Card todo={todo} />
              </div>
            );
          })
        ) : (
          <p className="m-auto text-center text-7xl text-gray-700 font-serif"> No Data </p>
        )}
      </div> : <Loader/>}
    </>
  );
};

export default Homepage;
