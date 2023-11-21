import React, { useEffect, useRef } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate
import { useFormContext } from 'react-hook-form';
import moment from "moment-timezone"

const AlanButton = () => {
  const rootElRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate to get the navigation function
  const methods = useFormContext();
  const onSubmit = data=>{
    alert(JSON.stringify(data))
    window.alaBtnInstance.playText(' Your comment has been submitted.')
  }
  const onErrors = errors =>{
    window.alaBtnInstance.playText('please check the inputs you have provided')
  } 

  const handleSubmit = methods.handleSubmit(onSubmit,onErrors)

  useEffect(() => {
  
    window.alaBtnInstance = alanBtn({
      key: process.env.REACT_APP_ALAN_API_KEY,
      
      // onButtonState: async(status)=>{
      //   if(status ==="ONLINE"){
      //     window.welcomeMsg = false;
      //     if(!window.welcomeMsg){
      //       window.alaBtnInstance.activate();
      //       window.alaBtnInstance.playText("Hello there, Study well")
      //       window.welcomeMsg = true;
      //     }
      //   }
      // },
      onCommand: (commandData) => {
        if (commandData.command === 'openForm') {
          // Use navigate to go back to a specific route when the command is received
          navigate('/step2'); // Change '/' to your desired route
        }
        if (commandData.command === 'viewProgrammes') {
          // when the user says view programmes it goes to the programmes page
          navigate('/programmes'); 
        }
        if (commandData.command === 'getLocation') {
          // Use the correct field name within setValue
          methods.setValue('location', commandData.value);
        }
        if (commandData.command === 'getComment') {
          // Use the correct field name within setValue
          methods.setValue('feedbackComment', commandData.value);
        }
        if(commandData.command === 'setFormDate'){
          let fromDate = moment(commandData.value).format("MM-DD-YYYY")
          fromDate = moment(fromDate).toDate()
          methods.setValue('fromDate', fromDate)
        }
        if(commandData.command === 'setToDate'){
          let toDate = moment(commandData.value).format("MM-DD-YYYY")
          toDate = moment(toDate).toDate()
          methods.setValue('toDate', toDate)
        }
        if(commandData.command === 'setType'){
          methods.setValue('type', commandData.type)
        }
        if(commandData.command === 'cancelFree'){
          methods.setValue('cancelFree', true)
        }
        if(commandData.command === 'submitData'){
          handleSubmit()
          navigate('/')
        }
        if (commandData.command === 'goToSection') {
          const section = commandData.data.section;
            switch (section) {
              case 'home':
                navigate('/') // Navigate to Home section
                break;
             case 'about':
                navigate('/about') // Navigate to About section
               break;
              case 'programmes':
                navigate('/programmes'); // Navigate to Courses Offered section
                break;
              case 'profiles':
                navigate('/lectures-profiles'); // Navigate to Lectures Profiles section
                break;
              default:
                // Handle unknown section
                break;
            }
        }
      },
    });
  }, [navigate, methods]);// Include navigate and methods in the dependencies array


  useEffect(()=>{
    window.alaBtnInstance.setVisualState({"path": location.pathname})  
  
  },[location])

  return (
    <div className='alan-btn-container'>
      <div ref={rootElRef}></div>
    </div>
  );
};

export default AlanButton;









// const AlanButton = () => {
//   useEffect(() => {
//     const alanInstance = alanBtn({
//        key: 'f0d30313194724a510fba4dbf605bf222e956eca572e1d8b807a3e2338fdd0dc/stage', // Replace with your Alan AI project key
//         onCommand: (commandData) => {
//         // Handle voice commands here
//         if (commandData.command === 'goToSection') {
//           const section = commandData.data.section;
//             switch (section) {
//               case 'home':
//                 window.location.href = '/'; // Navigate to Home section
//                 break;
//               case 'about':
//                 window.location.href = '/about'; // Navigate to About section
//                 break;
//               case 'programmes':
//                 window.location.href = '/programmes'; // Navigate to Courses Offered section
//                 break;
//               case 'lectures-profiles':
//                 window.location.href = '/lectures-profiles'; // Navigate to Lectures Profiles section
//                 break;
//               default:
//                 // Handle unknown section
//                 break;
//             }
//         }
//       },

//     });

//   }, []);

//   return null;
// };

// export default AlanButton;
