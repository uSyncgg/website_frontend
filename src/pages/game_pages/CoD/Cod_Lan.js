import '../Lan.css';
const Cod_Lan = () => {
    return (
        <div>
            <a href='http://localhost:3000/games/call-of-duty'>
                <button type="submit" className='info-button-lans'>Back to Call of Duty</button>
            </a>
            <a href='http://localhost:3000/lans'>
                <button type="submit" className='info-button-lans-home'>Back to LANs</button>
            </a>
            <iframe src="https://www.google.com/maps/d/u/6/embed?mid=1GEf0IzpwDFmiA-Snc7WsoH_nbqPvNhU&ehbc=2E312F" className='LanMap'></iframe>
        </div>
    );
}

export default Cod_Lan;