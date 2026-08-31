import { AboutUs } from "./aboutUs";
import { ContactUs } from "./contactUs";
import { FAQ } from "./FAQ";

export function Home() {
  return (
    <div className="custom-bg-light dark:custom-bg custom-dark transition-colors duration-300" style= {{minHeight: 'calc(100vh - 5rem)'}}>
      <AboutUs />
      <FAQ />
      <ContactUs />
    </div>
  );
}