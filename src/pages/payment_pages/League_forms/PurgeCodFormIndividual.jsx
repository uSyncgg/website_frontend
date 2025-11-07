import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../../../Footer';

function PurgeCodFormIndividual() {
  const [form, setForm] = useState({
    playerDiscord: '',
    playerEmail: '',
    playerActivision: '',
    playerTwitter: ''
});

  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    // Test Route: 'http://localhost:4242/usyncApp/leagues/PurgeCoDLeagueIndividual'
    // Live Route: 'https://website-backend-5m32.onrender.com/usyncApp/leagues/PurgeCoDLeagueIndividual'

    try {
        console.log(`FORM: ${form.team_name}`) 
        const res = await axios.post('https://website-backend-5m32.onrender.com/usyncApp/leagues/PurgeCoDLeagueIndividual', form, {
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
                <div className='col-lg-8 mx-auto'>
                    <div className='cart-container'>
                        <h1 style={styles.heading}>Submit Your Info</h1>
                        <form onSubmit={handleSubmit} style={styles.form}>

                        {/* Player 1 + 2 */}
                        <div style={styles.row}>
                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="playerDiscord" style={styles.label}>Player Discord Name</RequiredLabel>
                            <input
                                id="playerDiscord"
                                name="playerDiscord"
                                value={form.playerDiscord}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='JohnSmith123'
                            />
                            </div>

                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="playerEmail" style={styles.label}>Player Email</RequiredLabel>
                            <input
                                id="playerEmail"
                                name="playerEmail"
                                type='email'
                                value={form.playerEmail}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='johnsmith@gmail.com'
                            />
                            </div>
                        </div>

                        {/* Player 3 + 4 */}
                        <div style={styles.row}>
                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="playerActivision" style={styles.label}>Player Activision ID</RequiredLabel>
                            <input
                                id="playerActivision"
                                name="playerActivision"
                                value={form.playerActivision}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='John Smith'
                            />
                            </div>

                            <div style={styles.fieldHalf}>
                            <label htmlFor="playerTwitter" style={styles.label}>Player Twitter</label>
                            <input
                                id="playerTwitter"
                                name="playerTwitter"
                                value={form.playerTwitter}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='@uSyncGG'
                            />
                            </div>
                        </div>                       

                        <button type="submit" style={styles.button}>Submit</button>
                        </form>
                        </div>

                </div>

                <div className='col-lg-4 mx-auto' style={{ paddingTop: '5rem' }} >

                    <div className="cart-container">
                        <h1 style={styles.heading}>Your Cart</h1>
                            <div className="cart-box">
                                <div className="cart-item">
                                <span >League Entry</span>
                                <span >$5</span>
                                </div>

                                <div className="cart-item">
                                <span >Platform Fee</span>
                                <span >$0.25</span>
                                </div>

                                <hr className="cart-divider" />

                                <div className="cart-total">
                                <span >Total</span>
                                <span >$5.25</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        
        </div>
    </>
  );
}

export default PurgeCodFormIndividual;
