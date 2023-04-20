
import RapCard from "./RapCard";
import westCoastRappers from "../data/westCoastRappers";

export function WestCoast(){

    return (
        <div>
    
        <RapCard rapper = {westCoastRappers.rapper1}/>
        <RapCard rapper = {westCoastRappers.rapper2}/>
       <RapCard rapper = {westCoastRappers.rapper3}/>
       <RapCard rapper = {westCoastRappers.rapper4}/>
       <RapCard rapper = {westCoastRappers.rapper5}/>
       <RapCard rapper = {westCoastRappers.rapper6}/>
       <RapCard rapper = {westCoastRappers.rapper7}/>
    
    
    </div>
        );
    }