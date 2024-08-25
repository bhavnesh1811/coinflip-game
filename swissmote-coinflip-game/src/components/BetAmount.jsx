import React from 'react'

const BetAmount = () => {
    const [amount, setAmount] = useState('');
    const [side, setSide] = useState('heads');
    const [result, setResult] = useState(null);
    
    // UI for selecting bet amount and side
    return (
      <div>
        <input
          type="number"
          placeholder="Enter amount in SOL"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={side} onChange={(e) => setSide(e.target.value)}>
          <option value="heads">Heads</option>
          <option value="tails">Tails</option>
        </select>
        {/* ... */}
      </div>
    );
    
}

export default BetAmount