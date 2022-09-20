import React, {useState} from 'react';
import './Tab3.css';
import {IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage,
  IonTitle, IonToolbar, IonIcon,IonItem, IonInput} from '@ionic/react';
import {bag, home, send, mail,logoInstagram,logoWhatsapp, call} from 'ionicons/icons';



function Tab3() {

let [text, setName] = useState<string>();
let [text2, setEmail] = useState<string>();
let [number, setPhone] = useState<number>();

  return (
    <>

      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color = "primary">
            <IonTitle color = "light">Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonButton expand="block" color = "light" href='Tab1'>
            <IonIcon slot="start" icon={home}></IonIcon>
            Nossa História
          </IonButton>
          <IonButton expand="block" color = "light" href='Tab2'>
            <IonIcon slot="start" icon={bag}></IonIcon>
            Camisas
          </IonButton>
            <IonButton expand="block" color = "light" href='Tab3'>
            <IonIcon slot="start" icon={send}></IonIcon>
            Fale Conosco
          </IonButton>
        </IonContent>
        </IonMenu>

    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar color = "primary">
         <IonButtons>
          <IonMenuButton>
          </IonMenuButton>
         </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonTitle>Fale Conosco</IonTitle>
        </IonToolbar>
        <IonButton expand="block" color = "light" href='mailto:lojinhadapanela@gmail.com'>
          <IonIcon slot="start" icon={mail}></IonIcon>
          lojinhadapanela@gmail.com
        </IonButton>

        <IonButton expand="block" color = "light" href='http://www.instagram.com/lojinhadapanela/'>
         <IonIcon slot="start" icon={logoInstagram}></IonIcon>
         lojinhadapanela
        </IonButton>

         <IonButton expand="block" color = "light" >
         <IonIcon slot="start" icon={logoWhatsapp}></IonIcon>
         <IonIcon slot="start" icon={call}></IonIcon>
         (43) 99681-7121
        </IonButton>
        <IonToolbar>
          <IonTitle>Receba as novidades</IonTitle>
          <IonItem>
            <IonInput value={text} placeholder="Nome Completo" onIonChange={e => setName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput value={text2} placeholder="E-mail" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="number" value={number} placeholder="Telefone" onIonChange={e => setPhone(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>
          <IonButton expand="block" color = "light" href='mailto:lojinhadapanela@gmail.com'>
            <IonIcon slot="start" icon={send}></IonIcon>
            Enviar
          </IonButton>
        </IonToolbar>
      </IonHeader>
    </IonPage>
    )
  </>
  );
};

export default Tab3;
