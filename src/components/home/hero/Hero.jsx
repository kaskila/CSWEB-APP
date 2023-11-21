// import React from "react"
// import { Link } from "react-router-dom"
// import Heading from "../../common/heading/Heading"
// import "./Hero.css"

// const Hero = () => {
//   return (
//     <>
//       <section className='hero'>
//         <div className='container'>
//           <div className='row'>
//             <Heading subtitle='WELCOME TO THE DEPARTMENT OF COMPUTER SCIENCE' title='Best Technology Education Expertise' />
//             <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
//             <div className='button'>
//               <button className='primary-btn'>
//                 <Link to='/programmes'>VIEW PROGRAMMES <i className='fa fa-long-arrow-alt-right'></i></Link>
//               </button>
            
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className='margin'></div>
//     </>
//   )
// }

// export default Hero

import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="hero-content">
            <Heading
              subtitle="WELCOME TO THE DEPARTMENT OF COMPUTER SCIENCE"
              title="Best Technology Education Expertise"
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button">
              <Link to="/programmes" className="primary-btn">
                VIEW PROGRAMMES <i className="fa fa-long-arrow-alt-right"></i>
              </Link>
            </div>
            <div className="button">
              <Link to="/step2" className="outlined">
                LEAVE COMMENT <i className="fa fa-long-arrow-alt-right"></i>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
