import { AppLayout } from '../../components/AppLayout';

export default function NewPost(props) {
  console.log('NEW POST PROPS:', props);
  return (
    <div>
      <h1></h1>
    </div>
  );
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
