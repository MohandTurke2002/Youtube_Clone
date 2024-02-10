import { Box, Typography } from "@mui/material";
import { Videos } from ".";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const { searchQuery } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchQuery}`).then(({ items }) => {
      setVideos(items);
    });
  }, [searchQuery]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchQuery}</span> videos
      </Typography>

      <Videos videos={videos} justifyContent="center" />
    </Box>
  );
};

export default SearchResults;
