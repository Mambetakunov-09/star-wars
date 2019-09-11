import React,{Component} from 'react';
import Header from '../header'
import RandomPlanet from '../random-planet'
import PersonDetails from '../person-details'
import Itemlist from '../item-list'
import './app.css';

class App extends Component {
    state = {
        showRandomPlanet: true
    };

    toggleRandomPlanet = () =>{
        this.setState({showRandomPlanet: !this.state.showRandomPlanet})

    };

    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;


        return (
            <div>
                <Header/>
                {planet}
                <button className='btn' onClick={this.toggleRandomPlanet}> click </button>
                <div className='row'>
                    <div className='col-md-6'>
                        <Itemlist/>
                    </div>
                    <div className='col-md-6'>
                        <PersonDetails/>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;

// export default class App extends Component{
//
//
// swapi-service = new DummySwapiService();
// state = {
//     showRandomplanet: true
// };
//
// toggleRandomPlanet = () =>{
//     this.setState({showRandomPlanet: !this.state.showRandomplanet})
//
// };
// render() {
//     const planet = this.state.showRandomplanet ?
//         <RandomPlanet/> :
//         null;
// }

// const App = () =>{
//     fetch('https://www.cbr-xml-daily.ru/daily json.js')
//         .then((response)=>{
//             return response.json()
//         })
//         .then((result)=>{
//             console.log(result)
//         })
// };