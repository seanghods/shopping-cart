import homePic from '../assets/homepage.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/shop');
  }
  return (
    <div className="flex flex-col items-center gap-10 md:gap-20">
      <div className="title text-5xl m-14 font-bobsburgers">
        <h1>Welcome to The Sean Shop</h1>
      </div>
      <p className="text-2xl font-bobsburgers">
        The one stop shop for all your possible needs!
      </p>
      <img src={homePic} className="w-[1100px]]" alt="fam pic" />
      <button
        className="bg-[#3CAEA3] tracking-widest rounded-md px-10 py-5 text-white font-bobsburgers text-2xl shadow-md animate-bounce transform transition duration-500 hover:scale-110"
        onClick={handleClick}
      >
        Shop Now
      </button>
    </div>
  );
}
