import React from "react";

const MenuItems = () => {
  const items = [
    {
      name: "Classic Burger",
      description: "A juicy beef patty with lettuce, tomato, and our special sauce.",
      image: "/icons/burger1.png", // Replace with actual image path
      rightIcon: "/icons/heart.png", // Replace with an icon path for the right side
      rightDescription: "Customer Favorite", // Description beside the right icon
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
      rightIcon: "/icons/leaf.png", // Different icon
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
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Our Menu</h2>
      <div className="space-y-8">
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
                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </div>
            </div>

            {/* Right Side: Icon and Text */}
            <div className="flex items-center space-x-2">
              <img
                src={item.rightIcon}
                alt={item.rightDescription}
                className="w-6 h-6 object-contain"
              />
              <p className="text-gray-700">{item.rightDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
