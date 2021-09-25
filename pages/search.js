import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResult }) {
  const router = useRouter();

  console.log(searchResult);

  //destructure the router query
  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300 Stays - {range} - for {numberOfGuests} Guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>

          <div
            className="hidden md:inline-flex space-x-3
                                    mb-5 text-gray-800 whitespace-nowrap"
          >
            <p className="customButton">Cancellation Flexibility</p>
            <p className="customButton">Type of Place</p>
            <p className="customButton">Price</p>
            <p className="customButton">Rooms and Beds</p>
            <p className="customButton">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResult.map(
              ({ img, location, title, total, description, star, price }
                ) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  total={total}
                  description={description}
                  star={star}
                  price={price}
                />
                )
            )}
          </div>
        </section>
        

        {/* map box section */}
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
                  <Map searchResults={searchResult}/>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}
