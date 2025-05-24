import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../../../Footer';

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

  const styles = {
  heading: {
    fontSize: '2.5rem',
    color: 'rgb(255,255,255)',
    marginBottom: '1.5rem',
    fontWeight: '600',
    textAlign: 'center',
  },
  form: {
    backgroundColor: 'rgb(49,49,49)',
    padding: '2rem',
    borderRadius: '12px',
    maxWidth: '700px',
    margin: '0 auto',
    boxShadow: '0 4px 12px rgb(0, 0, 0)',
  },
  field: {
    marginBottom: '1.5rem',
  },
  row: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: '1.5rem',
  },
  fieldHalf: {
    flex: '1 1 48%',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '0.5rem',
    color: 'rgb(255,255,255)',
    fontWeight: '500',
  },
  input: {
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #444',
    backgroundColor: 'rgb(93, 66, 133)',
    color: 'rgb(255,255,255)',
    outline: 'none',
    transition: 'border 0.2s ease-in-out',
  },
  button: {
    marginTop: '1.5rem',
    width: '100%',
    padding: '1rem',
    backgroundColor: '#8f5cff',
    border: 'none',
    color: 'rgb(255,255,255)',
    fontSize: '1.1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.2s ease-in-out',
  }
};

const RequiredLabel = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} style={styles.label}>
    {children} <span style={{ color: 'red' }}>*</span>
  </label>
);

  return (
    <>
        <div style={{ padding: 20, backgroundColor: 'rgb(49,49,49)', color: 'rgb(255,255,255)' }}>
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
            <img src="https://imgur.com/gninF85.gif" alt="Loading..." style={{ width: 100 }} />
            <p>Submitting your info...</p>
            </div>
        )}

        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 mx-auto' style={{ paddingTop: '5rem' }}>
                    {/* <h1>Submit Your Team Info</h1>
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
                    </form> */}
                    <div className='cart-container'>
                        <h1 style={styles.heading}>Submit Your Team Info</h1>
                        <form onSubmit={handleSubmit} style={styles.form}>

                        {/* Team Name + Twitter */}
                        <div style={styles.row}>
                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="team_name" style={styles.label}>Team Name</RequiredLabel>
                            <input
                                id="team_name"
                                name="team_name"
                                value={form.team_name}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='uSync'
                            />
                            </div>

                            <div style={styles.fieldHalf}>
                            <label htmlFor="twitter" style={styles.label}>Team/Org/Twitter @'s</label>
                            <input
                                id="twitter"
                                name="twitter"
                                value={form.twitter}
                                onChange={handleChange}
                                style={styles.input}
                                placeholder='@uSyncGG'
                            />
                            </div>
                        </div>

                        {/* Player 1 + 2 */}
                        <div style={styles.row}>
                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="player1" style={styles.label}>Player 1 Activision ID + Twitter @</RequiredLabel>
                            <input
                                id="player1"
                                name="player1"
                                value={form.player1}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='John Smith + @uSyncGG'
                            />
                            </div>

                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="player2" style={styles.label}>Player 2 Activision ID + Twitter @</RequiredLabel>
                            <input
                                id="player2"
                                name="player2"
                                value={form.player2}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='John Smith + @uSyncGG'
                            />
                            </div>
                        </div>

                        {/* Player 3 + 4 */}
                        <div style={styles.row}>
                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="player3" style={styles.label}>Player 3 Activision ID + Twitter @</RequiredLabel>
                            <input
                                id="player3"
                                name="player3"
                                value={form.player3}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='John Smith + @uSyncGG'
                            />
                            </div>

                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="player4" style={styles.label}>Player 4 Activision ID + Twitter @</RequiredLabel>
                            <input
                                id="player4"
                                name="player4"
                                value={form.player4}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='John Smith + @uSyncGG'
                            />
                            </div>
                        </div>

                        {/* Coach */}
                        <div style={styles.row}>
                            <div style={styles.fieldHalf}>
                                <div style={styles.field}>
                                    <label htmlFor="coach" style={styles.label}>Coach (if applicable) + Twitter @</label>
                                    <input
                                        id="coach"
                                        name="coach"
                                        value={form.coach}
                                        onChange={handleChange}
                                        style={styles.input}
                                        placeholder='John Smith + @uSyncGG'
                                    />
                                </div>
                            </div>
                            <div style={styles.fieldHalf}>
                                {/* Pool Time */}
                                <div style={styles.field}>
                                    <RequiredLabel htmlFor="pool_time" style={styles.label}>
                                    When Would You Prefer to Play Pools<br />(Morning, Afternoon, Evening, All)
                                    </RequiredLabel>
                                    <input
                                        id="pool_time"
                                        name="pool_time"
                                        value={form.pool_time}
                                        onChange={handleChange}
                                        required
                                        style={styles.input}
                                        placeholder='Morning'
                                    />
                                </div>
                            </div>
                        </div> 
                        
                        {/* Email */}
                        <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="email" style={styles.label}>Email</RequiredLabel>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='contact@usync.gg'
                            />
                        </div>

                        <button type="submit" style={styles.button}>Submit</button>
                        </form>
                        </div>

                </div>

                <div className='col-lg-4 mx-auto' style={{ paddingTop: '5rem' }} >
                    {/* <div>
                        <h1>Your Cart</h1>
                        <div style={{ borderColor: 'rgb(255,255,255)', borderRadius: '5px', border: '0.1rem solid' }}>
                            <p style={{ fontWeight: 'bold' }}>Pass</p>
                            <p>Reforged 4v4 LAN Event - $300</p>
                            <p className='hr-form' />
                            <p>Subtotal: $300</p>
                            <p>Website Fee - $15</p>
                            <p className='hr-form' />
                            <p>Total - $315</p>
                        </div>
                    </div> */}

                    <div className="cart-container">
                        <h1 style={styles.heading}>Your Cart</h1>
                            <div className="cart-box">
                                <div className="cart-item">
                                <span >Event Pass</span>
                                <span >$300</span>
                                </div>

                                <div className="cart-item">
                                <span >Platform Fee</span>
                                <span >$15</span>
                                </div>

                                <hr className="cart-divider" />

                                <div className="cart-total">
                                <span >Total</span>
                                <span >$315</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        
        </div>
        <Footer />
    </>
  );
}

export default ReforgedCoDForm;
