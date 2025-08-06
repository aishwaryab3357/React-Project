import { useEffect,useState } from "react";

function GithubCard({username}){

    const [profile,setProfile]=useState(null);

    useEffect(()=>{
         fetch(`https://api.github.com/users/${username}`)
    
        .then(res => res.json())
        .then(data =>setProfile(data));
     },[username]);

    if(!profile) return <p>Loading</p>;
    return(
        <>
          <h1>Users profile</h1>
          <img src={profile.avatar_url} alt="" height={100} width={100}/>
          <p>{profile.name}</p>
          <p>{profile.type}</p>
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
           Visit Profile
            </a>
        </>
    );
}
export  default GithubCard