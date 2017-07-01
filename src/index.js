import _ from 'lodash';

function App() {
  const coord = { lat: 13.7710663, lon: 100.567965 };
  const place = {
    ...coord,
    title: 'The Street Ratchada',
    series: _.range(0, 10),
  };

  const elem = document.createElement('div');
  elem.innerHTML = JSON.stringify(place);
  return elem;
}

document.body.appendChild(App());
