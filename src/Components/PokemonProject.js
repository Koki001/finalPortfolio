// PokemonProject.js
import Button from "@mui/material/Button";

const PokemonProject = function () {
  return (
    <div className="singleProject">
      <h3>Pokemon Pokedex</h3>
      <div className="linkButtons">
        <a
          className="liveLink"
          href="https://yadapokedexkoki.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Live Link</Button>
        </a>
        <a
          className="codeLink"
          href="https://github.com/Koki001/pokedex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Code Link</Button>
        </a>
      </div>
      <h4>
        JavaScript <span>||</span> CSS <span>||</span> REST APIs <span>||</span>{" "}
        HTML
      </h4>
      <p>
        A Pokedex application for Pokemon lovers and newcomers alike. Paired
        with a very simple and descriptive design, this application allows the
        user to familiarize themselves with every Pokemon in existence. <br />
        <br /> Using the PokeAPI, detailed Pokemon information is fetched and
        displayed, with the user having a choice to randomize the results or
        search for a specific Pokemon to look up their stats. There user can
        also choose to display several Pokemon at once with less detailed
        information, but is also given the option to directly visit Pokemon's
        official site for the specific Pokemon of their choosing.
      </p>
      <img className="ashPika" src="./assets/ashPika.gif" />
    </div>
  );
};

export default PokemonProject;
