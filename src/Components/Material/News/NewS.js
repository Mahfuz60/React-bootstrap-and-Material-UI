import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

const NewS = (props) => {
  const { title, description, urlToImage } = props.article;
  return (
    <div>
      <Card sx={{ maxWidth: 400 }} className="mx-3 my-3">
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={urlToImage}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewS;
