import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    componentDidMount(){
        var google = window.google || {};
        // google.maps = google.maps || {};

        Promise.resolve(google.maps).then(()=>{

        }).catch(reason=>console.log(reason))
        console.log(google)
        // window.initMap = function() {
        //     console.log('initMap');
        //     // setTimeout(`
        var arca = {lat: 40.049431, lng: 116.293355};
        var map = new google.maps.Map(document.getElementById('root'), {
            zoom: 8,
            center: arca,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
        });
        var contentString = `<div>Arca building</div>`;
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var marker = new google.maps.Marker({
            position: arca,
            map: map
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        var layer = new google.maps.FusionTablesLayer({
            query: {
                select: 'location',
                from: '1uedVpxIny1PIZ5SFHp4WxMq8GKAsrob-GVP4rw'
                // from: '1rYcLnS5JsQ96QnyaaJemSjFM15rd8Z4kkCDaEGJO'
            },
            styles: [{
                polygonOptions: {
                    fillColor: '#00FF00',
                    fillOpacity: 0.3
                }
            }, {
                where: 'birds > 300',
                polygonOptions: {
                    fillColor: '#0000FF'
                }
            }, {
                where: 'population > 5',
                polygonOptions: {
                    fillOpacity: 1.0
                }
            }]
        });
        layer.setMap(map);
        //     // `,1000)
        // }
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
