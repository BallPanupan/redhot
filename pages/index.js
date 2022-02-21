import { Container} from "react-bootstrap";
import MainContent from "../components/MainContent";
import CardList from "../components/CardList";

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Phuket Red Hot</title>
      </Head>
        
      <Container>

        <MainContent/>
        <CardList/>

      </Container>
    </>
  );
}