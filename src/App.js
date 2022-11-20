import React from "react";

import Recipe from "./Recipe";
import "./global.css";
import style from "./app.module.css";

function App() {
  const [search, setSearch] = React.useState("");
  const [query, setQuery] = React.useState("chicken");
  const [recipes, setRecipes] = React.useState([]);

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRecipes(data.hits));
  }, [url]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Search for an ingredient:</h1>
      <form className={style.searchForm} onSubmit={handleSearch}>
        <input
          type="text"
          className={style.searchInput}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className={`btn ${style.searchBtn}`}>
          Search
        </button>
      </form>
      <div className={style.recipes}>
        {recipes.map((recipe, index) => {
          return <Recipe key={index} {...recipe.recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
