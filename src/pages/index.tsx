import type { NextPage } from 'next';
import Navbar from '../components/navbar';
import Landing from '../pages/landing/Landing';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
};

export default Home;
