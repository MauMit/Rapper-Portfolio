export default function Welcome({name, age}){

    console.log(name, age)
        return (
            <div>
        
        <h1> {name}!</h1> 
        <p> Du är {age} år gammal</p>
        
        </div>
            );
        }