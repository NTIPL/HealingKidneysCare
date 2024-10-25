import Homepage from "./Components/homepage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import Locations from "./Components/Locations";
import PatientReviews from "./Components/PatientReviews";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <PatientReviews />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
