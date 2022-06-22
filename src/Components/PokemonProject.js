// PokemonProject.js
import Button from "@mui/material/Button";

const PokemonProject = function () {
  return (
    <div className="singleProject">
      <h3>Pokemon Pokedex</h3>
      <div className="linkButtons">
        <a
          href="https://yadapokedexkoki.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Live Link</Button>
        </a>
        <a
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
        This project was made in collaboration with Yadavan Aravinthan during
        Juno College's Web Dev Bootcamp. We used data from an API to bring
        functionality to our site all while making sure it looks great on all
        screen sizes! This site lets the user familiarize with or explore all
        Pokemon.
      </p>
    </div>
  );
};

export default PokemonProject;
