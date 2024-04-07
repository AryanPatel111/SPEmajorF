import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export const About = () => {
  const navigate = useNavigate();

  const navigateToBellmanFord = () => {
    navigate("/about/bellmanFord");
  };

  const navigateToDijkstra = () => {
    navigate("/about/dijkstra");
  };

  const navigateToAstar = () => {
    navigate("/about/astar");
  };

  return (
    <div className="bg-zinc-100">
      <Navbar />
      <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-center my-2 font-serif">
        ABOUT
      </h1>
      <div className="flex items-center gap-12">
        <p className="w-3/4 mt-3 text-gray-700 font-serif">
          This is a web application that demonstrates the implementation of
          various pathfinding algorithms, such as Dijkstra's algorithm, A*
          algorithm, and Bellman-Ford algorithm. The application allows users to
          visualize the algorithms in action on a grid-based map, where they can
          set the start and end points, add obstacles, and run the algorithms to
          find the shortest path between the start and end points. The
          application provides a visual representation of the algorithms' search
          process, highlighting the nodes that are explored and the path that is
          found. Users can interact with the map by clicking and dragging to set
          the start and end points, clicking to add obstacles, and clicking the
          "Run" button to run the selected algorithm. The application also
          provides information about the algorithms, including their principles,
          use cases, and advantages. Users can learn more about the algorithms
          by reading the descriptions provided in the application. The
          application is built using React, a JavaScript library for building
          user interfaces, and CSS for styling the components. The algorithms
          are implemented in JavaScript and are integrated into the application
          to provide the pathfinding functionality. The application is designed
          to be user-friendly and intuitive, with a clean and simple interface
          that allows users to interact with the map and run the algorithms
          easily. Users can explore the application to learn more about
          pathfinding algorithms and see how they work in practice. The
          application is hosted on GitHub Pages, a static site hosting service
          that allows users to deploy websites directly from a GitHub
          repository. The application is publicly accessible and can be viewed
          by anyone with an internet connection. The application is open source,
          and the source code is available on GitHub for users to view,
          download, and contribute to. Users can access the source code to see
          how the algorithms are implemented, make changes to the code, and
          suggest improvements to the application. The application is a learning
          resource for users who are interested in pathfinding algorithms, graph
          traversal, and computer science. Users can use the application to
          experiment with the algorithms, visualize their behavior, and gain a
          better understanding of how they work. The application is a fun and
          interactive way to explore the world of pathfinding algorithms and
          learn more about the techniques used to find the shortest path between
          two points in a graph. Users can enjoy using the application to solve
          pathfinding problems and see the algorithms in action. The application
          is a project created by a software developer who is passionate about
          computer science, algorithms, and problem-solving. The developer built
          the application to share their knowledge and experience with others
          and provide a valuable resource for learning about pathfinding
          algorithms.
        </p>
        <div className="flex flex-col w-2/5 space-y-4">
          <button
            className="font-serif bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-5 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            onClick={navigateToBellmanFord}
          >
            BellmanFord Algorithm
          </button>
          <button
            className="font-serif bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-900 text-white font-bold py-5 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            onClick={navigateToDijkstra}
          >
            Dijkstra's Algorithm
          </button>
          <button
            className="font-serif bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-700 hover:to-yellow-900 text-white font-bold py-5 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            onClick={navigateToAstar}
          >
            A* Algorithm
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default About;
