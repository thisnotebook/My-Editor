import { AppBar,Toolbar, styled} from "@mui/material";
  

 const Container = styled(AppBar)`
 
   background-color: #060606;
   height: 9vh;
  
 `


const Header =()=>{
    return (
  
  
        <Container position="static">
            <Toolbar>
            <i class="fa-brands fa-codepen" style={{fontSize : 40}}></i>
            <h1 style={{padding : 10}}> &lt; My_Editor /&gt;</h1>
            </Toolbar>
        </Container>
    
       
    )
}

export default Header;