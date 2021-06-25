import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import UsersContainer from "./components/UsersContainer";
import UserProfile from "./components/UserProfile";
import UploadTrack from "./components/UploadTrack";
import SingleTrack from "./components/SingleTrack";
import EditTrack from "./components/EditTrack";
import DeleteTrack from "./components/DeleteTrack";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation className='nav-bar' isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/users">
            <h1> Featured Artists</h1>
            <UsersContainer />
          </Route>
          <Route exact path="/users/:id">
            <UserProfile />
          </Route>
          <Route exact path="/users/:id/upload">
            <UploadTrack />
          </Route>
          <Route exact path="/users/:id/tracks/:trackId">
            <SingleTrack />
          </Route>
          <Route exact path="/users/:id/tracks/:trackId/edit">
            <EditTrack />
          </Route>
          <Route exact path="/users/:id/tracks/:trackId/delete">
            <DeleteTrack />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
