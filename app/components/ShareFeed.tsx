import React, {useState, useEffect} from 'react'
export default function ShareFeed() {

  const [input, setInput] = useState('');

  console.log(input)

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <h1>Share with friends</h1>

      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} 
      />
    </div>
  )
}
