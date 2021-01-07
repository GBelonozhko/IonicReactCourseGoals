import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import AllGoals from "./AllGoals";
import Courses from "./Courses";
import CourseGoals from "./CourseGoals";
import { trophyOutline, list } from "ionicons/icons";

const CourseTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet id='main'>
        <Redirect path='/courses' to='/courses/list' exact />
        <Switch>
          <Route path='/home' component={Home} exact={true} />
          <Route path='/courses/list' component={Courses} exact={true} />
          <Route path='/courses/AllGoals' component={AllGoals} exact={true} />
          <Route
            path='/courses/:courseId'
            component={CourseGoals}
            exact={true}
          />
        </Switch>
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        <IonTabButton tab='allgoals' href='/courses/AllGoals'>
          <IonIcon icon={list} />
          <IonLabel>All Goals</IonLabel>
        </IonTabButton>
        <IonTabButton tab='courses' href='/courses/list'>
          <IonIcon icon={trophyOutline} />
          <IonLabel>Courses</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default CourseTabs;
