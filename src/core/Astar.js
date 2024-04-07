import React from "react";
import { useNavigate } from "react-router-dom";

export const Astar = () => {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/about");
  };
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-yellow-300 to-yellow-700 flex justify-center items-center">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center my-8 font-serif">
          Astar
        </h1>
        <p className="text-gray-800 mt-5 font-serif">
          A* (pronounced "A-star") is a computer algorithm that is widely used
          in pathfinding and graph traversal, which is the process of finding a
          path between two points in a graph. It is an extension of Dijkstra's
          algorithm with the addition of a heuristic function that guides the
          search process towards the goal node. A* is an informed search
          algorithm, which means that it uses information about the problem
          domain to guide its search process. The heuristic function provides an
          estimate of the cost of reaching the goal node from the current node,
          which allows A* to make more informed decisions about which nodes to
          explore next. A* is guaranteed to find the shortest path between the
          start and goal nodes in a graph, provided that the heuristic function
          is admissible, meaning that it never overestimates the cost of
          reaching the goal node. If the heuristic function is not admissible,
          then A* may not find the shortest path, but it will still find a valid
          path between the start and goal nodes. A* is widely used in video
          games, robotics, and artificial intelligence to find the shortest path
          between two points in a grid-based environment. It is also used in
          network routing protocols, such as OSPF (Open Shortest Path First), to
          find the shortest path between two nodes in a network. A* is a
          complete and optimal algorithm, which means that it will always find a
          valid path between the start and goal nodes if one exists, and it will
          find the shortest path if the heuristic function is admissible. A* is
          more efficient than Dijkstra's algorithm and the Bellman-Ford
          algorithm in many cases, as it uses the heuristic function to guide
          its search process and avoid exploring unnecessary nodes. However, A*
          may be less efficient than Dijkstra's algorithm in some cases,
          especially if the heuristic function is not admissible. A* is used in
          a wide range of applications, including video games, robotics,
          artificial intelligence, network routing, and logistics. It is a
          versatile algorithm that can be adapted to many different problem
          domains and is widely used in practice due to its efficiency and
          effectiveness.
        </p>
        <button
          className="font-serif bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-700 hover:to-yellow-900 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          onClick={navigateToAbout}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
