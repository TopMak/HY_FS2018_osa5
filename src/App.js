import React from 'react'

const Otsikko = (props) => {
  return (
    <div>
      <h1>Unicafe palaute</h1>
    </div>
  )
}

//Käytetään destruktointia näissä!
const Button = ({nappiFunktio, teksti}) => {
  return (
    <button onClick={nappiFunktio}>{teksti}</button>
  )
}


const Statistics = ({aanet}) => {
  return (
<table>
  <tbody>
    <tr>
      <td>Hyvä: </td>
      <td>{aanet.hyva}</td>
    </tr>
    <tr>
      <td>Neutraali: </td>
      <td>{aanet.neutraali}</td>
    </tr>
    <tr>
      <td>Huono: </td>
      <td>{aanet.huono}</td>
    </tr>
  </tbody>
</table>
  )
}

const Statistic = ({statsit}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Keskiarvo: </td><td>{statsit.keskiarvo.toFixed(1)}</td>
        </tr>
        <tr>
          <td>Hyviä: </td><td>{statsit.hyvaProsentti.toFixed(1)} %</td>
        </tr>
      </tbody>
    </table>
  )
}


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      aanetSumma:0,
      keskiarvo:0,
      hyvaProsentti: 0
    }
  }

annaPalaute = (laatu) => {
    return() => {
      console.log("Annettu: ", laatu);
      this.setState({
        [laatu]:this.state[laatu] + 1,
        aanetSumma: this.state.aanetSumma + 1
      }, () => {
        this.laskeKeskiarvo()
      })
    }
  }

  laskeKeskiarvo() {
    let ka = (this.state.hyva*1 + this.state.huono*-1) / this.state.aanetSumma;
    let hp = 0;
    if(this.state.hyva !== 0){
      hp = this.state.hyva / this.state.aanetSumma *100
      //console.log("hp: ", hp);
    }
    //Lasketaan myös hyvaProsentti tässä
    this.setState({
      keskiarvo: ka,
      hyvaProsentti: hp
    })
  }

  render(){
      console.log("hyvä", this.state.hyva)
      console.log("neutraali", this.state.neutraali)
      console.log("huono", this.state.huono)
      console.log("aanetSumma", this.state.aanetSumma)
      console.log("keskiarvo", this.state.keskiarvo)
      console.log("hyvaProsentti", this.state.hyvaProsentti)

      if (this.state.aanetSumma === 0) {
        return (
          <div>
          <Otsikko />
          <Button nappiFunktio={this.annaPalaute("hyva")} teksti="Hyvä" />
          <Button nappiFunktio={this.annaPalaute("neutraali")} teksti="Neutraali" />
          <Button nappiFunktio={this.annaPalaute("huono")} teksti="Huono" />
          <h3>Statistiikka:</h3>
          <p> Ei yhtään palautetta vielä </p>
          </div>
        )
      }

    return (
      <div>
      <Otsikko />
      <Button nappiFunktio={this.annaPalaute("hyva")} teksti="Hyvä" />
      <Button nappiFunktio={this.annaPalaute("neutraali")} teksti="Neutraali" />
      <Button nappiFunktio={this.annaPalaute("huono")} teksti="Huono" />
      <h3>Statistiikka:</h3>
      <Statistics aanet={this.state} />
      <Statistic statsit={this.state} />
      </div>
    )
  }
}

export default App
