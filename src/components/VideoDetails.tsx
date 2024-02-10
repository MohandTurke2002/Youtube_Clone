import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import { ApiData } from "../types";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from ".";

const VideoDetails = () => {
  const { videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState<ApiData | null>(null);
  const [video, setVideo] = useState<ApiData[] | null>(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then((data) =>
      setVideoDetails(data?.items[0])
    );

    fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${videoId}&type=video`
    ).then((data) => setVideo(data?.items));
  }, [videoId]);

  if (!videoDetails) return <div>Loading...</div>;
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              className="react-player"
              controls
            />

            <Typography color="#FFF" variant="h5" fontWeight="bold" p={2}>
              {videoDetails?.snippet?.title}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#FFF" }}
              py={1}
              px={2}
            >
              <Link to={`/channelDetails/${videoDetails?.snippet?.channelId}`}>
                <Typography variant="body1" color="#fff">
                  {videoDetails?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {videoDetails?.statistics?.viewCount} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {videoDetails?.statistics?.likeCount} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={video} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
