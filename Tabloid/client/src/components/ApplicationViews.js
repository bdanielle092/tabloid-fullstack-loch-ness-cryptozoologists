import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import CategoryList from "./CategoryList";
import { CategoryProvider } from "../providers/CategoryProvider";
import PostList from "./PostList";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>


        <Route path="/post">
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>


        <Route path="/register">
          <Register />
        </Route>

        <Route path="/categories">

          <CategoryList />

        </Route>
      </Switch>
    </main >
  );
};
