import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";

//passing props from the fetch method serer processed
//we can pass the whole props as "props" or we can {exploreData}
//this is called destructring
export default function Home({exploreData}) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      {/* max width of 7xl and horizontally center */}
      <main className="mx-auto max-w-7xl px-10 sm:px-16">

        {/* Explore Section */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-6">Explore Nearby</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          xl:grid-cols-4">
            {/* ?. option check of value */}
          {exploreData?.map((item => (
            <SmallCard 
            // for now unique ID
            key={item.img}
            img={item.img} 
            distance={item.distance} 
            location={item.location}/>
          )))}
          </div>
        </section>


        {/* Live Anywhere Section */}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}
