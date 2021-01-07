import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonLabel,
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonMenu,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonButtons,
  IonMenuButton,
  IonMenuToggle,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseGoals from "./pages/CourseGoals";

import { list, options, trophyOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/theme.css";
import AllGoals from "./pages/AllGoals";
import Filter from "./pages/Filter";
import CourseTabs from "./pages/CourseTabs";
import SideDrawer from "./components/SideDrawer";
import CoursesContextProvider from "./data/CoursesContextProvider";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <SideDrawer/>
      <CoursesContextProvider>
      <IonRouterOutlet>
        <Route path='/filter' component={Filter} exact/>
        <Route path="/courses" component={CourseTabs} />
        <Redirect path="/" to="/courses/list" exact/>
      </IonRouterOutlet>
      </CoursesContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
