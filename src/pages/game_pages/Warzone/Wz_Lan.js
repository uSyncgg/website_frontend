import '../Lan.css';
const Wz_Lan = () => {
    return (
        <div>
            <a href='/games/warzone'>
                <button type="submit" className='info-button-lans'>Back to Warzone</button>
            </a>
            <a href='/lans'>
                <button type="submit" className='info-button-lans-home'>Back to LANs</button>
            </a>
            <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1a5JsmB31CsSiOh4SWPvXNfESQdpvrvA&ehbc=2E312F" className='LanMap'></iframe>
        </div>
    );
}

export default Wz_Lan;