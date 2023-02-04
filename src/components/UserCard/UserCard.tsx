import React, { useState } from "react";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { IUserData } from "../../Interface";
import { ReactComponent as Email } from "../../assets/mail.svg";
import { ReactComponent as Website } from "../../assets/globe.svg";
import { ReactComponent as Phone } from "../../assets/telephone.svg";
import { ReactComponent as UnLike } from "../../assets/heart.svg";
import { ReactComponent as Like } from "../../assets/heart-fill.svg";

interface IUserProps {
  user: IUserData;
}

const UserCard = ({ user }: IUserProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const { id, username, name, email, phone, website } = user;

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card sx={{ boxShadow: "unset", border: "1px solid #ddd" }}>
      <CardMedia
        component="img"
        height="150"
        image={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
        alt="avatar-image"
        sx={{
          objectFit: "none",
          backgroundColor: "#f1f1f1",
        }}
      />
      <CardContent sx={{ p: 3 }}>
        <Typography fontWeight={600}>{name}</Typography>
        <Stack spacing={0.75} marginTop={1}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Email />
            <Typography fontSize={14} component="span">
              {email}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Phone />
            <Typography fontSize={14} component="span">
              {phone}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Website />
            <Typography fontSize={14} component="span">
              {website}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          borderTop: "1px solid #ddd",
          backgroundColor: "#F8F8F8",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          width="100%"
        >
          <IconButton onClick={toggleLike}>
            {isLiked ? <Like /> : <UnLike />}
          </IconButton>
          <Divider
            flexItem
            orientation="vertical"
            sx={{
              borderBottomWidth: "1.5px",
              borderColor: "#D0D0D0",
            }}
          />
          <EditButton
            id={id}
            name={name}
            email={email}
            phone={phone}
            website={website}
          />
          <Divider
            flexItem
            orientation="vertical"
            sx={{
              borderBottomWidth: "1.5px",
              borderColor: "#D0D0D0",
            }}
          />
          <DeleteButton id={id} />
        </Stack>
      </CardActions>
    </Card>
  );
};

export default UserCard;
