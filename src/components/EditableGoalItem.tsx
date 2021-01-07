import React from "react";
import {
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { trash, create } from "ionicons/icons";

const EditableGoalItem: React.FC<{
  slidingRef: React.Ref<HTMLIonItemSlidingElement>;
  onStartDelete: () => void;
  onStartEdit: (event:React.MouseEvent) => void;
  text:string;
}> = (props) => {
  return (
    <IonItemSliding ref={props.slidingRef}>
      <IonItemOptions side='start'>
        <IonItemOption onClick={props.onStartDelete} color='danger'>
          <IonIcon slot='icon-only' icon={trash} />
        </IonItemOption>
      </IonItemOptions>
      <IonItemOptions side='end'>
        <IonItemOption color='tertiary'>
          <IonIcon
            slot='icon-only'
            onClick={props.onStartEdit}
            icon={create}
          />
        </IonItemOption>
      </IonItemOptions>
      <IonItem lines='full'>
        <IonLabel>{props.text}</IonLabel>
      </IonItem>
    </IonItemSliding>
  );
};

export default EditableGoalItem;
