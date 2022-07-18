import React, { Component } from 'react';


import Navbar from './components/navbar';
import Card from './components/card';


import cuccioli from './images/cuccioli.jpg';
import curioso from './images/curioso.jpg';
import europeo from './images/europeo.jpg';
import nero from './images/nero.jpg';
import rosso from './images/rosso.jpg';
import scoperta from './images/scoperta.jpg';
import grigio from './images/grigio.jpg';
import blanche from './images/blanche.webp';
import zampa from './images/zampa.jpg';


class App extends Component {
  state = {
    cards: [
      {id: 0, titolo: "Gatto spaziale", descrizione: "meraviglioso", img: scoperta, quantity: 0 },
      {id: 1, titolo: "Gatto rosso", descrizione: "brutto carattere", img: rosso, quantity: 0},
      {id: 2, titolo: "Gatto nero", descrizione: "volevo un gatto nero", img: nero, quantity: 0},
      {id: 3, titolo: "Gatto europeo", descrizione: "leila", img: europeo,  quantity: 0},
      {id: 4, titolo: "Gatto curioso", descrizione: "oddioooooo", img: curioso, quantity: 0},
      {id: 5, titolo: "cuccioli meravigliosi", descrizione: "troppo pucciosi", img: cuccioli, quantity: 0},
      {id: 6, titolo: "grigio", descrizione: "elegante", img: grigio, quantity: 0},
      {id: 7, titolo: "bianco sfondo rosa", descrizione: "amorevole", img: blanche, quantity: 0}
      
    ]
  }
//  nel corpo della classe si definisco le funzioni prima del render es: elimina( con il button)
//  lo state in react si aggiorna solo con setState es this.setState()
// Per convenzione si usa in React chiamare le funzioni con handle+nome evento

  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => cardId !== cardId)
    this.setState({ cards });
  } 
  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] ={ ...cards };
    cards[id].quantity++;
    this.setState({ cards });
  }

  render(){
  return (
  <>
    <Navbar />
      <div class='container-fluid'>
        <h1>Ecco a voi dei simpatici micetti</h1>
        
        <hr/>
        <div class="row">


          {/* preso in riferimento la lista cards contenuta nello state del componente attuale, per ogni card creato un componente card e assegnato ai suoi prop, i relativi valori dell'oggetto card*/}

          {/* {this.state.cards.map(card =>(
            <Card
            key={card.id}
            titolo={card.titolo}
            descrizione={card.descrizione}
            img={card.img} />
            ))
          } */}

           {/* con questo invece di passare al componente, le chiavi una per una, si passa l'intero oggetto card, si crea 
           una nuova prop chiamata card e aprendo le graffe gli passi l'oggetto omonimo*/}

          {this.state.cards.map(card =>(
            <Card
            key={card.id}
            // con questo prop si richiama la funzione dal componente figlio al componente padre
            onDelete={this.handleDelete}   
            onIncrement={this.handleIncrement} 
            card={card}/>
            ))
          }
        </div>
      </div>
<img src={zampa} style={{AlignItems:'flex-end'}} />
  </>
  )
}
}
export default App;
