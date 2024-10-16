import React from "react";

const MenuItems = () => {
  const items = [
    {
      name: "Classic Burger",
      description: "A juicy beef patty with lettuce, tomato, and our special sauce.",
      image: "/icons/burger1.png", 
      rightIcon: "/icons/heart.png", 
      rightDescription: "Customer Favorite",
    },
    {
      name: "Cheeseburger",
      description: "Topped with cheddar cheese, onions, and pickles.",
      image: "/icons/burger1.png",
      rightIcon: "/icons/star.png",
      rightDescription: "Best Seller",
    },
    {
      name: "Bacon Burger",
      description: "A burger loaded with crispy bacon, cheese, and BBQ sauce.",
      image: "/icons/burger1.png",
      rightIcon: "/icons/star.png",
      rightDescription: "Top Rated",
    },
    {
      name: "Veggie Burger",
      description: "A delicious plant-based patty with avocado and veggies.",
      image: "/icons/burger1.png",
      rightIcon: "/icons/leaf.png", 
      rightDescription: "Vegetarian Option",
    },
    {
      name: "Mand Burger",
      description: "A delicious plant-based patty with avocado and veggies.",
      image: "/icons/burger1.png",
      rightIcon: "/icons/leaf.png",
      rightDescription: "Healthy Choice",
    },
  ];

  return (
    <div className="p-8 flex-row" >
      <h2 className="text-center text-black text-3xl mb-6 pixel-font">Funky's Menu</h2>
      <div className="space-y-8 flex flex-col">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg shadow-neumorphic"
          >
            {/* Left Side: Image and Text */}
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <div>
                <h3 className="pixel-font text-xl font-semibold text-gray-900">{item.name}</h3>
                <p className="pixel-font text-gray-700 mt-2">{item.description}</p>
                <div className="border mt-4 w-[90px] shadow-neumorphic rounded-md border-gray-900"> 
                  <p className="text-gray-900 text-sm font-bold text-center">Add to Cart</p>
                </div>
              </div>
            </div>

            {/* Right Side: Icon and Text */}
            <div className="flex items-center space-x-2">
              <img
                src={item.rightIcon}
                alt={item.rightDescription}
                className="w-6 h-6 object-contain"
              />
              <p className="pixel-font text-gray-700">{item.rightDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
