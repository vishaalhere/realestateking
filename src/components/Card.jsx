import * as React from "react";
import Cards from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";

export default function Card({ todo }) {
  let title = todo.title.slice(0, 10);
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Cards sx={{ maxWidth: 300, maxHeight: 500 }}>
        <CardMedia
          component="img"
          height="140"
          image="/images/example.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            Property Type : {todo.userId}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Area/Sector : {todo.id}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Ready to Move : {todo.completed === true ? "Yes" : "No"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Property Description :{" "}
            {todo.title.length > 10 ? `${title}...more` : todo.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => setOpen(true)} size="small">
            Learn More
          </Button>
        </CardActions>
      </Cards>
      <Modal
        sx={{left:'34%', top:'25%'}}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Cards sx={{ maxWidth: 400, maxHeight: 600 }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/example.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="body2" component="div">
              Property Type : {todo.userId}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              Area/Sector : {todo.id}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              Ready to Move : {todo.completed === true ? "Yes" : "No"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Property Description :{todo.title}
            </Typography>
          </CardContent>
        </Cards>
      </Modal>
    </>
  );
}
