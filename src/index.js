import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import ProfilePage2 from 'views/examples/ProfilePage2';
import ProfilePage3 from 'views/examples/ProfilePage3';
import ProfilePage4 from 'views/examples/ProfilePage4';
import PlatformPage from 'views/examples/PlatformPage';
import PlatformPage2 from 'views/examples/PlatformPage2';
import PlatformPage3 from 'views/examples/PlatformPage3';
import PlatformPage4 from 'views/examples/PlatformPage4';
import ProfilePage5 from 'views/examples/ProfilePage5';
import ProfilePage6 from 'views/examples/ProfilePage6';
import ProfilePage7 from 'views/examples/ProfilePage7';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route path="/about-page" render={(props) => <RegisterPage {...props} />} />
      <Route path="/profile-page" render={(props) => <ProfilePage {...props} />} />
      <Route path="/profile-page2" render={(props) => <ProfilePage2 {...props} />} />
      <Route path="/profile-page3" render={(props) => <ProfilePage3 {...props} />} />
      <Route path="/profile-page4" render={(props) => <ProfilePage4 {...props} />} />
      <Route path="/profile-page5" render={(props) => <ProfilePage5 {...props} />} />
      <Route path="/profile-page6" render={(props) => <ProfilePage6 {...props} />} />
      <Route path="/profile-page7" render={(props) => <ProfilePage7 {...props} />} />
      <Route path="/platform-page" render={(props) => <PlatformPage {...props} />} />
      <Route path="/platform-page2" render={(props) => <PlatformPage2 {...props} />} />
      <Route path="/platform-page3" render={(props) => <PlatformPage3 {...props} />} />
      <Route path="/platform-page4" render={(props) => <PlatformPage4 {...props} />} />
      <Redirect from="/" to="/components" />
    </Switch>
  </HashRouter>
);
