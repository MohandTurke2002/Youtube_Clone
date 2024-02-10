import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ApiData } from "../types";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoUrl,
} from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video }: { video: ApiData }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link
        to={
          video.id.videoId ? `/videoDetails/${video.id.videoId}` : demoVideoUrl
        }
      >
        <CardMedia
          component="img"
          alt={video.snippet?.title}
          image={video.snippet?.thumbnails?.high?.url}
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link
          to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {video.snippet?.title.slice(0, 60) || demoVideoUrl.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={
            video.id.channelId
              ? `/channel/${video.id.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {video.snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
