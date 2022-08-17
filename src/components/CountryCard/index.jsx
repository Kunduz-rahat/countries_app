import React from 'react';
import styled from 'styled-components';

const Wrapper =styled.article`
  border-radius: var(--radius);
  background-color: car(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
 padding: 1rem 1.5rem 2rem;`;

const CardList = styled.ul`
 list-style: none;
  margin: 0;
  padding: 1rem 0 0;`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  & > b {
    font-weight: var(--fw-bold);
	 margin-right:1rem;
  }
`;



const CountryCard = ({img, name, info=[], onClick}) => {
  return (
	 <Wrapper onClick={onClick}>
	   <CardImage src={img} alt={name}/>
<CardBody>
	<CardTitle>{name}</CardTitle>
	<CardList>
{
	info.map(item=>(
		<CardListItem key={item.title}>
			<b>{item.title}:</b>{item.description}
		</CardListItem>
	))
}
	</CardList>
</CardBody>
	 </Wrapper>
  )
}

export default CountryCard