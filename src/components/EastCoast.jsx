
import RapCard from "./RapCard";
import eastCoastRappers from "../data/eastCoastRappers";

export function EastCoast(){

    return (
        <div>
    
        <RapCard rapper = {eastCoastRappers.rapper1}/>
        <RapCard rapper = {eastCoastRappers.rapper2}/>
       <RapCard rapper = {eastCoastRappers.rapper3}/>
       <RapCard rapper = {eastCoastRappers.rapper4}/>
       <RapCard rapper = {eastCoastRappers.rapper5}/>
       <RapCard rapper = {eastCoastRappers.rapper6}/>
       <RapCard rapper = {eastCoastRappers.rapper7}/>
    
    
    </div>
        );
    }