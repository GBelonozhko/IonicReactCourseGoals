import React, { useRef, useState } from "react";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonText,
} from "@ionic/react";

const EditModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  editedGoal: { id: string; text: string } | undefined | null;
  onSave: (goalText: string) => void;
}> = (props) => {
  const [error, seterror] = useState('')
  
  const textRef = useRef<HTMLIonInputElement>(null);

  const saveHandler =() => {
    const enteredText = textRef.current!.value;

    if(!enteredText || enteredText.toString().trim().length === 0) {
      seterror('Please enter a valid text!')
    }

    props.onSave(enteredText!.toString())
  }

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {props.editedGoal?.id === "" ? "Add" : "Edit"} Goal
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='floating'>Goal Text</IonLabel>
                <IonInput
                  type='text'
                  value={props.editedGoal?.text}
                  ref={textRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          {error && 
          <IonRow>
            <IonCol>
              <IonText color="danger">
                {error}
              </IonText>
            </IonCol>
          </IonRow>
          }
          <IonRow className='ion-text-center'>
            <IonCol>
              <IonButton fill='clear' color='dark' onClick={props.onCancel}>
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

export default EditModal;
