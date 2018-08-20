import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux'
import counterReducer from './counterReducer'

const store = createStore(counterReducer)

const Statistics = ({aanet, statsit}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Hyvä: </td>
          <td>{aanet.good}</td>
        </tr>
        <tr>
          <td>Neutraali: </td>
          <td>{aanet.ok}</td>
        </tr>
        <tr>
          <td>Huono: </td>
          <td>{aanet.bad}</td>
        </tr>
        <tr>
          <td>Keskiarvo: </td>
          <td>{statsit.ka.toFixed(1)}</td>
        </tr>
        <tr>
          <td>Hyviä: </td>
          <td>{statsit.hp.toFixed(1)} %</td>
        </tr>
      </tbody>
    </table>
  )
}

const Buttons = () => {
  return (
    <div>
      <button onClick={e => store.dispatch({ type: 'GOOD'})}>Hyvä</button>
      <button onClick={e => store.dispatch({ type: 'OK'})}>Neutraali</button>
      <button onClick={e => store.dispatch({ type: 'BAD'})}>Huono</button>
    </div>
  )
}

class App extends React.Component {

  laskeKaHp = (state) => {
    const aanetSumma = state.good + state.bad + state.ok
    let ka = (state.good*1 + state.bad*-1) / aanetSumma;
    let hp = 0;
    if(state.good !== 0){
      hp = state.good / aanetSumma * 100
    }
    // console.log("ka: ", ka, "hp: ", hp);
    return {"summa": aanetSumma, "ka": ka, "hp": hp }
  }

  render(){

    const currentState = store.getState()
    const tulos = this.laskeKaHp(currentState)

    if (tulos.summa === 0) {
      return (
        <div>
        <h1>Unicafe palaute</h1>
        <Buttons />
        <h3>Statistiikka:</h3>
        <p> Ei yhtään palautetta vielä </p>
        </div>
      )
    }

    return (
      <div>
      <h1>Unicafe palaute</h1>
      <Buttons />
      <h3>Statistiikka:</h3>
      <Statistics aanet={currentState} statsit={tulos} />
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}
render()
store.subscribe(render)
