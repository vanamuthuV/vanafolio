import { Header } from "./sections/header";
import { Home } from "./sections/home";
import { AboutMe } from "./sections/aboutme";
import { GetToKnowMe } from "./sections/gettoknowme";
import { Projects } from "./sections/projects";
import { ContactUs } from "./sections/contactus";
import { Footer } from "./sections/footer";

function App() {
  return (
    <div className="text-[#111111]">
      <Header />
      <Home />
      <AboutMe />
      <GetToKnowMe />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
