import Footer from '../../components/Computer/Footer';
import ComputerHeader from '../../components/Computer/Header/index'
import MainPage from '../../components/Computer/Main';
export default function ComputerPage() {
    return (
      <>
        <div className="computer-page-frame">
         <ComputerHeader/>
         <MainPage/>
         <Footer/>
        </div>
      </>
    );
  }