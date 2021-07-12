import MainGrid from "../src/components/MainGrid/index.js";
import Box from "../src/components/Box/index.js";
import {AlurakutMenu, OrkutNostalgicIconSet} from "../src/lib/AlurakutCommons.js";
import {ProfileRelationsBoxWrapper} from "../src/components/ProfileRelationsComponents/index.js";



function ProfileSideBar (props) {

  return(
    <Box>
    <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius:"80px"}}/>
  </Box>
  )
}

export default function Home() {

  const githubUser = "Andrechieregato"
  const favoritePeople = ["juunegreiros", "omariosouto", "peas", "rafaballerini", "marcobrunodev", "felipefialho"]
  return (
    <>
  <AlurakutMenu/>
  <MainGrid>

    <div className="profileArea" style={{gridArea:"profileArea"}}>
     <ProfileSideBar githubUser={githubUser}/>
    </div>
    
    <div className="welcomeArea" style={{gridArea:"welcomeArea"}}>
      <Box>
      <h1 className="title">Welcome</h1>
      </Box>
      <OrkutNostalgicIconSet/>
    </div>
    <div className="profileRelationsArea" style={{gridArea:"profileRelationsArea"}}>
      <ProfileRelationsBoxWrapper>


      <h2 className="smallTitle">Comunity people ({favoritePeople.length})</h2>

    <ul>
      {favoritePeople.map((itemAtual) => {
        return (

          <li>
          <a href={`/users/${itemAtual}`} key={itemAtual}>
          <img src={`https://github.com/${itemAtual}.png`} />
          <span>{itemAtual}</span>
          </a>
          </li>
         
        )

      })}
      </ul>
</ProfileRelationsBoxWrapper>
    </div>

   
   
  </MainGrid>
  </>
  )
}
