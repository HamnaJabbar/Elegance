import { Readytowear } from '../../components/AppLayout/Readytowear';

export default function NewPost(props) {
  console.log('NEW POST PROPS:', props);
  return (
    <div>
      <h1>New Post Page</h1>
    </div>
  );
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <Readytowear {...pageProps}>{page}</Readytowear>;
};

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
