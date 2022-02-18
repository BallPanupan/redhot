import { Container} from "react-bootstrap";
import NavbarMenu from "../components/NavbarMenu";

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NavbarMenu/>

      <Container>
        <div className="content-header">
          <h1>Hello Kal</h1>
        </div>




      </Container>
    </>
  );
}
