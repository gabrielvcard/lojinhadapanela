
import './Tab5.css'
import {IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage,
  IonTitle, IonToolbar, IonIcon,} from '@ionic/react';
import { IonList, IonItem, IonImg, IonLabel } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, } from '@ionic/react';
import { IonCheckbox} from '@ionic/react';
import {bag, home, send, card, cash} from 'ionicons/icons';



 
function Tab5() {
    type Item = {
      src: string;
      text: string;
    }
    
    const azul: Item[] = [{ src: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/134/774/products/camisa-reserva-da-selecao-brasileira-2022-nike-away-kit-11-b3bb0773f9b500d9d616607465232578-640-0.jpg',text: 'Seleção Brasileira Away Copa 2022' }]

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
                  <IonTitle >Seleção Brasileira Away Copa 2022</IonTitle>
                </IonToolbar>
                <IonList>
                    {azul.map((image, i) => (
                    <IonImg src={image.src} />
                    ))}
                  </IonList>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>R$ 160,00</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent >
                  A Coleção da Seleção Brasileira de 2022 combina a icônica estampa da onça-pintada com design inovador que mantém 
                  seu corpo seco mesmo no auge da empolgação. Uma homenagem ao Brasil e ao seu povo, esta coleção foi feita para
                  mostrar a sua garra.
                  </IonCardContent>
                </IonCard>
  
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Escolha o tamanho</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent >
                    <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>P</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>M</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>G</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonLabel>GG</IonLabel>
                    </IonItem>
                  </IonCardContent>
                </IonCard>

                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Forma de Pagamento</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent >
                    <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonIcon slot="start" icon={card}></IonIcon>
                        <IonLabel>Crédito</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonIcon slot="start" icon={card}></IonIcon>
                        <IonLabel>Débito</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonIcon slot="start" icon={cash}></IonIcon>
                        <IonLabel>Dinheiro</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonCheckbox slot="start"></IonCheckbox>
                        <IonIcon slot="start" icon={cash}></IonIcon>   
                        <IonLabel>PIX</IonLabel>
                    </IonItem>
                  </IonCardContent>
                </IonCard>
                <IonButton expand="block" color = "primary" href='Tab7'>
                   <IonIcon slot="start" icon={card}></IonIcon>
                    Finzalizar Pedido
                </IonButton>
        </IonContent>
      </IonPage>
      </>
    
    );
  }
export default Tab5;
  