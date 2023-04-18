import Aside from "@/components/aside/Aside";
import Footer from "@/components/footer/Footer";
import Main from "@/components/main/Main";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
