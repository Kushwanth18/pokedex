import Box from "@mui/material/Box";
import "./searchPokemon.css";
import Search from "./Search";
//import Pokemon from "./Pokemon";

const SearchPokemon = () => {
  /*   const [name, setName] = useState("Enter Pokemon Name");
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
  }; */

  return (
    <div className="outline container-fluid">
      <h1 className="mb-5">Get Info about any Pokemon</h1>
      <Box className="innerForm">
        <Search />
      </Box>
      {/*       {Object.keys(data).length === 0 ? null : (
        <div>
          <Pokemon data={data} />
        </div>
      )} */}
    </div>
  );
};

export default SearchPokemon;
