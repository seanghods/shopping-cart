import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav-bar-section h-screen flex flex-col w-1/6">
      <div className="nav-bar flex-1 m-7 bg-black rounded-lg">
        <div className="nav-bar-links p-11 pt-20 flex flex-col gap-20 text-white">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              ['text-md hover:font-bold', isActive ? 'font-bold' : null].join(
                ' ',
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              ['text-md hover:font-bold', isActive ? 'font-bold' : null].join(
                ' ',
              )
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              ['text-md hover:font-bold', isActive ? 'font-bold' : null].join(
                ' ',
              )
            }
          >
            Cart
          </NavLink>
        </div>
      </div>
    </div>
  );
}
