import { Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Profile from "./Profile/Profile";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import ChaptersPage from "./Chapters/Chapters";
import CeoMessagePage from "./CeoMessage/CeoMessage";
import PrincipalMessage from "./Principle Message/PrincipleMessage";
import Jobs from "./Jobs/Jobs";
import EventsPage from "./EventsPage/EventsPage";
import AboutUsPage from "./AboutUs/AboutUs";
import ContactUsPage from "./ContactUs/ContactUs";
import CreateJob from "./CreateJob/CreateJob";
import JobApply from "./JobApply/JobApply";
import AdminPage from "./AdminPage/AdminPage";
import AdminJobs from "./AdminPage/AdminJobs";
import AuthorizedAlumni from "./AdminPage/AuthorizedAlumni";
import AppliedStudents from "./AdminPage/AppliedStudents";
import AlumniDirectory from "./Alumni Directory/AlumniDirectory";
import AdminLogin from "./Admin Login/AdminLogin";
import Event from "./Veera Sir Event/Event";
import { useAdminAuthContext } from "../hooks/useAdminAuthContext";
import { useAuthContext } from "../hooks/useAuthContext";
import UnAuthorizedAlumni from "./AdminPage/UnAuthorizedAlumni";
import Students from "./AdminPage/Students";
import AlumniTestimonials from "./Alumni Testimonials/AlumniTestimonials";
import Events from "./EventsPage/Events";
import EventDetails from "./EventsPage/EventDetails";
import Achievements from "./Achievements/Achievements";
function App() {
  const { admin } = useAdminAuthContext();
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {user && <Route path="/profile" element={<Profile />} />}
      <Route path="/chapters" element={<ChaptersPage />} />
      <Route path="/ceomessage" element={<CeoMessagePage />} />
      <Route path="/principalmessage" element={<PrincipalMessage />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/eventspage" element={<Events />} />
      <Route path="/event/:name" element={<EventDetails />} />
      <Route path="/alumniDirectory" element={<AlumniDirectory />} />
      <Route path="/alumniTestimonials" element={<AlumniTestimonials />} />
      <Route path="/achievements" element={<Achievements />} />

      <Route path="/aboutus" element={<AboutUsPage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
      <Route path="/create-job" element={<CreateJob />} />
      <Route path="/apply/:jobId" element={<JobApply />} />
      <Route path="/event1" element={<Event />} />

      {!admin && <Route path="/adminlogin" element={<AdminLogin />} />}
      {admin && <Route path="/adminpage" element={<AdminPage />} />}
      {admin && (
        <Route
          path="/applied-students/:jobId"
          element={<AppliedStudents />}
        />
      )}
      {admin && (
        <Route
          path="/getJobs"
          element={<AdminJobs />}
        />
      )}
      {admin && (
        <Route
          path="/authorizedAlumni"
          element={<AuthorizedAlumni />}
        />
      )}
      {admin && (
        <Route
          path="/unauthorizedAlumni"
          element={<UnAuthorizedAlumni />}
        />
      )}
      {admin && (
        <Route
          path="/students"
          element={<Students />}
        />
      )}
    </Routes>
  );
}

export default App;
