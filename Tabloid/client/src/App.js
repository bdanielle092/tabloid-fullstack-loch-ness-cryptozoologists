import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationViews";
import CategoryList from "./components/CategoryList";
import { CategoryProvider } from "./providers/CategoryProvider";
import { PostProvider } from './providers/PostProvider';
import { CommentProvider } from './providers/CommentProvider';

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <CategoryProvider>
          <PostProvider>
            <CommentProvider>
              <Header />
              <ApplicationViews />
            </CommentProvider>
          </PostProvider>
        </CategoryProvider>
      </UserProfileProvider>
    </Router >
  );
}

export default App;
