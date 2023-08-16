import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next"

function Home() {
  return (
    <main className="">
      
    </main>
  )
}

export default Home;

// "codegen": "graphql-codegen --config codegen.yml",
// export const getServerSideProps: GetServerSideProps = async (context) =>{

// let friends;

// try {
//   let response = await fetch(process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL as string, {
//     method: "POST",
//     headers: {
//       'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET as string
//     },
//     body: JSON.stringify({
//         query: `query{
//           Todos {
//             id
//             name
//             task
//           }
//         }`
//       })
//   })

//   let friends = await response.json();
//   const data = await friends.data;

//   console.log("data: ", data);
  
// } catch (error) {
//   console.log("error: ", error)
// }

//  return {
//   props: {friends}
//  };
// }