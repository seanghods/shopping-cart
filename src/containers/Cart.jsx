export default function Cart({ cart, removeFromCart }) {
  const subtotal =
    Math.round(
      cart.reduce((acc, next) => {
        return acc + next.price;
      }, 0) * 100,
    ) / 100;
  const tax = Math.round(subtotal * 1.095 * 100) / 100;
  const finalPrice = subtotal + tax;
  console.log(typeof subtotal);
  return (
    <>
      <h1 className="m-7 text-5xl font-bobsburgers">
        Your Cart - {cart.length}
      </h1>
      <div className="items m-7 grid grid-cols-[repeat(auto-fill,minmax(100px,500px))] gap-10">
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
              <div className="title font-bold text-center">{item.title}</div>
              <div className="price font-bold text-center">${item.price}</div>
              <button
                id={index}
                onClick={e => {
                  removeFromCart(e);
                }}
                className="bg-[#ED553B] tracking-widest rounded-md px-10 py-3 text-white font-bobsburgers shadow-md transform transition duration-500 hover:scale-105"
              >
                Remove from Cart
              </button>
            </div>
          );
        })}
      </div>
      <div className="price font-bobsburgers text-5xl">
        Subtotal: ${subtotal}
      </div>
      <div className="tax font-bobsburgers text-5xl">9.5% Tax: ${tax}</div>
      <div className="total font-bobsburgers text-5xl">
        Final Price: ${finalPrice}
      </div>
    </>
  );
}
