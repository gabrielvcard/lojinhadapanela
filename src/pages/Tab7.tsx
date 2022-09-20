import './Tab7.css'
import {IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage,
  IonTitle, IonToolbar, IonIcon,} from '@ionic/react';
import { IonCard, IonCardHeader,  IonCardTitle, IonCardContent, } from '@ionic/react';
import {bag, home, send, card} from 'ionicons/icons';

function Tab7() {
    return (
      <>
  
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar color = "primary">
              <IonTitle color = "light">Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          
          <IonContent>
          <IonButton expand="block" color = "dark" href='Tab1'>
            <IonIcon slot="start" icon={home}></IonIcon>
            Nossa História
          </IonButton>
  
          <IonButton expand="block" color = "dark" href='Tab2'>
           <IonIcon slot="start" icon={bag}></IonIcon>
           Camisas
          </IonButton>
  
           <IonButton expand="block" color = "dark" href='Tab3'>
           <IonIcon slot="start" icon={send}></IonIcon>
           Fale Conosco
          </IonButton>
          
          </IonContent>
          </IonMenu>
  
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar color = "primary">
           <IonButtons>
            <IonMenuButton></IonMenuButton>
           </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent color = "medium">
                <IonToolbar color = "light">
                  <IonTitle >Finalizar Pagamento</IonTitle>
                </IonToolbar>
              <IonContent>     

                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Obrigado</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent >
                    A Lojinha da Panela agradece a preferencia. Você irá receber um email de confirmação da compra
                    no email cadastrado (xxxxxxxx@xxxxxxxx.com)
                  </IonCardContent>
                </IonCard>
              </IonContent>
                <IonButton expand="block" color = "primary" href='Tab7'>
                   <IonIcon slot="start" icon={card}></IonIcon>
                    Confirmar
                </IonButton>
        </IonContent>
      </IonPage>
      </>
    );
  }
  export default Tab7;
  