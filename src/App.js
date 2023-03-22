import React from 'react';  // make sure the right modules have been imported

const App = () => {
  const firstMessage = 'Hi! I am XXXXXX'; // change to reflect your name

  const [message, setMessage] = useState();
  const [choice, setChoice] = useState(1);  // start with : Who am I?

  // insert your useEffect hook(s) below this line
  useEffect(() => {
    // code here
  }, []);

  const onChangeHandler = () => {
    // code here
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{message}</h1>

      <label>Get to know more about me: </label>
      <select name="msg" id="msg-select" onChange={onChangeHandler}>
        <option value="1">Who am I?</option>
        <option value="2">Where am I?</option>
        <option value="3">What do I know?</option>
        <option value="4">What is my pet's name?</option>
      </select>
    </div>
  );
}

export default App;
