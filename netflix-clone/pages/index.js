import Head from "next/head";

import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import Showcase from "../components/Showcase";
import { getVideos } from "../lib/videos";

export async function getServerSideProps() {
  const disney = await getVideos("disney trailer");
  const marvel = await getVideos("marvel trailer");
  const dc = await getVideos("dc");
  const travel = await getVideos("travel");

  console.log(dc);

  return {
    props: {
      disney,
      marvel,
      dc,
      travel,
    },
  };
}

export default function Home({ disney, marvel, dc, travel }) {
  return (
    <div>
      <Head>
        <title>Home - Netflix</title>
        <meta name="description" content="Chill with netflix" />
        <link
          rel="icon"
          href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Head>
      <NavBar email="valananto@gmail.com" />
      <Banner
        imageUrl="https://occ-0-6288-3663.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABScPSrjZb3ycys1a5ZgLZVB_6N4TtHOGZXkAw8VBldRiNLx_Xt9rLXJtmhe8v0s_af4UsFmzLZgZ4Q6vUrLZrLso2kXl.webp?r=58f"
        title="Concussion"
        subtitle="This drama is based on the true story of a forensic pathologist who made a controversial link between NFL players' concussions and brain disorders"
      />
      <Showcase size="small" data={dc} title="DC" />
      <Showcase size="medium" data={disney} title="Disney" />
      <Showcase size="large" data={marvel} title="Marvel" />
      <Showcase size="small" data={travel} title="Travel" />
    </div>
  );
}
