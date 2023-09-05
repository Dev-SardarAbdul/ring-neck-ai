import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  } 
 body
{
  overflow-x: hidden !important;
  font-family: 'Poppins', sans-serif;
   
}

iframe
{
  /* position: absolute !important;
  width: none !important;
  top: none !important;
  left: none !important;
  right: none !important;
  z-index: -5 !important; */
}



 /* Loader */
 .cover-spin {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background:rgba(0,0,0,0.7);
  color:white;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}


  .ant-modal-content
  {
   background: none;
  }


   
 
`;

export default GlobalStyle;
