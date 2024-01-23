import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Respose not ok");
  //     }
  //     const fetchData = await response.json();
  //     setData(fetchData);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      {/* <ul>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul> */}

      <Counter />
    </div>
  );
}

export default App;
