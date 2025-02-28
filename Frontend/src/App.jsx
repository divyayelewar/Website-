import React from 'react';
import { BrowserRouter, Routes, Route,useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/footer';
import Not_Found from './Components/Not_Found/Not_Found';
import Home from './Pages/Home/Home';
import Gathering from './Pages/Event/Gathering';
import Freshar from './Pages/Event/Freshar';
import Others from './Pages/Event/Others';
import Farewell from './Pages/Event/Farewell';
import About from './Pages/About/About';
import TeachingStaff from './Pages/Staff/TeachingStaff';
import NonTeachingStaff from './Pages/Staff/NonTeachingStaff';
import Registration from './Pages/Registration/Registration';
import Contact from './Pages/Contact/Contact';
import Facilities from './Pages/About/Facilities';
// import Syllabuss from './Pages/About/Syllabuss';
import Free_coures from './Pages/Free_coures/Free_coures';
import Paper from './Pages/About/Paper';
import Result from './Pages/Result/Result';
import Image from './Pages/Single_image/Image';
import Javacode from './Pages/Free_coures/Javacode';
import Teacher_detail from './Pages/Staff/Teacher_detail';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/gathering' element={<Gathering/>} />
           <Route  path='/*' element={<Not_Found/>}/> 
           <Route path='/freshar' element={< Freshar/>}/>
           {/* <Route path='/farewell' element={< Farewell/>}/> */}
           <Route path="/farewell" element={<Farewell />} /> {/* Updated Route syntax */}
           <Route path="/image/:imageId" element={<Image />} />
           <Route path='/other' element={< Others/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/teachingStaff' element={<TeachingStaff/>}/>
           <Route path='/nonTeachingStaff' element={<NonTeachingStaff/>}/>
           <Route path='/registration' element={<Registration/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/freecoures' element={<Free_coures/>}/>
           {/* <Route path='/syllabus' element={<Syllabuss />} /> */}
           <Route path='/paper' element={<Paper/>}/>
           <Route path='/facility' element={<Facilities/>}/>
           <Route path='/result' element={<Result/>}/>
           <Route path='/javacode/:id' element={<Javacode/>}/>
           <Route path='/teacher/:id' element={<Teacher_detail/>}/>
           
           {/* <Route path='/image' element={<Image/>}/> */}
         
           
         
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
};

export default App;
