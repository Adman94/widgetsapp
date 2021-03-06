import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import { useState } from 'react';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';

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

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  }
]

// const showAccordion = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items} />
//   }
// }

// const showList = () => {
//   if (window.location.pathname === '/list') {
//     return <Search />
//   }
// }

const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown />
  }
}

// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate />
//   }
// }


function App() {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      {/* <br /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
       */}
      <Header />

      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        {showDropdown ?
          <Dropdown
            label="Select a Color"
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          /> : null
        }
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
