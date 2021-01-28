import React, { useState, useRef, useContext } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonBackButton,
  IonButton,
  IonButtons,
  IonList,
  IonIcon,
  IonFab,
  IonFabButton,
  isPlatform,
  IonAlert,
  IonToast,
} from "@ionic/react";
import { useParams } from "react-router-dom";
import { COURSE_DATA } from "./Courses";
import { addOutline } from "ionicons/icons";
import EditModal from "../components/EditModal";
import EditableGoalItem from "../components/EditableGoalItem";
import CoursesContext from "../data/courses-context";

const CourseGoals: React.FC = () => {
  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState({ id: "", text: "" });

  const coursesCtx = useContext(CoursesContext);

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const selectedGoalIdRef = useRef<string | null>(null);

  const selectedCourse = coursesCtx.courses.find(
    (c) => c.id === selectedCourseId
  );

  const startDeletGoalHandler = (goalId: string) => {
    setToastMessage("");
    setStartedDeleting(true);
    selectedGoalIdRef.current = goalId;
  };

  const deleteGoalHandler = () => {
    setStartedDeleting(false);
    coursesCtx.deleteGoal(selectedCourseId, selectedGoalIdRef.current!);
    setToastMessage("Deleted Goal!");
  };

  const startEditGoalHandler = (goalId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const goal = selectedCourse?.goals.find((g) => g.id === goalId);
    if (!goal) {
      return;
    }
    setIsEditing(true);
    setSelectedGoal(goal);
    slidingOptionsRef.current?.closeOpened();
  };

  const cancelEditGoalHandler = () => {
    setIsEditing(false);
    setSelectedGoal({ id: "", text: "" });
  };

  const startAddGoalHandler = () => {
    setIsEditing(true);
    setSelectedGoal({ id: "", text: "" });
  };

  const saveGoalHandler = (text: string) => {
    if (selectedGoal.id === "") {
      coursesCtx.addGoal(selectedCourseId, text);
    } else {
      coursesCtx.updateGoal(selectedCourseId, selectedGoal.id, text);
    }

    setIsEditing(false);
  };

  let content = <h2 className='ion-text-center'>No Goals Found!</h2>;

  if (!selectedCourse) {
    content = <h2>No Course Found!</h2>;
  }

  if (selectedCourse && selectedCourse.goals.length > 0) {
    content = (
      <IonList>
        {selectedCourse.goals.map((goal) => (
          <EditableGoalItem
            key={goal.id}
            slidingRef={slidingOptionsRef}
            text={goal.text}
            onStartDelete={startDeletGoalHandler.bind(null, goal.id)}
            onStartEdit={startEditGoalHandler.bind(null, goal.id)}
          />
        ))}
      </IonList>
    );
  }

  return (
    <React.Fragment>
      <EditModal
        show={isEditing}
        onCancel={cancelEditGoalHandler}
        editedGoal={selectedGoal}
        onSave={saveGoalHandler}
      />
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
      />
      <IonAlert
        isOpen={startedDeleting}
        header='Are you Sure?'
        message='Do you want to delete the goal? This cannot be undone.'
        buttons={[
          {
            text: "No",
            role: "cancel",
            handler: () => {
              setStartedDeleting(false);
            },
          },
          { text: "Yes", handler: deleteGoalHandler },
        ]}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonBackButton defaultHref='/Courses' />
            </IonButtons>
            <IonTitle>
              {selectedCourse ? selectedCourse.title : "no course found?"}
            </IonTitle>

            {!isPlatform("android") && (
              <IonButtons slot='end'>
                <IonButton onClick={startAddGoalHandler}>
                  <IonIcon slot='icon-only' icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {content}
          {isPlatform("android") && (
            <IonFab
              horizontal='center'
              className=''
              vertical='bottom'
              slot='fixed'>
              <IonFabButton onClick={startAddGoalHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default CourseGoals;
