import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import AlanButton from './AlanButton/AlanButton';
import Home from './Home/Home';
import About from './About/About';
import Programmes from './CoursesOffered/Programmes';
import LecturesProfiles from './LecturesProfiles/LecturesProfiles';
import Bar from './Bar/Bar';
import Step1 from './Step1';
import Step2 from './Step2';
import {FormProvider, useForm} from 'react-hook-form'

const App = () => {
  const methods = useForm()
  
  return (
    <>
    
    <FormProvider {...methods}>
    <Router>
      <Bar/>
      <AlanButton/>
      <Container>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes/>} />
          <Route path="/lectures-profiles" element={<LecturesProfiles />} />
          <Route path="/" element={<Home />} />
          <Route path='/step1' element={<Step1/>}/>
          <Route path='/step2' element={<Step2/>}/>
        </Routes>
      </Container>
      
    </Router>
    </FormProvider>
    
    </>
  );
};

export default App;

