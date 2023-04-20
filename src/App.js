import './reset.css';
import './App.css';
import Navigation from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import SpecialistList from './components/Specialists/SpecialistList';
import Offers from './components/Offers/Offers';

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <SpecialistList />
      <Offers />
      <Footer />
    </>
  );
};
//
export default App;
