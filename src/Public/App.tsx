import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { NavBar, Home, Events_Schedule, Resources, Forms, Tenets, Pledges, Judo, Forms12,
  Forms11, Forms10, Forms9, Forms8, Forms7, Forms6, Forms5, Forms4, Forms3, Forms2, Forms1, Forms0, Footer,
  TermsAndConditions, PrivacyPolicy, CookiesPolicy
} from './index';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<div>Team Component</div>} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events-schedule" element={<Events_Schedule />} />
          <Route path="/resources/info/forms" element={<Forms />} />
          <Route path="/resources/info/tenets" element={<Tenets />} />
          <Route path="/resources/info/pledges" element={<Pledges />} />
          <Route path="/resources/info/judo" element={<Judo />} />
          <Route path="/resources/info/forms/12" element={<Forms12 />} />
          <Route path="/resources/info/forms/11" element={<Forms11 />} />
          <Route path="/resources/info/forms/10" element={<Forms10 />} />
          <Route path="/resources/info/forms/9" element={<Forms9 />} />
          <Route path="/resources/info/forms/8" element={<Forms8 />} />
          <Route path="/resources/info/forms/7" element={<Forms7 />} />
          <Route path="/resources/info/forms/6" element={<Forms6 />} />
          <Route path="/resources/info/forms/5" element={<Forms5 />} />
          <Route path="/resources/info/forms/4" element={<Forms4 />} />
          <Route path="/resources/info/forms/3" element={<Forms3 />} />
          <Route path="/resources/info/forms/2" element={<Forms2 />} />
          <Route path="/resources/info/forms/1" element={<Forms1 />} />
          <Route path="/resources/info/forms/0" element={<Forms0 />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
