
import React, { Component } from 'react';


class Card extends Component {
    render(){
    return(
<div className="card" style={{width: '18rem', textAlign: 'center', margin: '30px'}}>
    {/* in questo script si mettono i i prop contenuti in card dove passi gli oggetti (img, titolo, descrizione) */}
  <img src={this.props.card.img} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{this.props.card.titolo}</h5>
            <p className="card-text">{this.props.card.descrizione}</p>
        {/* in questo caso usiamo l'arrow function in quanto tra parentesi ci sono gli argomenti (peculiarita' di react*/}
            <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Elimina</button>
            <button onClick={() => this.props.onIncrement(this.props.card.id)} className="btn btn-outline-primary">
            Aggiungi <span className='badge badge-light'>{this.props.card.quantity}</span></button>
    </div>
</div>
)
}
}
export default Card;