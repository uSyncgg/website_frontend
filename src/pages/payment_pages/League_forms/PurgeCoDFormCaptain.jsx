import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../../../Footer';

function PurgeCodFormCaptain() {
  const [form, setForm] = useState({ 
    teamName: '', 
    captainDiscord: '',
    player1Discord: '',
    player1Email: '',
    player1Activision: '',
    player1Twitter: '',
    player2Discord: '',
    player2Email: '',
    player2Activision: '',
    player2Twitter: '',
    player3Discord: '',
    player3Email: '',
    player3Activision: '',
    player3Twitter: '',
    player4Discord: '',
    player4Email: '',
    player4Activision: '',
    player4Twitter: ''
});

  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    // Test Route: 'http://localhost:4242/usyncApp/leagues/PurgeCoDLeagueTeam'
    // Live Route: 'https://website-backend-5m32.onrender.com/usyncApp/leagues/PurgeCoDLeagueTeam'

    try {
        console.log(`FORM: ${form.teamName}`)
        const res = await axios.post('http://localhost:4242/usyncApp/leagues/PurgeCoDLeagueTeam', form, {
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
                        <h1 style={styles.heading}>Submit Your Team Info</h1>
                        <form onSubmit={handleSubmit} style={styles.form}>

                        {/* Team Name + Twitter */}
                        <div style={styles.row}>
                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="teamName" style={styles.label}>Team Name</RequiredLabel>
                            <input
                                id="teamName"
                                name="teamName"
                                value={form.teamName}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='uSync'
                            />
                            </div>

                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="captainDiscord" style={styles.label}>Captain's Discord</RequiredLabel>
                            <input
                                id="captainDiscord"
                                name="captainDiscord"
                                value={form.captainDiscord}
                                onChange={handleChange}
                                style={styles.input}
                                placeholder='@uSyncGG'
                            />
                            </div>
                        </div>

                        {/* Player 1 + 2 */}
                        <div style={styles.row}>
                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="player1Discord" style={styles.label}>Player 1 Discord Name</RequiredLabel>
                            <input
                                id="player1Discord"
                                name="player1Discord"
                                value={form.player1Discord}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='JohnSmith123'
                            />
                            </div>

                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="player1Email" style={styles.label}>Player 1 Email</RequiredLabel>
                            <input
                                id="player1Email"
                                name="player1Email"
                                type='email'
                                value={form.player1Email}
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
                            <RequiredLabel htmlFor="player1Activision" style={styles.label}>Player 1 Activision ID</RequiredLabel>
                            <input
                                id="player1Activision"
                                name="player1Activision"
                                value={form.player1Activision}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='John Smith'
                            />
                            </div>

                            <div style={styles.fieldHalf}>
                            <label htmlFor="player1Twitter" style={styles.label}>Player 1 Twitter</label>
                            <input
                                id="player1Twitter"
                                name="player1Twitter"
                                value={form.player1Twitter}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='@uSyncGG'
                            />
                            </div>
                        </div>

                        <div style={styles.row}>
                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="player2Discord" style={styles.label}>Player 2 Discord Name</RequiredLabel>
                            <input
                                id="player2Discord"
                                name="player2Discord"
                                value={form.player2Discord}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='JohnSmith123'
                            />
                            </div>

                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="player2Email" style={styles.label}>Player 2 Email</RequiredLabel>
                            <input
                                id="player2Email"
                                name="player2Email"
                                type='email'
                                value={form.player2Email}
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
                            <RequiredLabel htmlFor="player2Activision" style={styles.label}>Player 2 Activision ID</RequiredLabel>
                            <input
                                id="player2Activision"
                                name="player2Activision"
                                value={form.player2Activision}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='John Smith'
                            />
                            </div>

                            <div style={styles.fieldHalf}>
                            <label htmlFor="player2Twitter" style={styles.label}>Player 2 Twitter</label>
                            <input
                                id="player2Twitter"
                                name="player2Twitter"
                                value={form.player2Twitter}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='@uSyncGG'
                            />
                            </div>
                        </div>

                        <div style={styles.row}>
                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="player3Discord" style={styles.label}>Player 3 Discord Name</RequiredLabel>
                            <input
                                id="player3Discord"
                                name="player3Discord"
                                value={form.player3Discord}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='JohnSmith123'
                            />
                            </div>

                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="player3Email" style={styles.label}>Player 3 Email</RequiredLabel>
                            <input
                                id="player3Email"
                                name="player3Email"
                                type='email'
                                value={form.player3Email}
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
                            <RequiredLabel htmlFor="player3Activision" style={styles.label}>Player 3 Activision ID</RequiredLabel>
                            <input
                                id="player3Activision"
                                name="player3Activision"
                                value={form.player3Activision}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='John Smith'
                            />
                            </div>

                            <div style={styles.fieldHalf}>
                            <label htmlFor="player3Twitter" style={styles.label}>Player 3 Twitter</label>
                            <input
                                id="player3Twitter"
                                name="player3Twitter"
                                value={form.player3Twitter}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='@uSyncGG'
                            />
                            </div>
                        </div>

                        <div style={styles.row}>
                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="player4Discord" style={styles.label}>Player 4 Discord Name</RequiredLabel>
                            <input
                                id="player4Discord"
                                name="player4Discord"
                                value={form.player4Discord}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='JohnSmith123'
                            />
                            </div>

                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="player4Email" style={styles.label}>Player 4 Email</RequiredLabel>
                            <input
                                id="player4Email"
                                name="player4Email"
                                type='email'
                                value={form.player4Email}
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
                            <RequiredLabel htmlFor="player4Activision" style={styles.label}>Player 4 Activision ID</RequiredLabel>
                            <input
                                id="player4Activision"
                                name="player4Activision"
                                value={form.player4Activision}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='John Smith'
                            />
                            </div>

                            <div style={styles.fieldHalf}>
                            <label htmlFor="player4Twitter" style={styles.label}>Player 4 Twitter</label>
                            <input
                                id="player4Twitter"
                                name="player4Twitter"
                                value={form.player4Twitter}
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
                                <span >$25</span>
                                </div>

                                <div className="cart-item">
                                <span >Platform Fee</span>
                                <span >$1.25</span>
                                </div>

                                <hr className="cart-divider" />

                                <div className="cart-total">
                                <span >Total</span>
                                <span >$26.25</span>
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

export default PurgeCodFormCaptain;
