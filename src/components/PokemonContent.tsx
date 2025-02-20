import { PokemonInfo } from "../interfaces/PokemonInfo.ts";
import PokemonStats from "./PokemonStats.tsx";
import styled from "Styled-Components";

const StyledPokeDexInfoDiv = styled.div`
    border: 10px;
    border-style: groove;
    border-radius: 15px;
    width: 50vw;
    background-color: black;
    margin: 5rem auto;
    color: white;
    font-size: calc(12px + 1vw);
`;

const StyledImgDiv = styled.div`  
    height: 5vh;
`;

export default function PokemonContent(props : { data:PokemonInfo[] } ){
    return(
        <div>
            {
                props.data.map((pokemon: PokemonInfo) =>
                    <div key={pokemon.id}>
                        <h1>{pokemon.name.toUpperCase()}</h1>
                        <StyledImgDiv>
                            <img src={pokemon.sprites.other.showdown.front_default} alt={`This is a ${pokemon.name}`}/>
                        </StyledImgDiv>
                        <StyledPokeDexInfoDiv>
                            <h2>PokeDex ID: {pokemon.id}</h2>
                            <h2>Weight: {pokemon.weight/10} kg</h2>
                            <h2>Height: {pokemon.height/10} m</h2>
                            {
                                pokemon.stats.map(s => <PokemonStats stat={s}/>) 
                            }
                        </StyledPokeDexInfoDiv>
                    </div>
                )
            }
        </div>
    );
}