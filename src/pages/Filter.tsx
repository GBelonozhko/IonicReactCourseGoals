import {
  IonList,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonToggle,
  IonBackButton,
} from "@ionic/react";
import React, {useContext} from "react";

import CoursesContext from '../data/courses-context';

import { COURSE_DATA } from "./Courses";

const Filter: React.FC = () => {
  const courseCtx = useContext(CoursesContext)
  const courseFilterChangeHandler = (event: CustomEvent) => {
   courseCtx.changeCourseFilter(event.detail.value, event.detail.checked)
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
          <IonBackButton />
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {courseCtx.courses.map((course) => (
            <IonItem key={course.id}>
              <IonLabel>{course.title}</IonLabel>
              <IonToggle
                checked={course.included}
                value={course.id}
                onIonChange={courseFilterChangeHandler}
                color='secondary'
              />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Filter;
