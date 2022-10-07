import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FoodPairContext } from "../Context/FoodPairProvider";
import { useContext } from "react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

//props rendered by Vote.jsx
export default function RestaurantCard(props) {
  const { likedRestaurants } = useContext(FoodPairContext);
  const {
    bid,
    name,
    image,
    phone,
    price,
    review_count,
    rating,
    handleDelete,
    handleAdd,
  } = props;

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 450,

        display: "inline-block",
        backgroundColor: "white",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
      }}
    >
      <CardHeader title={name} />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Restaurant img"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Expand for More Details About This Restaurant!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {likedRestaurants.includes(bid) ? (
            <FavoriteIcon
              style={{ color: "red" }}
              onClick={() => handleDelete(bid)}
            />
          ) : (
            <FavoriteBorderIcon onClick={() => handleAdd(bid)} />
          )}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            <Divider textAlign="left">
              <Chip label="PRICE" />
            </Divider>
            <p> {price}</p>
            <Divider textAlign="left">
              <Chip label="RATING" />
            </Divider>
            <p> {rating}</p>
            <Divider textAlign="left">
              <Chip label="REVIEW COUNT" />
            </Divider>
            <p> {review_count}</p>
            <Divider textAlign="left">
              <Chip label="PHONE NUMBER" />
            </Divider>
            <p>{phone}</p>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
