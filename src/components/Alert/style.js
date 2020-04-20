import styled from "styled-components";
import { theme } from "../../config/mainTheme"
import { device } from "../../config/breakpoint"
const Container = styled.div`
  position: fixed;
  z-index: 1; 
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; 
  background-color: ${theme.fallbackColor};
  background-color: ${theme.blackOpacity};
  .deleting-modal-content{
    @media ${device.mobile} { 
      width: 100%;
      height:100%;
      position: fixed;
      top:0px;
      left:0px;
      border-radius: 0px;
      padding: 0em;
      box-shadow: none;
      display: flex;
      -webkit-flex-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      justify-content: center;
    }
    @media ${device.tablet} { 
      justify-self: center;
      position: relative;
      width: 50%;
      height:30%;
      margin-top: 30px;
      text-align: center;
      margin: auto;
      border-radius: 5px;
      padding: 2em;
      box-shadow: ${theme.boxShadow};
    }
    @media ${device.laptop} { 
      width: 30%;
      height:20%;
    }
    background-color: ${theme.backgroundColor3};
    color: ${theme.textColorGray}
  }
  .modal-content {
    justify-self: center;
    position: relative;

    @media ${device.mobile} { 
      width: 70%;
      margin-top: 10px;
    }
    @media ${device.tablet} { 
      width: 50%;
      margin-top: 30px;
    }
    @media ${device.laptop} { 
      width: 30%;
      margin-top: 75px;
    }
    text-align: center;
    margin: auto;
    border-radius: 5px;
    background-color: ${theme.backgroundColor3};
    padding: 2em;
    box-shadow: ${theme.boxShadow};
    color: ${theme.textColorGray}

  }
  .btn:hover{
      box-shadow: ${theme.buttonShadow}; 
  }
  .btn{
    @media ${device.mobile} { 
      padding: .5em .75em;
    }
    @media ${device.tablet} { 
      padding: .5em 2.5em;
    }
    @media ${device.laptop} { 
      padding: .5em 2.5em;
    }
      border:none;  
      border-radius: 3em;
  }
  .btnYes{
    float:right;
    margin: 0em;
    background: ${theme.dividerColor1};
    @media ${device.mobile} { 
      margin-right: 0.5em;
    }
    @media ${device.tablet} { 
      margin-right: 2em;
    }
    @media ${device.laptop} { 
      margin-right: 4em;
    }

      
  }
  .btnNo{
    margin: 0em;
    background: ${theme.warningColor}
  }
  
`;

export { Container };