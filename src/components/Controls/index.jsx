import { useState, UseEffect } from 'react';
import styled from 'styled-components';
import { Search } from '../Search';
import { CustomSelect } from '../CustomSelect';

const options =[
	{value:'America', label:'America'},
	{value:'Asia', label:'Asia'},
	{value:'Europe', label:'Europe'},
	{value:'Africa', label:'Africa'},
	{value:'Oceania', label:'Oceania'},

]
const Wrapper=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
@media(min-width:767px){
	flex-direction:row;
	justify-content:space-between;
	align-items:center;
}
`;

export const Controls = () => {
	const [search, setSearch] = useState('');
	const [region, setRegion] = useState('');
  return (
	 <Wrapper>
		<Search search={search} setSearch={setSearch}/>
		
		<CustomSelect 
		placeholder='Filter bu Region' 
		isClearable
		isSearchable={false}
		options={options}
		onChange={setRegion}
		/>
	 </Wrapper>
  )
}
