import React, { useRef, useState } from "react";
import {
  IonContent,
  IonButton,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
  IonText,
} from "@ionic/react";

const AddCourseModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  onSave: (title: string, date: Date) => void;
}> = (props) => {
  const titleRef = useRef<HTMLIonInputElement>(null);
  const dateRef = useRef<HTMLIonDatetimeElement>(null);

  const [error, setError] = useState("");

  const saveHandler = () => {
    const enteredTitle = titleRef.current!.value;
    const selectedDate = dateRef.current!.value;

    if (
      !enteredTitle ||
      !selectedDate ||
      enteredTitle.toString().trim().length === 0 ||
      selectedDate.trim().length === 0
    ) {
      setError("Please enter a valid title and select a valid date.");
      return;
    }
    setError("");
    props.onSave(enteredTitle.toString(), new Date(selectedDate))
  };

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Course</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='floating'>Course Title</IonLabel>
                <IonInput type='text' ref={titleRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>Enrolment Date</IonLabel>
                <IonDatetime displayFormat='MM DD YY' ref={dateRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          {error && (
            <IonRow className='ion-text-center'>
              <IonCol>
                <IonText color='danger'>
                  <p>{error}</p>
                </IonText>
              </IonCol>
            </IonRow>
          )}
          <IonRow className='ion-text-center'>
            <IonCol>
              <IonButton color='dark' fill='clear' onClick={props.onCancel}>
                Cancel
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color='tertiary' expand='block' onClick={saveHandler}>
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default AddCourseModal;
