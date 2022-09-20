import './Tab6.css'
import {IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage,
  IonTitle, IonToolbar, IonIcon, } from '@ionic/react';
import { IonList, IonItem, IonImg, IonLabel } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, } from '@ionic/react';
import { IonCheckbox,  } from '@ionic/react';
import {bag, home, send, card, cash} from 'ionicons/icons';



 
  function Tab6() {

    type Item = {
      src: string;
      text: string;
    }
    
    const sp: Item[] = [{ src: 'https://static.netshoes.com.br/produtos/camisa-sao-paulo-outubro-rosa-2122-sn-torcedor-adidas-masculina/38/3ZP-2800-338/3ZP-2800-338_zoom1.jpg?ts=1634782058',  text: 'São Paulo FC Outubro Rosa 2021' }]

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
                  <IonTitle >São Paulo FC Outubro Rosa 2021</IonTitle>
                </IonToolbar>
                <IonList>
                    {sp.map((image, i) => (
                    <IonImg src={image.src} />
                    ))}
                  </IonList>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>R$ 140,00</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent >
                    O mês de Outubro se consagra como o mês da prevenção do câncer de mama. Com o intuito de dar visibilidade a causa,
                    o São Paulo FC lança a sua camisa rosa, aumentando a consciêntização e comunicando a sua torcida sobre a importância
                    dos exames. Parte da renda da campanha será revertida para o Hospital São Camilo Oncologia
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
  export default Tab6;
  