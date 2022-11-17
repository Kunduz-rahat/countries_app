import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
import { Button } from "../../components/Button";
import { CountryInfo } from "../../components/CountryInfo";
import { searchByCountry } from "../../config";

export const CountryDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  console.log(country);
  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);
  return (
    <>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack />
        Back
      </Button>
      <CountryInfo {...country} />
      Details {name}
    </>
  );
};
