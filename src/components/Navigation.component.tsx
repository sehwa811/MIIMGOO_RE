import { Outlet } from "react-router-dom";

import styled from "styled-components";

const NavBox = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  width: 100%;
  max-width: 31rem;
  height: 5rem;
  border: 0.4px solid var(--typho-black-1);
  border-radius: 1.5625rem 1.5625rem 0rem 0rem;
  background: linear-gradient(180deg, #0500FF 0%, #0500FF 0.01%, #0075FF 100%, rgba(5, 0, 255, 0.00) 100%);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.50);
  z-index: 1;
`;

function NavigationBar() {
    return (
      <div>
        <NavBox>nav</NavBox>
        <Outlet />
      </div>  
    );
  }
  
export default NavigationBar;