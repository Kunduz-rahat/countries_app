import React from 'react';
import styled from 'styled-components';

const Wrapper =styled.article``;

const CardImage = styled.img``;

const CardBody = styled.div``;

const CardList = styled.ul``;

const CardTitle = styled.h3``;

const CardListItem = styled.li``;



const CountryCard = ({img, name, info, onClick}) => {
  return (
	 <Wrapper onClick={onClick}>
	   <CardImage src={img} alt={name}/>
<CardBody>
	<CardTitle>{name}</CardTitle>
	<CardList>
{
	info.map(item=>(
		<CardListItem key={item.title}>
			<strong>{item.title}:</strong>{item.description}
		</CardListItem>
	))
}
	</CardList>
</CardBody>
	 </Wrapper>
  )
}

export default CountryCard