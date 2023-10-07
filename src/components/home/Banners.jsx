import { Carousel } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Banners() {
  const data = [
    {
      id: 1,
      src: "https://source.unsplash.com/800x300/?gadgets",
      headline: "Power and Portability at your Fingertips",
      body: "Discover our wide range of laptops for all your computing needs. From ultrabooks to gaming laptops, our selection offers the perfect combination of power and portability for your lifestyle.",
      cta: "Shop now",
      category: "laptop",
    },
    {
      id: 2,
      src: "https://source.unsplash.com/800x300/?electronics",
      headline: "Stay Connected on the Go",
      body: "Keep up with the latest trends and stay connected on-the-go with our selection of smartphones. Choose from top brands and affordable options, with advanced features to enhance your mobile experience.",
      cta: "Shop now",
      category: "smartphone",
    },
    {
      id: 3,
      src: "https://source.unsplash.com/800x300/?technology",
      headline: "Track your Fitness and Stay Connected",
      body: "Enhance your lifestyle with our range of smartwatches. Monitor your fitness goals and stay connected to your digital life with ease. Choose from popular brands and a variety of styles and features.",
      cta: "Shop now",
      category: "smartwatch",
    },
  ];
  return (
    <Carousel>
      {data.map((item) => (
        <div className="relative">
          <img src={item.src} alt="Slide 1" style={{ width: "100%" }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{item.headline}</h1>
            <p className="text-lg">{item.body}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Banners;
