import logo from './logo.svg';
import './App.css';
import { GraphCanvas } from 'reagraph';

function App() {
  return (
    <GraphCanvas
    nodes={[
      {
        id: '1',
        label: '1'
      },
      {
        id: '2',
        label: '2'
      }
    ]}
    edges={[
      {
        id: '1->2',
        source: 'n-1',
        target: 'n-2',
        label: 'Edge 1-2'
      }
    ]}
  />
  );
}

export default App;
