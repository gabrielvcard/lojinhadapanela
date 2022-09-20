import {IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage,
  IonTitle, IonToolbar, IonIcon, } from '@ionic/react';
import { IonList, IonImg } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, } from '@ionic/react';
import {bag, home, send, card} from 'ionicons/icons';



function Tab2() {
  
  type Item = {
    src: string;
    text: string;
  }
  
  const amarela: Item[] = [{ src: 'https://imgnike-a.akamaihd.net/1300x1300/0226390L.jpg',text: 'Seleção Brasileira Home Copa 2022' }]
  const azul: Item[] = [{ src: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/134/774/products/camisa-reserva-da-selecao-brasileira-2022-nike-away-kit-11-b3bb0773f9b500d9d616607465232578-640-0.jpg',text: 'Seleção Brasileira Away Copa 2022' }]
  const sp: Item[] = [{ src: 'https://static.netshoes.com.br/produtos/camisa-sao-paulo-outubro-rosa-2122-sn-torcedor-adidas-masculina/38/3ZP-2800-338/3ZP-2800-338_zoom1.jpg?ts=1634782058',text: 'São Paulo FC Outubro Rosa 2021' }]
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
                <IonTitle >Nosso catálogo</IonTitle>
              </IonToolbar>
              <IonCard>
                <IonCardHeader color = "medium">
                  <IonList>
                    {amarela.map((image, i) => (
                    <IonImg src={image.src} />
                    ))}
                  </IonList>
                  <IonCardTitle>Seleção Brasileira Home Copa 2022</IonCardTitle>
                  <IonCardSubtitle>R$ 160,00</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent >
                  A Coleção da Seleção Brasileira de 2022 combina a icônica estampa da onça-pintada com design inovador que mantém 
                  seu corpo seco mesmo no auge da empolgação. Uma homenagem ao Brasil e ao seu povo, esta coleção foi feita para
                  mostrar a sua garra.
                  <IonButton expand="block" color = "primary" href='Tab4'>
                   <IonIcon slot="start" icon={card}></IonIcon>
                    COMPRAR
                  </IonButton>
                </IonCardContent>
                
              </IonCard>
              <IonCard>
                <IonCardHeader color = "medium">
                  <IonList>
                    {azul.map((image, i) => (
                    <IonImg src={image.src} />
                    ))}
                  </IonList>
                  <IonCardTitle>Seleção Brasileira Away Copa 2022</IonCardTitle>
                  <IonCardSubtitle>R$ 160,00</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent color ="dark">
                  A Coleção da Seleção Brasileira de 2022 combina a icônica estampa da onça-pintada com design inovador que mantém 
                  seu corpo seco mesmo no auge da empolgação. Uma homenagem ao Brasil e ao seu povo, esta coleção foi feita para
                  mostrar a sua garra.
                <IonButton expand="block" color = "primary" href='Tab5'>
                  <IonIcon slot="start" icon={card}></IonIcon>
                  COMPRAR
                </IonButton>
                </IonCardContent>
              </IonCard>

              <IonCard>
                <IonCardHeader color = "medium">
                  <IonList>
                    {sp.map((image, i) => (
                    <IonImg src={image.src} />
                    ))}
                  </IonList>
                  <IonCardTitle>São Paulo FC Outubro Rosa 2021</IonCardTitle>
                  <IonCardSubtitle>R$ 140,00</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent >
                  O mês de Outubro se consagra como o mês da prevenção do câncer de mama. Com o intuito de dar visibilidade a causa,
                  o São Paulo FC lança a sua camisa rosa, aumentando a consciêntização e comunicando a sua torcida sobre a importância
                  dos exames. Parte da renda da campanha será revertida para o Hospital São Camilo Oncologia
                <IonButton expand="block" color = "primary" href='Tab6'>
                  <IonIcon slot="start" icon={card}></IonIcon>
                  COMPRAR
                </IonButton>
                </IonCardContent>
              </IonCard>
      </IonContent>
    </IonPage>
    </>
  );
}
export default Tab2;
