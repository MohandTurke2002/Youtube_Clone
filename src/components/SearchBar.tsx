import { IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery) navigate(`/searchResults/${searchQuery}`);
    setSearchQuery("");
  };
  return (
    <Paper
      component={"form"}
      sx={{
        border: "1px solid #e3e3e3",
        pl: 2,
        borderRadius: 20,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
      onSubmit={handleSearch}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <IconButton type="button" sx={{ p: "10px", color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
