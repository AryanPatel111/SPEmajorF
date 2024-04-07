// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-gradient-to-r from-blue-400 to-purple-500 p-2">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white text-xl font-serif">Pathfinding Algorithms</h1>
//         <div className="flex space-x-4">
//           <Link to="/" className="text-white hover:underline">Home</Link>
//           <Link to="/about" className="text-white hover:underline">About</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
//   return (
//     <nav className="bg-gradient-to-r from-blue-400 to-purple-500 p-2">
//         <div className="flex justify-between">
//           <Link to="/" className="text-white hover:underline">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-3 rounded shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
//               Home
//             </button>
//           </Link>
//           <h1 className="text-white text-s font-serif items-center">PATH FINDER</h1>

//           <Link to="/about" className="text-white hover:underline">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-3 rounded shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
//               About
//             </button>
//           </Link>
//         </div>
//     </nav>
//   );




return (
    <nav className="bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 p-2">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white hover:underline">
          <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-3 rounded shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            Home
          </button>
        </Link>
        <h1 className="text-white text-xl font-serif">PATH FINDER</h1>
        <Link to="/about" className="text-white hover:underline">
          <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-3 rounded shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            About
          </button>
        </Link>
      </div>
    </nav>
  );
  
};

export default Navbar;
