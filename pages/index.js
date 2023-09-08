import MeetupList from "../components/meetups/MeetupList";

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

// props from our getStaticProps function below
const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// Note: NextJS will execute this getStaticProps function first and wait for it to resolve
// and waits for us to get data before it executes the HomePage component code.
// Thus, upon the first render, our fetched api data will be rendered and thus it will be in the page source (Have SEO benefits)
export async function getStaticProps() {
  // fetch data from API
  const dataFromAPI = DUMMY_MEETUPS;
  // Note: we must ALWAYS return an object with a props property
  // then, we can use the props.xxx in our component
  return {
    props: {
      meetups: dataFromAPI,
    },
    revalidate: 10, // causes the page to re-pregenerate every 10 seconds
  };
}

export default HomePage;
