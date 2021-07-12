import './App.css';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React',
    content: 'React is a front end JavaScript framework'
  },
  {
    title: 'Why use React',
    content: 'React is a favorite JS Librarty among engineers'
  }, {
    title: 'How do you use React',
    content: 'You use React by creating components'
  }
]

function App() {
  return (
    <div>
      <br />
      <Accordion items={items} />
    </div>
  );
}

export default App;
