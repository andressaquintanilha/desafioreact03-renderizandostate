import React, {Component} from 'react'
import morango from "./morango.jpeg"

//Crie uma class component 
// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas. 
class Desafio03 extends Component {
  state = {
    nome: "Andressa", 
    idade: 30,
    comida: "Lasanha",
    musicas: ["Facas – Diego & Victor Hugo part. Bruno & Marrone", "Arranhão – Henrique & Juliano", "A Maior Saudade - Henrique e Juliano","A Queda - Gloria Groove"]
  }

  render(){
    return (
      <div>
        <h1>Nome: {this.state.nome}</h1>
        <h2>Idade: {this.state.idade}</h2>
        <h3>Comida: {this.state.comida}</h3>
        <ul>
          <li>Música 01: {this.state.musicas[0]}</li>
          <li>Música 02: {this.state.musicas[1]}</li>
          <li>Música 03: {this.state.musicas[2]}</li>
        </ul>
        <img src={morango}/>
      </div>
    )
  }
}

export default Desafio03