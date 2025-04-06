import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Cloud, Droplet, Facebook, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [weather, setWeather] = useState({ condition: "Sunny", temp: "32", forecast: [] });

  useEffect(() => {
    // Simulate dynamic weather update (replace with real API later)
    setTimeout(() => {
      setWeather({
        condition: "Cloudy",
        temp: "29",
        forecast: [
          { day: "Mon", temp: "30°C / 20°C" },
          { day: "Tue", temp: "28°C / 18°C" },
          { day: "Wed", temp: "27°C / 19°C" },
        ],
      });
    }, 2000);
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 text-center text-white"
        style={{ backgroundImage: "download.jpg"}}
      >
        <div className="bg-black bg-opacity-50 py-16 px-4">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="/mnt/data/WhatsApp Image 2025-03-23 at 17.46.43_9dd6f2d6.jpg"
            alt="SmartAgri Logo"
            className="mx-auto mb-4 w-28 h-28 object-contain"
          />
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            SmartAgr.ai
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl mb-6"
          >
            Smarter Farming Starts Here
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button className="text-lg px-6 py-3">Get Started</Button>
          </motion.div>
        </div>
      </section>

      {/* Weather Report Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Weather Report</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="flex flex-col items-center p-4">
                <Cloud className="w-10 h-10 mb-2" />
                <p>{weather.condition}</p>
                <p className="text-lg font-bold">{weather.temp}°C</p>
              </CardContent>
            </Card>
            {weather.forecast.map((day, index) => (
              <Card key={index}>
                <CardContent className="p-4">{day.day} - {day.temp}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seed Prices Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Seed Prices</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border">
              <thead className="bg-green-200">
                <tr>
                  <th className="p-3 text-left">Seed</th>
                  <th className="p-3 text-left">Price (per kg)</th>
                  <th className="p-3 text-left">Quality Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Wheat</td>
                  <td className="p-3">₹45</td>
                  <td className="p-3">★★★★☆</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Rice</td>
                  <td className="p-3">₹50</td>
                  <td className="p-3">★★★★★</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Maize</td>
                  <td className="p-3">₹38</td>
                  <td className="p-3">★★★☆☆</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quality Insights Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Quality Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Best Seeds for Punjab</h3>
                <p>Wheat and Rice yield high output this season in Punjab.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Top Rated Seeds</h3>
                <p>Rice and Bajra have top ratings for quality and resistance.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Monsoon Season Picks</h3>
                <p>Soybean and Cotton perform well during monsoon across Central India.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-bold text-lg">SmartAgr.ai</p>
            <p>Contact: support@smartagr.ai</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" aria-label="Facebook" className="hover:text-green-300"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-green-300"><Twitter className="w-5 h-5" /></a>
            <a href="mailto:support@smartagr.ai" aria-label="Email" className="hover:text-green-300"><Mail className="w-5 h-5" /></a>
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
