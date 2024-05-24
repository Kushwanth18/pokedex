import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [name, setName] = useState("Search for a Pokemon");
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setName(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(name);
    getPokeData();
    navigate(`/${name}`, data);
    window.location.reload();
  };
  const getPokeData = async () => {
    try {
      const initialData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setData(() => initialData);
    } catch (e) {
      navigate("/error");
    }
  };
  return (
    <form>
      <TextField
        id="standard-basic"
        label="Search for a Pokemon"
        variant="standard"
        className="searchText"
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="success"
        type="submit"
        className="submit"
        onClick={handleSubmit}
      >
        I Choose You!
      </Button>
    </form>
  );
};

export default Search;
