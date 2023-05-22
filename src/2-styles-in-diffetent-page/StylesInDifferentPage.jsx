import React from "react";
import useStyles from "./Styles";

const StylesInDifferentPage = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.text}>StylesInDifferentPage</div>
      <div className={classes.secondText}>StylesInDifferentPage Second</div>
    </div>
  );
};

export default StylesInDifferentPage;
