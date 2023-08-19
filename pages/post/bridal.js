import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import {Bridal} from '../../components/AppLayout/Bridal';

export default function NewPost(props) {
    console.log('NEW POST PROPS: ' , props);
  return (
     <div>
      <h1></h1>
     </div>
    );
  };
   

  NewPost.getLayout = function getLayout(page, pageProps){
    return <Bridal {...pageProps}>{page}</Bridal>
  }
  export const getServerSideProps = withPageAuthRequired(() =>{
    
    return {
      props:{},
    };
  });