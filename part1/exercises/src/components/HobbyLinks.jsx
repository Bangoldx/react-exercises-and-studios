export default function HobbyLinks(){
    const hobbyLinks = ["https://www.thingiverse.com/", "https://boardgamegeek.com/", "https://www.playstation.com/en-us/"]
    return (
        <div>
            <h3>My Hobbies</h3>
            <a href= {hobbyLinks[0]}>3D Printing</a><br />
            <a href= {hobbyLinks[1]}>Board Games</a><br />
            <a href= {hobbyLinks[2]}>Playstation 5</a>
        </div>
    )
}