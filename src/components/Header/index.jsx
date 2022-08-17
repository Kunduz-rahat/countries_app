import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {IoMoon, IoMoonOutline} from 'react-icons/io5'
import { Container } from '../Container';


const HeaderItem=styled.header`
box-shadow: var(--shadow);
background-color:var(--colors-ui-base);
`;
const Wrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding: 2rem 0;
`;

const Title = styled.a.attrs({
	href:'/'
})`
color:var(--colors-text);
text-decoration:none;
font-size: var(--fs-md);
font-weight: var(--fw-bold)
`;
const ModeSwitcher = styled.div`
color:var(--colors-text);
font-weight: var(--fw-bold)
font-size: var(--fs-md);
cursor:pointer;
`;


export const Header = () => {
	const [theme, setTheme] = useState('light')
	const toggleTheme = ()=> setTheme(theme==="light"? 'dark': "light")
	useEffect(()=>{
   document.body.setAttribute('data-theme', theme)
	}, [theme])
  return (
	 <HeaderItem>
		<Container>
        <Wrapper>
	      <Title>Where is the world?</Title>
      	<ModeSwitcher onClick={toggleTheme}>
		    <IoMoon/> <span  style={{marginLeft:"0.75rem"}}>Light Theme</span>
	     </ModeSwitcher>
       </Wrapper>
		</Container>
	 </HeaderItem>
  )
}
