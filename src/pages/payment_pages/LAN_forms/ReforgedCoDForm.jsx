import React, { useState } from 'react';
import axios from 'axios';

function ReforgedCoDForm() {
  const [form, setForm] = useState({ 
    team_name: '', 
    twitter: '',
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    coach: '',
    pool_time: '',

});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
        console.log(`FORM: ${form.team_name}`)
      const res = await axios.post('https://website-backend-5m32.onrender.com/usyncApp/lans', form, {
        headers: {
            'Content-Type': 'application/json',
        }});
        
      setTimeout(() => window.location.href = "/checkout", 2000);
    } catch (err) {
      alert('Error submitting form please try again. If this continues to happen please contact us');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Submit Your Team Info</h1>
      <form onSubmit={handleSubmit}>
        <label for="team_name">Team Name</label><br />
        <input
          name="team_name"
          id="team_name"
          required
          value={form.team_name}
          onChange={handleChange}
        /><br />

        <label for="twitter">Team/Org/Twitter @'s</label><br />
        <input
          name="twitter"
          id="twitter"
          required
          value={form.twitter}
          onChange={handleChange}
        /><br />
        
        <label for="player1">Player 1 Activision ID + Twitter @</label><br />
        <input
          name="player1"
          id="player1"
          required
          value={form.player1}
          onChange={handleChange}
        /><br />
        
        <label for="player2">Player 2 Activision ID + Twitter @</label><br />
        <input
          name="player2"
          id="player2"
          required
          value={form.player2}
          onChange={handleChange}
        /><br />
        
        <label for="player3">Player 3 Activision ID + Twitter @</label><br />
        <input
          name="player3"
          id="player3"
          required
          value={form.player3}
          onChange={handleChange}
        /><br />
        
        <label for="player4">Player 4 Activision ID + Twitter @</label><br />
        <input
          name="player4"
          id="player4"
          required
          value={form.player4}
          onChange={handleChange}
        /><br />
        
        <label for="coach">Coach (if applicable) + Twitter @</label><br />
        <input
          name="coach"
          id="coach"
          value={form.coach}
          onChange={handleChange}
        /><br />
        
        <label for="pool_time">
            When Would You Prefer to Play Pools
            <br />
            (Morning, Afternoon, Evening, All)
        </label><br />
        <input
          name="pool_time"
          id="pool_time"
          required
          value={form.pool_time}
          onChange={handleChange}
        /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReforgedCoDForm;
