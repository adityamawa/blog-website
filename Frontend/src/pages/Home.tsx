import { Link } from "react-router-dom";
import { HomeAppbar } from "../components/Appbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HomeAppbar />
      <div
        className="min-h-screen flex flex-col justify-between bg-hero-image bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://static.wixstatic.com/media/0784b1_7c171ccfee9c478982bfa6208247a648~mv2.jpg/v1/fill/w_1726,h_637,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0784b1_7c171ccfee9c478982bfa6208247a648~mv2.jpg")',
        }}
      >
        <div className="ml-8 flex flex-col gap-10 pb-20 max-w-3xl">
          <div className="text-[70px] font-extrabold text-white">
            Stay curious.
          </div>
          <p className="text-3xl text-white">
            Discover stories, thinking, and expertise <br /> from writers on any
            topic.
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <Link to={"/signin"}>
            <button className="bg-black hover:bg-white border border-black hover:text-black text-white rounded-3xl px-5 py-2.5">
              Sign in
            </button>
          </Link>
        </div>
      </div>
      <div className="pl-9 mt-10 border-t pt-10">
        <p className="font-bold text-[50px] mb-4">Explore, Engage, Evolve</p>
        <p className="text-[17px] leading-7">
          Your digital hub for enriching content, thoughtful insights. Embark on
          a journey of discovery as you delve into a world of knowledge,
          inspiration, and creativity.
        </p>
        <p className="text-[17px] leading-7 mt-4">Discover Our Categories</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard title="Technology" description="Explore the latest in tech." />
          <CategoryCard title="Health" description="Health tips and news." />
          <CategoryCard title="Lifestyle" description="Insights into modern living." />
        </div>
      </div>
      <Footer />
    </>
  );
};

const CategoryCard = ({ title, description }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
};

export default Home;
