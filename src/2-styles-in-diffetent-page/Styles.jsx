import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // Define your styles here
  text: {
    marginTop: "20px",
    fontWeight: 800,
    fontSize: "30px",
    [theme.breakpoints.down("xs")]: {
      color: "orange",
    },
    [theme.breakpoints.between("sm", "md")]: {
      color: "red",
    },
    [theme.breakpoints.between("md", "lg")]: {
      color: "green",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      color: "pink",
    },
    [theme.breakpoints.up("xl")]: {
      color: "blue",
    },
  },
  secondText: {
    marginTop: "20px",
    fontWeight: 800,
    fontSize: "30px",
    color: "blue", // Default color

    "@media (max-width: 599px)": {
      color: "orange", // xs - orange
    },
    "@media (min-width: 600px) and (max-width: 959px)": {
      color: "red", // sm - red
    },
    "@media (min-width: 960px) and (max-width: 1279px)": {
      color: "green", // md - green
    },
    "@media (min-width: 1280px) and (max-width: 1919px)": {
      color: "pink", // lg - pink
    },
    "@media (min-width: 1920px)": {
      color: "blue", // xl - blue
    },
  },
}));

export default useStyles;
