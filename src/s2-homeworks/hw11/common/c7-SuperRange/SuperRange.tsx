import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        // стили для слайдера // пишет студент
        width: 150,
        height: 4,
        borderRadius: 10,
        "& .MuiSlider-thumb": {
          color: "#01CB22",
          borderWidth: "6px",
          borderStyle: "solid",
          borderColor: "white",
          outlineWidth: 1,
          outlineColor: "#01CB22",
          outlineStyle: "solid",
          "&:hover": {
            boxShadow: "0px 0px 0px 8px rgb(1, 203, 34, 0.16)",
          },
        },
        "& .MuiSlider-track": {
          borderColor: "#01CB22",
          backgroundColor: "#01CB22", // Цвет дорожки
        },
        "& .MuiSlider-rail": {
          backgroundColor: "#333", // Цвет фоновой дорожки
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
