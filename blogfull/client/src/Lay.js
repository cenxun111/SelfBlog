import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Center from "./center/Center";
import Rightbar from "./rifhtside/Rightbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


export default function FullWidthGrid() {
  const classes = useStyles();

  return (

    <div className={classes.root}>

      <Grid container >
        <Grid item xs={2} md={2} >
          {/* <Sidebar /> */}
        </Grid>

        <Grid item lg={6} xs={10}>
          <Center />
          
         
        {/* <Router>
        <Switch>
          <Route exact path="/">
            <Center />
          </Route>
          <Route path ="/register">
            <Register/>
          </Route>
        </Switch>
      </Router> */}
          
        {/* <Write/> */}
        {/* <Setting /> */}
        {/* <Login/> */}
        {/* <Register/> */}
        </Grid>

        <Hidden mdDown>

          <Grid item xs={4} >
            <Rightbar />
          </Grid>

        </Hidden>

      </Grid>

    </div>

  );
}
