import { useEffect, useState } from "react";
import { Search } from "../Search";
import { CustomSelect } from "../CustomSelect";
import styled from "styled-components";

const options = [
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Africa", label: "Africa" },
  { value: "Oceania", label: "Oceania" },
];
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(search, regionValue);
  }, [search, region]);
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />

      <CustomSelect
        placeholder="Filter bu Region"
        isClearable
        isSearchable={false}
        options={options}
        onChange={setRegion}
      />
    </Wrapper>
  );
};
