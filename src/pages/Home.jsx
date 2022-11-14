import React from "react";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Adventure from "../components/Adventure";
import Nft from "../components/Nft";
import Footer
 from "../components/Footer";
function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Adventure />
      <Nft />
      <Footer />
    </div>
  );
}

export default Home;
