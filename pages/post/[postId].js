// import { withPageAuthRequired } from "@auth0/nextjs-auth0";
export default function Post() {
    return (
     <div>
      <h1>this is dynamic post page</h1>
     </div>
    );
  }
  export const getServerSideProps = () => {
    return {
      props: {},
    };
  };
  