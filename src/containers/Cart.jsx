export default function Cart({ cart, removeFromCart, navigateShop }) {
  const subtotal =
    Math.round(
      cart.reduce((acc, next) => {
        return acc + next.price;
      }, 0) * 100,
    ) / 100;
  const tax = Math.round(subtotal * 0.095 * 100) / 100;
  const finalPrice = Math.round((subtotal + tax) * 100) / 100;
  return (
    <>
      <h1 className="mt-7 mr-2 md:m-7 text-5xl font-bobsburgers">
        Your Cart - {cart.length}
      </h1>
      {cart.length == 0 ? (
        <div className="empty-cart flex flex-col gap-10 items-center">
          <h1 className="font-bobsburgers text-2xl tracking-widest">
            Your cart is empty! Go check out our store items here:
          </h1>
          <button
            className="bg-[#3CAEA3] tracking-widest rounded-md px-10 py-5 text-white font-bobsburgers text-2xl shadow-md transform transition duration-500 hover:scale-110"
            onClick={navigateShop}
          >
            Shop Now
          </button>
        </div>
      ) : (
        <>
          <div className="items mt-7 mr-2 md:m-7 grid grid-cols-[repeat(auto-fill,minmax(100px,500px))] gap-10">
            {cart.map((item, index) => {
              return (
                <div
                  className="flex flex-col gap-5 font-bobsburgers text-2xl tracking-widest items-center p-10 rounded-lg bg-white shadow-lg shadow-gray-400"
                  key={index}
                >
                  <div className="image flex-1 flex justify-center">
                    <img
                      src={item.image}
                      draggable="false"
                      className="w-1/4"
                      alt="pic of item"
                    />
                  </div>
                  <div className="title font-bold text-center">
                    {item.title}
                  </div>
                  <div className="price font-bold text-center">
                    ${item.price}
                  </div>
                  <button
                    id={index}
                    onClick={e => {
                      removeFromCart(e);
                    }}
                    className="bg-[#ED553B] hover:bg-[#b5432f] tracking-widest rounded-md px-10 py-3 text-white font-bobsburgers shadow-md transform transition duration-500 hover:scale-105"
                  >
                    Remove from Cart
                  </button>
                </div>
              );
            })}
          </div>
          <div className="final flex gap-10">
            <div className="prices text-2xl md:text-5xl">
              <div className="price font-bobsburgers">
                Subtotal: ${subtotal}
              </div>
              <div className="tax font-bobsburgers">9.5% Tax: ${tax}</div>
              <div className="total font-bobsburgers">
                Final Price: ${finalPrice}
              </div>
            </div>
            <div className="checkout flex items-center">
              <button className="bg-[#F6D55C] hover:bg-[#c4a94a] tracking-widest rounded-md px-10 py-5 text-white font-bobsburgers md:text-2xl shadow-md transform transition duration-500 hover:scale-110">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
