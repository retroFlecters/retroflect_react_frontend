import Layout from '../components/Layout'
import Card from 'react-bootstrap/Card'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
    <Layout>
      <div className="app">
          <header>
              <h2>Welcome to retroFlect</h2>
          </header>
        <div className="container">
          <div className="jumbotron">


            {props.posts.map(post => (

              <Card style={{ width: '45rem', margin: '10px' }}>
                 <Card.Header>
                {FormatDate(post.entryDate)}

                </Card.Header>
                <Card.Body>

               {post.diary}
               <br/>
               <br/>
               </Card.Body>
              </Card>


            ))}
<br/>
          </div>
      </div>
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
