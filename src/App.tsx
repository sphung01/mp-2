import PokemonContent from './components/PokemonContent.tsx';
import { useState, useEffect } from "react";
import { PokemonInfo } from "./interfaces/PokemonInfo.ts";
import styled from "styled-components";

const ParentDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: auto;
    border: 10px groove;
    border-radius: 15px;
    justify-content: center;
    background-color: red;
    font-size: calc(12px + 1vw);
    text-align: center;
    font-family: 'MyCustomFont';
    color: white;
`;

const StyledInput = styled.input`
    width: 50%;
    height: 40px;
    margin: auto;
    text-align: center;
    font-size: calc(50px + 1.5vw);
    font-family: 'MyCustomFont';
    border: 10px groove;
    border-radius: 15px;
    background-color: black;
    color: white;
`;

function App() {
    const [pokeNum, setPokeNum] = useState(1);
    const [data, setData] = useState<PokemonInfo[]>([]);

    useEffect(() => {
        async function fetchPokemonData(): Promise<void>{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`);
            const data: PokemonInfo = await response.json();
            setData([data]);
            const audio = new Audio(data.cries.latest);
            audio.play();
            console.log(response);
        }
        fetchPokemonData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was an error: " + e));
    }, [pokeNum]);

    return(
        <ParentDiv>
            <h1>Choose Your Pokemon!</h1>
            <StyledInput type="number" min={1} max={151} value={pokeNum} 
            onChange={(e) => {
                setPokeNum(Number(e.target.value));
            }}/>
            <PokemonContent data={data}/>
        </ParentDiv>
    );
}

export default App