import { Container} from "react-bootstrap";
import MainContent from "../components/MainContent";
import CardList from "../components/CardList";
import BtnWarning from "../components/buttons/BtnWarning/BtnWarning";

import Head from 'next/head'

export default function Home() {
  let totlaCard = [
    {
      img:"xxx.jpg",
      title:"Card Title 1",
      content: "Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.",
      footer : "22-2-2022"
    },
    {
      img:"xxx.jpg",
      title:"Card Title 2",
      content:"component abstraction for any level of detail. A button, a form, a dialog, a screen: in React",
      footer : "22-2-2022"
    },
    {
      img:"xxx.jpg",
      title:"Card Title 3",
      content:"apps, all those are commonly expressed as components.",
      footer : "22-2-2022"
    }
  ];

  return (
    <>
      <Head>
        <title>Phuket Red Hot</title>
      </Head> 
        
      <Container className="b-yellow">

        <MainContent/>
        
        <div className="card-container">
          <h1>Available</h1>
          <div className="card-content">
            {
              totlaCard.map(data => {
                return (
                  <CardList content={data}/>
                )
              })
            }
          </div>
        </div>

        <div className="align-center">
          <BtnWarning text={'See All'}/>
        </div>

      </Container>
    </>
  );
}