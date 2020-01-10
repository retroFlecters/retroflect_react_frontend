import Layout from '../components/Layout'
import Carousel from 'react-bootstrap/Carousel'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
    <Layout>
      <div className="app">
          <header>
              <h2>Welcome to retroFlect</h2>
          </header>
          <ul>
            {props.posts.map(post => (
              <li key={post.id}>
                {FormatDate(post.entryDate)}
                {post.diary}
              </li>
            ))}
          </ul>
      </div>
    </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://retroflect-core.herokuapp.com/api/entries');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    posts: data.map(entry => entry)
  };
};

const FormatDate = (date) => {
  let postDate = new Date(date);
  return postDate.toLocaleDateString()
};

export default Index;
