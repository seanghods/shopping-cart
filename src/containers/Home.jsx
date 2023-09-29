import homePic from '../assets/homepage.png';

export default function Home({ navigateShop }) {
  return (
    <div className="flex flex-col items-center text-center gap-10 md:gap-20">
      <div className="title text-5xl mt-14 m-3 md:m-14 font-bobsburgers">
        <h1>Welcome to The Sean Shop</h1>
      </div>
      <p className="text-2xl font-bobsburgers">
        The one stop shop for all your possible needs!
      </p>
      <img src={homePic} className="w-[1100px]]" alt="fam pic" />
      <button
        className="bg-[#3CAEA3] tracking-widest rounded-md px-10 py-5 text-white font-bobsburgers text-2xl shadow-md animate-bounce transform transition duration-500 hover:scale-110"
        onClick={navigateShop}
      >
        Shop Now
      </button>
    </div>
  );
}
