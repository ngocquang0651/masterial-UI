import React, { useState, useEffect } from "react";
import useRequest from "../../Hooks/useRequest";
import useTitle from "../../Hooks/useTitle";
import Button from "@material-ui/core/Button";
import Header from "./Blog/Header";
import Blog from "./Blog/Blog";

function Home() {
  // const [title, setTitle] = useState("");
  // const { loading, api, error } = useRequest();
  // const handleTitle = (e: any) => {
  //   setTitle(e.target.value);
  // };
  // const [search, setSearch] = useState<string>("");
  // const [param, setParam] = useState<string>("posts");
  // const request = () => {
  //   api("https://jsonplaceholder.typicode.com/", param).then((res) =>
  //     console.log(res)
  //   );
  // };

  // useEffect(() => request(), [param]);

  // if (loading) return <div>Loading</div>;
  // //if(error) return <h1>{error}</h1>

  // useTitle("asdasda");

  return (
    <div className="home">
      <Blog />
      {/* <h1>Post</h1>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setParam(search)}
      >
        search
      </Button> */}
    </div>
  );
}

export default Home;
