# Instructions

- Note: ensure versio is node 16.8.0 ; will run into error if higher version of node due to dependencies
- create a .env file in root with this:
  - REACT_APP_DB_URL=mongodb+srv://USERNAMEHERE:PASSWORDHERE@DBNAME.mongodb.net/COLLECTIONNAME?retryWrites=true&w=majority
- npm install
- npm run dev

# Tutorial contents

- Note: Most of the NextJS specific things are in the pages folder. The components folder are mostly normal react stuff with the exception of a few files
- This tutorial briefly demonstrates the core NextJS features
- Creating REST APIs which will be served from the server that hosts the next app (api folder)
- Pre-rendering Pages using getStaticProps and getServerSideProps (pages > meetup routes e.g. pages > index.js)
- Getting paths dynamically using getStaticPath (pages > [meetupId])
- Folder structure for pages example
- Calling the API created in the API folder (pages > new-meetup)
- Navigation using useRouter (components > layout > MainNavigation)
- Adding metadata using Head (e.g. pages > index.js)

# Deployment

- Vercel is a good option. We can link the deployment to our github repo. We can even automate re-deployment upon pushing a new commit to the repo.
