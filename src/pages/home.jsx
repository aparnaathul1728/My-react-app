import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-ggrey font-neutra">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Website</h1>
      <div className="space-y-4">
        <button 
          onClick={() => handleButtonClick('/users')} 
          className="px-6 py-3 bg-yyellow text-white rounded-lg shadow-md hover:bg-lyellow"
        >
          Users
        </button>
        <button 
          onClick={() => handleButtonClick('/products')} 
          className="ml-2 px-6 py-3 bg-bblack text-white rounded-lg shadow-md hover:bg-lblack"
        >
          Products
        </button>
      </div>
    </div>
  );
};

export default HomePage;
