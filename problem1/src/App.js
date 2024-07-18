import {useState} from 'react';
import axios from 'axios';


function App() {
  return (
    const [ids, setIds] = useState('');
    const [average, setAverage] = useState(null);
    const [error, setError] = useState(null); 

    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:5000/numbers', {ids: ids});
        setAverage(response.data.average);
      } catch (error) {
        setError(error.response.data.error);
      }
    }
    <div>
      <h1>Problem 1</h1>
      <input type="text" value={ids}
      onChange={(e) => setIds(e.target.value)} 
      placeholder='Enter numbers'/>
      <button onClick={fetchData}>Calculate</button>
      {average !== null && <h2>Average: {average}</h2>}
      {error && <h2>{error}</h2>}
    </div>
  );
}

export default App;
