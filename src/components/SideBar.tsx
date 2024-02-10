import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({
  selectedCategory,
  setSelectedCategory,
}: props): JSX.Element => {
  return (
    <Stack
      direction={"row"}
      sx={{
        height: { sx: "auto", md: "95%" },
        overflow: "auto",
        flexDirection: { md: "column" },
      }}
    >
      {categories.map(({ name, icon }) => (
        <button
          className="category-btn"
          key={name}
          style={{
            cursor: "pointer",
            backgroundColor:
              name === selectedCategory ? "#FC1503" : "transparent",
            color: "white",
          }}
          onClick={() => setSelectedCategory(name)}
        >
          <span
            style={{
              color: name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {icon}
          </span>
          <span style={{ opacity: name === selectedCategory ? "1" : "0.8" }}>
            {name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

type props = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

export default SideBar;
