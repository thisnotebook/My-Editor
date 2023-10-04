import { useState } from "react";

import { Box,styled } from "@mui/material";
import "../App.css";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
// CloseFullscreenIcon it m=import as a component  so their for use as <CloseFullscreenIcon/>
//styled is used when we want to add extra styles than the default bu mui
//BOx is alternative of div in material ui
// which give div by default which we can also change to span

//npm i codemirror@5.65.14  use this instead of latest version    
 import {Controlled as ControlledEditor} from "react-codemirror2";
  // why we using codemirror2 
  //jab bhi hum apne editor me kuch likhenge toh ye html element , css props and other
  // and js funtions, and other stuff ko detect kar lega aur unhe alag color se show karega  aur jab run karenge toh run hoga 

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

//to  default  xml we import 
// xml  - header ,heading ,toolbar , container etc.. + html
//html - p, img,div etc...
//similarly other

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


const Container = styled(Box)`
     flex-grow :1;
     flex-basic:0;
     display:flex;
     flex-direction:column;
     padding: 0 8px 8px 
`
   const Heading =styled(Box)`
     background-color:#1d1e22;
     display:flex;
     padding :9px 12px;
    
   `; 
   const  Header = styled(Box)`
    display:flex;4
    background-color : #060606;
    color : #AAAEBC;
    justify-content : space-between;
    font-weight:700;
   `


const Editor = ({heading , icon, color, value, onChange }) => {
  const [open, setOpen] = useState(true);

       const handleChange =(editor, data, value)=>{
    onChange(value);
       }
  return (
    <Container style={open ? null:{flexGrow:0}}>
      <Header>
        <Heading>
         <Box component="span"
       
       style={{
        background: color,
        height:20,
        width:20,
        display:'flex',
        borderRadius:5,
        marginRight:5,
        paddingBottom:2,
        color:"#000",
       }}
         >
           {icon}
         </Box>
         {heading}
        </Heading>
        <CloseFullscreenIcon
        fontSize="small"
        style={{alignSelf:'center',
         cursor: 'pointer',
         }}
           onClick ={()=> setOpen(prevState => !prevState)}
        />
      </Header>
      <ControlledEditor
         className="controlled-editor"
         value={value}
         onBeforeChange={handleChange}
         options={{
          theme:"material",
          lineNumbers: true,
        
         }}
      />
    </Container>
  );
};

export default Editor;
