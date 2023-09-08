import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

const NewMeetUpPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (meetupData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    console.log(data);

    router.push("/");
  };
  return (
    <>
      <Head>
        <title>New React Meetup</title>
        <meta name="description" content="Add your own meetup!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetUpPage;
