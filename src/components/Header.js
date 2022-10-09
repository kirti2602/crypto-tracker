import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {  createTheme, makeStyles ,ThemeProvider}
 from "@material-ui/core/styles"
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
// import React from "react";

//material UI custom styles below:-
const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

// for implementing dark theme
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  }
});

const Header = () => {
  const classes = useStyles(); //custom styles
  const { currency, setCurrency } = CryptoState()
  const navigate = useNavigate(); //for routing

  return (
    <ThemeProvider theme = {darkTheme}>
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography onClick={() => navigate("/")} 
          variant = "h6"
          className={classes.title}>
            Crypto Tracker
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value = {currency}
              onChange = {(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};

export default Header;

