import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../../Footer';
import { useAuth0 } from '@auth0/auth0-react';

function SignUpForm() {
    const [username, setUsername] = useState("");
    const [games, setGames] = useState([]);
    const [available, setAvailable] = useState(null);

    // At the moment I am choosing to have coach and player accounts be separate. 
    const [status, setStatus] = useState([]);
    
    const { user } = useAuth0();

    let email = user.email
    let sub = user.sub

    console.log(email);

    const gameChoices = [
        "Call of Duty", 
        "Warzone", 
        "Halo Infinite", 
        "League of Legends", 
        "Rocket League", 
        "Valorant", 
        "Counter Strike 2",
        "Other"
    ];

    const statusChoices = ["Player", "Coach", "Organization", "Event Host"];

    const handleCheckboxGames = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setGames([...games, value])
        } else {
            setGames(games.filter((game) => game !== value));
        }
    }

    const handleCheckboxStatus = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setStatus([...status, value])
        } else {
            setStatus(status.filter((stat) => stat !== value));
        }
    }

    const handleRadio = (e) => {
        setStatus(e.target.value);
    }

  const [loading, setLoading] = useState(false);

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const payload = { sub, username, email, games, status };

    // Test Route: 'http://localhost:4242/usyncApp/leagues/PurgeCoDLeagueTeam'
    // Live Route: 'https://website-backend-5m32.onrender.com/usyncApp/leagues/PurgeCoDLeagueTeam'

    try {
        const res = await axios.post('http://localhost:4242/usyncApp/loginEnv/newEntry', {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
        
      setTimeout(() => window.location.href = "/checkout", 1000);
    } catch (err) {
      alert('Error submitting form please try again. If this continues to happen please contact us');
    }
  };

  useEffect(() => {
      if (username.length > 2) { // Check to see if we want to change later
          const timer = setTimeout(async () => {
          const res = await fetch(`http://localhost:4242/uSyncApp/loginEnv/checkUsername?username=${username}`, {
              method: "GET"
          });
          const data = await res.json();
          setAvailable(data.available);
          }, 500); // debounce 500ms

          return () => clearTimeout(timer);
      }
  }, [username]);

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
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    // marginBottom: '0.5rem',
    margin: '0 auto 0.5rem auto',
    color: 'rgb(255,255,255)',
    fontSize: '1rem',
    cursor: 'pointer',
    justifyContent: "flex-start",
    width: '250px',
    // gap: "0.5rem",
  },

  checkboxInput: {
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    width: '1.25rem',
    height: '1.25rem',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#8f5cff',
    borderRadius: '6px',
    marginRight: '0.5rem',
    backgroundColor: 'rgb(49,49,49)',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  },
  checkboxInputChecked: {
    backgroundColor: '#8f5cff',
    borderColor: '#8f5cff',
  },

  radioInput: {
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    width: '1.25rem',
    height: '1.25rem',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#8f5cff',
    borderRadius: '50%',
    marginRight: '0.5rem',
    // backgroundColor: 'rgb(49,49,49)',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    alignItems: "center",
  },

  radioInputChecked: {
    backgroundColor: '#8f5cff',
    boxShadow: '0 0 0 4px rgba(143, 92, 255, 0.3)',
    borderColor: '#8f5cff',
  },
};

const RequiredLabel = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} style={styles.label}>
    {children} <span style={{ color: 'red' }}>*</span>
  </label>
);

  return (
    <>
        {/* We should remove this and make a loading component and put it in here */}
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
                <div className='col-lg-12 mx-auto'>
                    <div className='cart-container'>
                        <h1 style={styles.heading}>Submit Your Team Info</h1>
                        <form onSubmit={handleSubmit} style={styles.form}>

                        {/* Team Name + Twitter */}
                        <div style={styles.row}>
                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="username" style={styles.label}>Username:</RequiredLabel>
                            <input
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                style={styles.input}
                                placeholder='uSync'
                            />
                            {available === false && <p style={{color:"red"}}>Username taken</p>}
                            {available === true && <p style={{color:"green"}}>Username available</p>} 
                            </div>

                            
                        </div>

                        <p className="hr-form" />

                        {/* Player 1 + 2 */}
                        <div style={styles.row}>
                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="games" style={styles.label}>Select the Games You Play</RequiredLabel>
                            {gameChoices.map((game) => {
                                const checked = games.includes(game);
                                return (
                                    <label
                                    key={game}
                                    style={styles.checkboxContainer}
                                    >
                                    <input
                                        type="checkbox"
                                        value={game}
                                        checked={checked}
                                        onChange={handleCheckboxGames}
                                        style={{
                                        ...styles.checkboxInput,
                                        ...(checked ? styles.checkboxInputChecked : {}),
                                        }}
                                    />
                                    {game}
                                    </label>
                                );
                            })}
                            </div>

                            <div style={styles.fieldHalf}>
                            <RequiredLabel htmlFor="status" style={styles.label}>Select Your Account Status</RequiredLabel>
                            {statusChoices.map((role) => {
                                const checked = status.includes(role);
                                return (
                                    <label
                                    key={role}
                                    style={styles.checkboxContainer}
                                    >
                                    <input
                                        type="checkbox"
                                        value={role}
                                        checked={checked}
                                        onChange={handleCheckboxStatus}
                                        style={{
                                        ...styles.checkboxInput,
                                        ...(checked ? styles.checkboxInputChecked : {}),
                                        }}
                                    />
                                    {role}
                                    </label>
                                );
                            })}
                            
                            </div>
                        </div>
                        <button type="submit" style={styles.button}>Submit</button>
                        </form>
                        </div>

                </div>
            </div>
        </div>
        
        </div>
    </>
  );
}

export default SignUpForm;
