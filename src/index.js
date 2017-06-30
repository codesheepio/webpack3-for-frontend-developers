import _ from 'lodash';

function App() {
  const elem = document.createElement('div');
  elem.innerHTML = _.range(0, 10).join(', ');
  return elem;
}

document.body.appendChild(App());
