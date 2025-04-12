// import '../game_pages/CoD/Cod.css';
// import Footer from '../../Footer';
// import useNavHeight from '../hooks/NavbarHeight';




// const Eventhost = () => {
//     const handleFeatureEventClick = () => {
//       window.location.href = '/more/eventhost/eventhostrequest'
//     }
//     useNavHeight();
//     return (
//       <div className="report-container">
//         {/* <header id="League-header">
//           <img src="https://i.imgur.com/S9U4H7T.png" className="Header-Img-l" />
//           <div className="games-leagues-header-title">
//             <h2 id="league-title">Our Events</h2>
//             <img
//               src="https://i.imgur.com/eNhKhTI.png"
//               alt="underline"
//               className="Underline-h"
//             />
//           </div>
//         </header> */}
//         <div className='Header-Img-l games-img'>
//           <div className="games-leagues-header-title">
//               <h2 id="league-title">Our Events</h2>
//               <img
//                 src="https://i.imgur.com/eNhKhTI.png"
//                 alt="underline"
//                 className="Underline-h"
//               />
//           </div>
//         </div>

//         <button className="verified-button smaller-width-mobile" onClick={handleFeatureEventClick}>Post Your Event</button>

//         <div className="Background-leagues col-lg-8 offset-lg-2">
//           <p id="eventhost-p">
//           All of our posted events are taken through a certification process that ensures that the event is legitimate and in good standing with payouts (if applicable). 
//           At uSync you can trust the events you are entering without having to do extensive research, we take care of it all for you in one place!
//           </p>
//           <br />
//           <p id="eventhost-p">
//           We strive to bring as many events as possible to th e community and create a hub of competitive esports. However, in our search for 
//           competitive events we may miss some. That's why we allow anyone to feature any event of their choosing on the form below! Submit your application today!
//           </p>
//         </div>
//         <p className="hr-report" />
//         <p className="report-link" id="verification-post-event">
//         Already Posted on uSync? Become{" "}
//           <a id="verification-post-event-a" href="/more/verification">
//             Verified
//           </a>
//         </p>
//         <Footer />
//       </div>
//     );
// }
// export default Eventhost;

import '../game_pages/CoD/Cod.css';
import Footer from '../../Footer';
import useNavHeight from '../hooks/NavbarHeight';




const Eventhost = () => {
  useNavHeight();
    return (
      <div className="report-container">
        {/* <header id="League-header">
          <img src="https://i.imgur.com/S9U4H7T.png" className="Header-Img-l" />
          <div className="games-leagues-header-title">
            <h2 id="league-title">Feature Your Event</h2>
            <img
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
              className="Underline-h"
            />
          </div>
        </header> */}

        <div className='Header-Img-l games-img'>
          <div className="games-leagues-header-title">
              <h2 id="league-title">Post Your Event</h2>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                alt="underline"
                className="Underline-h"
              />
          </div>
        </div>

        <div className="Background-leagues">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf8UhB2bn7wDN9mHTpEfFvlLN9ZkDA47uWfUaAInWujsuez2g/viewform?embedded=true"
            width="640"
            height="1950"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
        <p className="hr-report" />
        <p className="report-link" id="verification-post-event">
        Already Featured? Become{" "}
          <a id="verification-post-event-a" href="/more/verification">
            Verified
          </a>
        </p>
        <Footer />
      </div>
    );
}
export default Eventhost;