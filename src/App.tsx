import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ChannelDetails,
  Home,
  Navbar,
  NotFound,
  SearchResults,
  VideoDetails,
} from "./components";
import { Box } from "@mui/material";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" caseSensitive element={<Home />} />
          <Route path="videoDetails/:videoId" element={<VideoDetails />} />
          <Route
            path="channelDetails/:channelId"
            element={<ChannelDetails />}
          />
          <Route
            path="searchResults/:searchQuery"
            element={<SearchResults />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
