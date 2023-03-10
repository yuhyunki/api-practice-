import Menubar from "../Component/Menubar";
import MainBody from "../Component/MainBody";
import Footer from "../Component/Footer";
import '../reset.css';
import '../MainPage.css';

function MainPage() {

    return (
        <div className="container">
            <Menubar/>
            <MainBody/>    
            <Footer/>    
        </div>
    );
}

export default MainPage;