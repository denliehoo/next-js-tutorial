import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

// props from our getStaticProps function below
const HomePage = (props) => {
  return (
    <>
      {/* Allows us to set our page name and metadata etc that will be useful for SEO  */}
      <Head>
        <title>React meetups</title>
        <meta
          name="description"
          content="Browse a huge list of active React Meeups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// Note: NextJS will execute this getStaticProps function first and wait for it to resolve
// and waits for us to get data before it executes the HomePage component code.
// Thus, upon the first render, our fetched api data will be rendered and thus it will be in the page source (Have SEO benefits)
// Note must name it as such
// this code only runs during build process. However, if revalidate is also specified. That it will re-generate the page every x seconds
export async function getStaticProps() {
  // fetch data from API
  const DB_URL = process.env.REACT_APP_DB_URL;

  const client = await MongoClient.connect(DB_URL);
  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find().toArray();
  client.close();

  // Note: we must ALWAYS return an object with a props property
  // then, we can use the props.xxx in our component
  return {
    props: {
      meetups: meetups.map((m) => ({
        title: m.title,
        address: m.address,
        image: m.image,
        id: m._id.toString(),
      })),
    },
    revalidate: 10, // causes the page to re-pregenerate every 10 seconds on the server.
  };
}

// this code ONLY runs on the server
// this code will cause the page to pre-generate the page after every request
// export async function getServerSideProps(){
//   // fetch data from API
//   const dataFromAPI = DUMMY_MEETUPS;
//   return {
//     props: {
//       meetups: dataFromAPI,
//     },
//   }
// }

export default HomePage;

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meet up",
    image:
      "https://www.explore.com/img/gallery/50-of-the-most-mesmerizing-places-on-earth/intro-1667492436.webp",
    address: "address 1",
    description: "meet up 1",
  },
  {
    id: "m2",
    title: "Sec meet up",
    image:
      "https://www.explore.com/img/gallery/50-of-the-most-mesmerizing-places-on-earth/intro-1667492436.webp",
    address: "address 2",
    description: "meet up 2",
  },
];
