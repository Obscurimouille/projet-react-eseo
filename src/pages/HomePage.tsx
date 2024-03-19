import Footer from "../components/Footer";
import Header from "../components/Header";
import Shop from "../components/Shop";

function HomePage() {
  return (
    <div className="h-dvh flex flex-col">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <Shop />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
