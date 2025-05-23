import styles from '../Home.module.css';
import './more-pages/FAQ';
import Footer from '../Footer';
import React from 'react';
import useNavHeight from './hooks/NavbarHeight';

const Articles = () => {
   useNavHeight();
       return (
         <>
         <div className="total-container">
            <div className='Header-Img-l article-img header-bottom-space'>
            <div className="games-leagues-header-title">
            <h2 id="league-title">uSync Articles</h2>
            <img
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
              className="Underline-h"
            />
            </div>
          </div>
   
           <div className="Background-game">
             <div className="container">
               <div className="row justify-content-center games-row-1">
                 {" "}
                 {/* add justify-content-center class to center the columns */}
                 <div className="col-lg-4 space-on-bottom" id="bubblel">
                   <a href="/more/FAQ/The-Problem-With-Esports">
                    <img
                      className="blockimg"
                      src="https://i.imgur.com/vBqSUhI.png"
                      alt="img"
                      style={{ width: '45vh', height: 'auto' }}
                    />
                  </a>
                 </div>
                  <div className="col-lg-4 space-on-bottom" id="bubbler">
                   <a href="/more/FAQ/How-We-Fix-It">
                    <img
                      className="blockimg"
                      src="https://i.imgur.com/Q6NQGsD.png"
                      alt="img"
                      style={{ width: '45vh', height: 'auto' }}
                    />
                  </a>
                 </div>
                 <div className="col-lg-4 space-on-bottom" id="bubble">
                   <a href="/more/FAQ/What-We-Provide">
                    <img
                      className="blockimg"
                      src="https://i.imgur.com/Fr7yPnN.png"
                      alt="img"
                      style={{ width: '45vh', height: 'auto' }}
                    />
                  </a>
                 </div>
               </div>
               <div className="row justify-content-center games-row-2">
                 <div className="col-lg-4 space-on-bottom" id="bubblelb">
                   <a href="/more/FAQ/How-to-Join-an-Esports-League">
                    <img
                      className="blockimg"
                      src="https://i.imgur.com/zS2wj8d.png"
                      alt="img"
                      style={{ width: '45vh', height: 'auto' }}
                    />
                  </a>
                 </div>
                 <div className="col-lg-4" id="bubblerb">
                   <a href="/more/FAQ/How-Esports-Can-Be-Better">
                    <img
                      className="blockimg"
                      src="https://i.imgur.com/DEB6G8p.png"
                      alt="img"
                      style={{ width: '45vh', height: 'auto' }}
                    />
                  </a>
                 </div>
               </div>
             </div>
           </div>
           <Footer />
         </div>
         </>
       );
   }
export default Articles;