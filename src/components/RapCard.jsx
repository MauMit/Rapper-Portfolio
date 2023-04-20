import Welcome from './Welcome';
import ProfilePic from './ProfilePic.jsx';
import Albums from './Albums';

export default function RapCard({rapper}){
    console.log()


return (
    <div className = 'rapper-card'>

<ProfilePic imgSrc={rapper.imgSrc}/>
<Welcome name ={rapper.name} age= {rapper.age}/>
<Albums albums ={rapper.albums} />



</div>
    );
}
