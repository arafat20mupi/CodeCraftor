import React from "react";

const HowWeDo = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h3 className="text-blue-500 uppercase mb-4">Our Model</h3>
          <h2 className="text-4xl font-bold">How we do</h2>
          <p className="mt-4 text-gray-300">
            Save time and money with our powerful method.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative p-6 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <div className="text-4xl text-blue-500">
                🧠 {/* Brainstorming Icon */}
              </div>
              <div>
                <h4 className="font-bold">Brainstorming</h4>
                <p>Ideas</p>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
              <div className="w-12 border-t border-dashed border-gray-400"></div>
            </div>
          </div>
          <div className="relative p-6 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <div className="text-4xl text-blue-500">✏️</div>
              <div>
                <h4 className="font-bold">Product</h4>
                <p>Design</p>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
              <div className="w-12 border-t border-dashed border-gray-400"></div>
            </div>
          </div>
          <div className="relative p-6 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <div className="text-4xl text-blue-500">🖥️</div>
              <div>
                <h4 className="font-bold">Front-End</h4>
                <p>Development</p>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
              <div className="w-12 border-t border-dashed border-gray-400"></div>
            </div>
          </div>
          <div className="relative p-6 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <div className="text-4xl text-blue-500">📈</div>
              <div>
                <h4 className="font-bold">SEO</h4>
                <p>Optimization</p>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
              <div className="w-12 border-t border-dashed border-gray-400"></div>
            </div>
          </div>
          <div className="relative p-6 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <div className="text-4xl text-blue-500">⚙️</div>
              <div>
                <h4 className="font-bold">Back-End</h4>
                <p>Development</p>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
              <div className="w-12 border-t border-dashed border-gray-400"></div>
            </div>
          </div>
          <div className="relative p-6 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <div className="text-4xl text-blue-500">📢</div>
              <div>
                <h4 className="font-bold">Digital</h4>
                <p>Marketing</p>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
              <div className="w-12 border-t border-dashed border-gray-400"></div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-left">
          <a
            href="#"
            className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowWeDo;
