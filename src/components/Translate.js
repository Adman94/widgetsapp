import React, { useState } from 'react';
import Dropdown from './Dropdown';
// AIzaSyA8x0timu5hH_8AO3OArRFCKkflLmGAiyo

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
]

const Translate = () => {
  const [language, setlanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input type="text" onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setlanguage}
        options={options}
      />
    </div>
  )
}

export default Translate;