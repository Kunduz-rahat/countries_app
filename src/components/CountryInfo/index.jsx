import React from "react";
import styled from "styled-components";
const Wrapper = styled.section``;

const DetailsImage = styled.img``;

const DetailsTitle = styled.h1``;
const ListGroup = styled.div``;

const List = styled.ul``;
const ListItem = styled.li``;
export const CountryInfo = (props) => {
  const {
    name,
    nativeName,
    population,
    region,
    flag,
    capital,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
  } = props;
  return (
    <Wrapper>
      <DetailsImage src={flag} alt={name} />
      <div>
        <DetailsTitle>{name}</DetailsTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name: </b>
              {nativeName}
            </ListItem>
            <ListItem>
              <b>Population: </b>
              {population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub region: </b>
              {subregion}
            </ListItem>
            <ListItem>
              <b>Capital: </b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain</b> {topLevelDomain}
            </ListItem>
            <ListItem>
              <b>Currency </b>{" "}
              {currencies.map((c) => (
                <p key={c.code}>{c.name} </p>
              ))}
            </ListItem>
            <ListItem>
              <b>Languages </b>
              {languages.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </ListItem>
          </List>
        </ListGroup>
      </div>
    </Wrapper>
  );
};
