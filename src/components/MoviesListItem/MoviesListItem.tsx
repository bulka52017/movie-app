import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { IMockServiceData } from "../../api/mockData/mockData";

const MoviesListItem = ({ title, url, category, image }: IMockServiceData) => (
  <Card>
    <CardActionArea>
      <CardMedia
        component="img"
        height={280}
        image={image}
        alt={title}
        sx={{ objectFit: "contain" }}
      />
    </CardActionArea>
    <CardContent>
      <Typography gutterBottom variant="h4" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <b>Category:</b>{" "}
        {Array.isArray(category) ? (
          category.map((c) => <span key={c}>{c} </span>)
        ) : (
          <span>{category}</span>
        )}
      </Typography>
    </CardContent>
    <CardActions>
      <Button LinkComponent={Link} href={url} size="small" color="primary">
        Link
      </Button>
    </CardActions>
  </Card>
);

export default MoviesListItem;
