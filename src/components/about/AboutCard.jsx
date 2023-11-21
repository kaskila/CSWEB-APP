// import React from "react"
// import Heading from "../common/heading/Heading"
// import "./about.css"
// import { homeAbout } from "../../dummydata"
// import Awrapper from "./Awrapper"

// const AboutCard = () => {
//   return (
//     <>
//       <section className='aboutHome'>
//         <div className='container flexSB'>
//           <div className='left row'>
//             <img src='./images/about.webp' alt='' />
//           </div>
//           <div className='right row'>
//             <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
//             <div className='items'>
//               {homeAbout.map((val) => {
//                 return (
//                   <div className='item flexSB'>
//                     <div className='img'>
//                       <img src={val.cover} alt='' />
//                     </div>
//                     <div className='text'>
//                       <h2>{val.title}</h2>
//                       <p>{val.desc}</p>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </section>
//       <Awrapper />
//     </>
//   )
// }

// export default AboutCard
import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import {
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const AboutCard = () => {
  return (
    <section className='aboutHome' sx={{ backgroundColor: "#f5f5f5", padding: "50px 0", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className='container flexSB'>
        <div className='left row' sx={{ display: "flex", alignItems: "center" }}>
          <img src='./images/about.webp' alt='' />
        </div>
        <div className='right row' sx={{
          maxWidth: "700px",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          textAlign: "left",
        }}>
          <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
          <div className='items'>
            {homeAbout.map((val) => (
              <Card key={val.title} sx={{ display: "flex", marginBottom: "20px" }}>
                <img src={val.cover} alt='' sx={{ width: "100px", height: "100px", marginRight: "20px", borderRadius: "50%", objectFit: "cover" }} />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{val.title}</Typography>
                  <Typography variant="body2">{val.desc}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Awrapper />
    </section>
  );
};

export default AboutCard;

