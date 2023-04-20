// export default function Likes({likes}){
    export default function Albums ({albums}){
   
    console.log(albums)

    return(
    <ul>
      
        {albums.map(album => <li key = {album.id}>{album.album}</li>)} 
    </ul>  
    )
}

 //kan döpa "like" till vad som helst
 //övanför är två sätt att göra det på, den andra går genom hela array