
import { useContext,useState,useEffect } from 'react';


import {Box,styled} from  '@mui/material';

import {DataContext} from '../context/DataProvider';

const Container  =styled(Box)`
  height : 41vh;
`
const Result =()=>{

   


      
    const {html, css, js}= useContext(DataContext);
    const [src,setSrc] = useState("");

    const srcCode =`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
         </html>
   `


    useEffect(()=>{
      const timeout = setTimeout(()=>{
            setSrc(srcCode);
         },1000);
         return () => clearTimeout(timeout);
    },[html,css,js]);


    return (
      <Container>
      {/* iframe is very import element to display the srccode and it have another uses
      like if we made a "video player"  then it is very best to use if "videotag "is not working */}
   <iframe
     srcDoc={src}
     title="OUTPUT"
     sandbox="allow-scripts"
     frameBorder={0}
     width="100%"
     height="100%"

   />

      </Container>
    )
}
export default Result;
//good question 
/// most important thing is dom is expensive operation so do not use it frequently
// use timer to reduce dom operation defaults it run every time when we change single digit