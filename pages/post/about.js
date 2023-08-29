
import {Aboutus} from '../../components/AppLayout/Aboutus';
export default function NewPost(props) {
    console.log('NEW POST PROPS: ' , props);
  return (
     <div>
      <h1></h1>
     </div>
    );
  };
   

  NewPost.getLayout = function getLayout(page, pageProps){
    return <Aboutus {...pageProps}>{page}</Aboutus>
  }
  export const getServerSideProps = () => {
    return {
      props: {},
    };
  };
  