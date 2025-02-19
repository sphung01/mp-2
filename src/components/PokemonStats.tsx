import { StatProps } from "../interfaces/PokemonInfo";

export default function PokemonStats({stat}:{stat: StatProps}) {
    return(
        <p>
            <strong>{stat.stat.name.toUpperCase()}: </strong>{stat.base_stat}
        </p>
    )
}