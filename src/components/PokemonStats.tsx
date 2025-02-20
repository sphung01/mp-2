import { StatProps } from "../interfaces/PokemonInfo";
import styled from "Styled-Components";

const StatContainer = styled.div`
    margin: 0 5px;
    display: flex;
    flex-direction: row;
`;

const StatBar = styled.div`
    background-color: white;
    margin: 0 5px;
`;

export default function PokemonStats({stat}:{stat: StatProps}) {
    const maxStatValue = 225;
    const baseStatValue = stat.base_stat;
    const percentageBar = (baseStatValue/maxStatValue) * 100;
    return(
        <p>
            <StatContainer>
                <strong>{stat.stat.name.toUpperCase()}: </strong>
                {stat.base_stat}  
                <StatBar style={{ width:`${percentageBar}%` }}></StatBar>
            </StatContainer>
        </p>
    )
}