import React from "react";
import MuiBox from "@material-ui/core/Box";

const Box = () => {
  return (
    <MuiBox
    width="100"
    color="grey"
    bgcolor="grey.300"
    fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
    p={{ xs: 2, sm: 3, md: 4 }}
    borderRadius="20%"
    borderRadius="borderRadius"
    borderRadius={16}
    >
      HappyHippo! TEXT
    </MuiBox>
  );
};

export default Box;
