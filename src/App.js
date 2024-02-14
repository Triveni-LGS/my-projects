import React, { useState } from "react";
import Products from "./Products";
const App = () => {
    const [search, setSearch] = useState("");
    const [data,setData] = useState([]);
    const YOUR_APP_ID = "421952d1";
    const YOUR_APP_KEY = "8d54617d8345e5598dbd0723c7d7f12b";

    const submitHandler = (e) => {
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40&calories=591-722&health=alcohol-free`).then(
                response => response.json()
                ).then(
                    data => setData(data.hits));     
    };

    return (
        <div>
            <center>
                <h4>Food Recipe App</h4><br/>
                <form onSubmit={submitHandler}>
                    <input type="text" value={search} placeholder="Enter The Recipe" onChange={(e) => setSearch(e.target.value)} /><br/>
                    <input type="submit" className="btn btn-primary mt-3" value="Search" />
                </form>
                {data.length >= 1 && <Products data={data}/>}            </center>
        </div>
    );
};

export default App;
