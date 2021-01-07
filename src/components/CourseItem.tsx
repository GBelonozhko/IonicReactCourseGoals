import React from 'react';
import {IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonCardContent, } from '@ionic/react'

const CourseItem:React.FC<{title:string; enrollmentDate:Date; id:string;}> = props => {

    return(
        <IonCard>
        <IonCardHeader>
          <IonCardTitle>{props.title}</IonCardTitle>
          <IonCardSubtitle>
            Enrolled on{" "}
            {props.enrollmentDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent className='ion-text-right'>
          <IonButton
            fill='clear'
            color='secondary'
            routerLink={`/courses/${props.id}`}>
            View Course Goals
          </IonButton>
        </IonCardContent>
      </IonCard>
    );
}

export default CourseItem;