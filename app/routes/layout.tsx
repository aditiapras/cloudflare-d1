import { Outlet } from "react-router";
import FooterSection from "~/components/footer-section";
import Navbar from "~/components/navbar";
export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <FooterSection />
    </div>
  );
}
