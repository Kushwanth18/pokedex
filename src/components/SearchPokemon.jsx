import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchPokemon.css";

const SearchPokemon = () => {
  const [name, setName] = useState("Enter Pokemon Name");
  const handleChange = (e) => {
    setName(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(name);
    getPokeData();
  };

  const getPokeData = async () => {
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(data);
  };

  return (
    <div className="outline">
      <h1>Get Info about any Pokemon</h1>
      <Box component="form" className="innerForm">
        <TextField
          id="standard-basic"
          label="Enter Pokemon Name"
          variant="standard"
          className="searchText"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="success"
          className="button"
          onClick={handleSubmit}
        >
          I Choose You!
        </Button>
      </Box>
    </div>
  );
};

export default SearchPokemon;
