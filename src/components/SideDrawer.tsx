import React from 'react';
import {IonMenu, IonIcon, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,  IonMenuToggle  } from '@ionic/react'
import {options, list} from 'ionicons/icons'

const SideDrawer:React.FC = () => {

    return(
<IonMenu contentId='main'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem button routerLink='/filter' routerDirection="none">
                <IonIcon slot='start' icon={options}></IonIcon>
                <IonLabel>Filter</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem button routerLink='/courses/AllGoals' routerDirection="none">
                <IonIcon slot='start' icon={list}></IonIcon>
                <IonLabel>All Goals</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    )
};

export default SideDrawer;