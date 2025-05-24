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
    email: ''

});

  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
        console.log(`FORM: ${form.team_name}`)
        const res = await axios.post('https://website-backend-5m32.onrender.com/usyncApp/lans', form, {
        headers: {
            'Content-Type': 'application/json',
        }});
        
      setTimeout(() => window.location.href = "/checkout", 1000);
    } catch (err) {
      alert('Error submitting form please try again. If this continues to happen please contact us');
    }
  };

  return (
    <div style={{ padding: 20, backgroundColor: 'rgb(255,255,255)' }}>
        {loading && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(255,255,255,0.8)',
          zIndex: 999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <img src="https://i.gifer.com/ZZ5H.gif" alt="Loading..." style={{ width: 100 }} />
          <p>Submitting your info...</p>
        </div>
      )}

    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 mx-auto' style={{ paddingTop: '5rem' }}>
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
                    <label for="email">Email:</label>
                    <br />
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
                    <br />
                    
                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className='col-lg-4 mx-auto' style={{ paddingTop: '5rem' }}>
                <h1>Your Cart</h1>
                <div style={{borderColor: 'rgb(0,0,0)', borderRadius: '5px', backgroundColor: 'rgba(141, 125, 181, 0.17)'}}>
                    <p>Team Pass - $300</p>
                    <p>Website Fee - $15</p>
                    <p>Total - $315</p>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  );
}

export default ReforgedCoDForm;
