import '../Lan.css';
const Lol_Lan = () => {
    return (
        <div>
            <a href='/games/LoL'>
                <button type="submit" className='info-button-lans-lol'>Back to League of Legends</button>
            </a>
            <a href='/lans'>
                <button type="submit" className='info-button-lans-home'>Back to LANs</button>
            </a>
            <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1CFHyDVMbDSwBAX2_cz3KqiCm0UY9aQQ&ehbc=2E312F" className='LanMap'></iframe>
        </div>
    );
}

export default Lol_Lan;
