
import {Scarfs} from '../../components/AppLayout/Scarfs';

export default function NewPost(props) {
    console.log('NEW POST PROPS: ' , props);
  return (
     <div>
      <h1></h1>
     </div>
    );
  };
   

  NewPost.getLayout = function getLayout(page, pageProps){
    return <Scarfs {...pageProps}>{page}</Scarfs>
  }
  export const getServerSideProps = () => {
    return {
      props: {},
    };
  };
  