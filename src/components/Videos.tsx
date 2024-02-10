import { Box, Stack } from "@mui/material";
import { ChannelCard, VideoCard } from ".";
import { ApiData } from "../types";

const Videos = ({ videos, justifyContent, direction }: Props) => {
  if (!videos?.length) return <div>Loading...</div>;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={justifyContent || "flex-start"}
      gap={2}
    >
      {videos?.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetails={item} />}
        </Box>
      ))}
    </Stack>
  );
};
type Props = {
  videos: ApiData[] | null;
  justifyContent?: string;
  direction?: "column" | "row";
};
export default Videos;
