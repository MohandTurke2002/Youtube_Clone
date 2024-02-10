import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import { Box } from "@mui/material";
import { ChannelCard, Videos } from ".";
import { ApiData } from "../types";
import { demoChannelTitle } from "../utils/constants";

const ChannelDetails = () => {
  const { channelId } = useParams();

  const [channelDetails, setChannelDetails] = useState<ApiData | null>(null);
  const [videos, setVideos] = useState([]);

  console.log("channelDetails", channelDetails);
  console.log("videos", videos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${channelId}`).then((data) => {
      setChannelDetails(data?.items[0]);
    });

    fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [channelId]);
  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Box>
        <div
          style={{
            height: "300px",
            background: `url(${
              channelDetails?.brandingSettings?.image?.bannerExternalUrl ||
              demoChannelTitle
            })`,
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetails={channelDetails} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }}>
          <Videos videos={videos} justifyContent="center" />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetails;
