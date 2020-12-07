import React from "react";
import MuiBox from "@material-ui/core/Box";

const Box = ({ children }) => {
  return (
    <MuiBox
      width={500}
      color="grey"
      bgcolor="grey.300"
      fontSize={{ xs: "h6.fontSize", sm: "h4.fontSize", md: "h3.fontSize" }}
      p={{ xs: 2, sm: 3, md: 4 }}
      borderRadius={16}
    >
      {children}
    </MuiBox>
  );
};

export default Box;
