import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Pokemon.css";
import Search from "./Search";

const Pokemon = () => {
  const params = useParams();
  const pokemon = params.name;
  const [loading, setLoading] = useState(true);
  console.log(pokemon);
  const [data, setData] = useState();
  const [about, setAbout] = useState();
  const navigate = useNavigate();
  /*   const getPokemon = async () => {
    setLoading(true);
    const initialData = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    setLoading(false);
    setData(() => initialData.data);
  }; */
  useEffect(() => {
    async function getPokemon() {
      setLoading(true);
      const initialData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      setData(() => initialData.data);
      getAbout();
    }
    getPokemon();
  }, []);

  //  useEffect(() => {
  async function getAbout() {
    const aboutInitialData = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`
    );
    setLoading(false);
    const aboutData = aboutInitialData.data.flavor_text_entries;
    console.log(aboutData);
    const engData = [];
    aboutData.map((line) => {
      if (line.language.name === "en") {
        engData.push(line);
      }
    });
    //console.log(engData[0].flavor_text);
    setAbout(engData[0].flavor_text);
  }
  //   getAbout();
  // }, []);

  const handleNext = () => {
    navigate(`/${data.id + 1}`);
    window.location.reload();
  };

  const handlePrev = () => {
    navigate(`/${data.id - 1}`);
    window.location.reload();
  };

  console.log(data);
  return loading ? (
    <div className={"spinner-border text-dark"}></div>
  ) : (
    <div className="pokeInfoContainer">
      <div className="pokeName">
        <h1>
          {data.name.toUpperCase()} #{data.id}
        </h1>
        <button className="btn btn-primary" onClick={handlePrev}>
          Previous
        </button>
        <button className="btn btn-danger mx-2" onClick={handleNext}>
          Next
        </button>

        <div className="aboutPokemon">
          <h2>Pokedex Entry:</h2>
          <p>{about}</p>
          <h2 className="types">
            Type:
            {data.types.map((t) => {
              const type = t.type.name;
              switch (type) {
                case "bug":
                  return <img src="/types/bug.jpeg" />;
                case "dark":
                  return <img src="/types/dark.jpeg" />;
                case "dragon":
                  return <img src="/types/dragon.jpeg" />;
                case "electric":
                  return <img src="/types/electric.jpeg" />;

                case "fairy":
                  return <img src="/types/fairy.jpeg" />;

                case "fighting":
                  return <img src="/types/fighting.jpeg" />;

                case "fire":
                  return <img src="/types/fire.jpeg" />;

                case "flying":
                  return <img src="/types/flying.jpeg" />;

                case "ghost":
                  return <img src="/types/ghost.jpeg" />;

                case "grass":
                  return <img src="/types/grass.jpeg" />;

                case "ground":
                  return <img src="/types/ground.jpeg" />;

                case "ice":
                  return <img src="/types/ice.jpeg" />;

                case "normal":
                  return <img src="/types/normal.jpeg" />;

                case "poison":
                  return <img src="/types/poison.jpeg" />;

                case "psychic":
                  return <img src="/types/psychic.jpeg" />;

                case "rock":
                  return <img src="/types/rock.jpeg" />;

                case "steel":
                  return <img src="/types/steel.jpeg" />;

                case "water":
                  return <img src="/types/water.jpeg" />;
              }
            })}
          </h2>
          <h2>Physical Stats:</h2>
          <p>
            <b>Weight:</b> {(data.weight * 0.1).toFixed(2)} kg <b>Height: </b>{" "}
            {(data.height * 0.1).toFixed(2)}m
          </p>
          <h2>Abilities:</h2>
          <h5>
            {" "}
            {data.abilities.map((a) => {
              const ability = a.ability.name;
              return `${ability.toUpperCase()}  `;
            })}
          </h5>
        </div>
      </div>

      <div className="pokeImage">
        <div className="search-new">
          <Search />
        </div>

        <img src={data.sprites.other.home.front_default} alt="" />
      </div>
    </div>
  );
};
export default Pokemon;
