import React from "react";
import {
  IonRow,
  IonCol,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
  IonPage,
  IonButtons,
  IonBackButton,
  IonGrid,
  IonMenuButton,
  isPlatform,
  IonIcon,
  IonFab,
  IonFabButton,
} from "@ionic/react";

import { addOutline } from "ionicons/icons";
import { useState, useContext } from "react";
import AddCourseModal from "../components/AddCourseModal";
import CourseItem from "../components/CourseItem";
import CoursesContext from '../data/courses-context';

export const COURSE_DATA = [
  {
    id: "c1",
    title: "Ionic +React",
    enrolled: new Date("03/22/2019"),
    goals: [
      { id: "c1g1", text: "finish the course1" },
      { id: "c1g2", text: "finish the course1" },
      { id: "c1g3", text: "finish the course1" },
    ],
  },
  {
    id: "c2",
    title: "JAVA",
    enrolled: new Date("08/02/2019"),
    goals: [
      { id: "c2g1", text: "finish the course2" },
      { id: "c2g2", text: "finish the course2" },
      { id: "c2g3", text: "finish the course2" },
    ],
  },
  {
    id: "c3",
    title: "AI",
    enrolled: new Date("03/05/2020"),
    goals: [
      { id: "c3g1", text: "finish the course" },
      { id: "c3g2", text: "finish the course" },
      { id: "c3g3", text: "finish the course" },
    ],
  },
];

const Courses: React.FC = () => {
  const [isAdding, setIsAdding] = useState(false);
  const coursesCtx = useContext(CoursesContext)

  const startAddCourseHandler = () => {
    setIsAdding(true);
  };

  const cancelAddCourseHandler = () => {
    setIsAdding(false);
  };

  const courseAddHandler = (title: string, date: Date) => {
    coursesCtx.addCourse(title, date);
    setIsAdding(false);
  };

  return (
    <React.Fragment>
      <AddCourseModal
        show={isAdding}
        onCancel={cancelAddCourseHandler}
        onSave={courseAddHandler}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonButtons slot='start'>
              <IonBackButton />
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Courses</IonTitle>
            {!isPlatform("android") && (
              <IonButtons slot='end'>
                <IonButton onClick={startAddCourseHandler}>
                  <IonIcon slot='icon-only' icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {coursesCtx.courses.map((course) => (
              <IonRow key={course.id}>
                <IonCol size-sm='6' size-md='4' offset-md='4'>
                  <CourseItem
                    title={course.title}
                    id={course.id}
                    enrollmentDate={course.enrolled}
                  />
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
          {isPlatform("android") && (
            <IonFab
              horizontal='center'
              className=''
              vertical='bottom'
              slot='fixed'>
              <IonFabButton onClick={startAddCourseHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Courses;
