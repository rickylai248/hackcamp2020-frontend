import React from "react";
import MuiBox from "@material-ui/core/Box";

const BackgroundBox = ({ children }) => {
  return (
    <MuiBox
      width="80%"
      color="grey"
      bgcolor="#233C67"
      fontSize={{ xs: "h6.fontSize", sm: "h4.fontSize", md: "h3.fontSize" }}
      p={{ xs: 2, sm: 3, md: 4 }}
      borderRadius={30}
    >
      {children}
    </MuiBox>
  );
};

export default BackgroundBox;
