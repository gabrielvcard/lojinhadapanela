
import {IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage,
  IonTitle, IonToolbar, IonIcon, } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, } from '@ionic/react';
import {bag, home, send} from 'ionicons/icons';





function Tab1() {

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
          <IonMenuButton></IonMenuButton>
         </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color = "medium">
        <IonToolbar color = "light">
          <IonTitle >A Lojinha da Panela</IonTitle>
        </IonToolbar>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Como surgimos</IonCardTitle>
              </IonCardHeader>
              <IonCardContent >
                A Lojinha da Panela surgiu no final de 2019, como forma de profissionalizar a
                venda de camisas de times de futebol do Brasil e do mundo, utilizando inicialmente as redes sociais.
              </IonCardContent>
            </IonCard>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Nosso propósito</IonCardTitle>
              </IonCardHeader>
              <IonCardContent >
                Sempre acreditamos no futebol como uma forma de entendermos o mundo através de um olhar quase que filosófico, por isso sempre
                defendemos o futebol de uma maneira popular, vivenciado e transmitido pelo povo, que por muitas vezes não tem acesso a uma camisa
                do seu clube de coração. Por isso, pensamos em construir uma loja que desse a oportunidade de voce ter a sua camisa 
                por um preço acessível.
              </IonCardContent>
            </IonCard>
      </IonContent>
    </IonPage>
    </>
  
  );
}
export default Tab1;
