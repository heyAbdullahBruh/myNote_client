import About from "@/components/About/About";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/contact";
import Work from "@/components/portfolio/Work";
import Service from "@/components/service/service";
// import styles from "./page.module.css";

export default function Home() {
  return (       
  <>
    <Banner/><hr />
    <About/><hr />
    <Service/><hr />
    <Work/><hr />
    <Contact/>
  </>
  );
};
