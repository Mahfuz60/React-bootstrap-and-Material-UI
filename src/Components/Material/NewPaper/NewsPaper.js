import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import NewS from "../News/NewS";

const NewsPaper = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=Apple&from=2022-02-03&sortBy=popularity&apiKey=2ed92e26b1ce469dae8561471aed9f57`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {articles.map((article, id) => {
            return <NewS article={article} key={id}></NewS>;
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default NewsPaper;
