export default function Shop({ items, addToCart }) {
  return (
    <div className="items m-7 grid grid-cols-[repeat(auto-fill,minmax(100px,500px))] gap-10">
      {items.map((item, index) => {
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
              onClick={() => addToCart(item)}
              className="bg-[#3CAEA3] tracking-widest rounded-md px-10 py-3 text-white font-bobsburgers shadow-md transform transition duration-500 hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
