import React from "react";
import { useNavigate } from "react-router-dom";

export const Dijkstra = () => {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/about");
  };
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-green-300 to-green-700 flex justify-center items-center">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center my-8 font-serif">
          Dijkstra
        </h1>
        <p className="text-gray-800 mt-5 font-serif">
          Dijkstra's algorithm is a single-source shortest path algorithm, which
          finds the shortest path from the source vertex to all other vertices
          in the graph. The algorithm is used to find the shortest path between
          two nodes in a graph, where the edges have non-negative weights.
          Dijkstra's algorithm is based on the principle of relaxation, where an
          approximation to the correct distance is gradually replaced by the
          correct distance. Dijkstra's algorithm is faster than the Bellman-Ford
          algorithm, as it does not consider negative edge weights. However, it
          is not capable of handling graphs with negative edge weights.
          Dijkstra's algorithm is guaranteed to find the shortest path from the
          source vertex to all other vertices in the graph, provided that the
          graph does not contain any negative edge weights. Dijkstra's algorithm
          is not suitable for graphs with negative edge weights, as it may
          produce incorrect results in such cases. Dijkstra's algorithm is used
          in network routing protocols, such as OSPF (Open Shortest Path First),
          to find the shortest path between two nodes in a network. Dijkstra's
          algorithm is also used in computer networks to optimize data transfer
          and reduce latency. Dijkstra's algorithm is used in transportation
          systems to optimize traffic flow and reduce congestion. Dijkstra's
          algorithm is used in logistics and supply chain management to optimize
          delivery routes and reduce transportation costs. Dijkstra's algorithm
          is used in financial markets to optimize trading strategies and reduce
          transaction costs. Dijkstra's algorithm is used in robotics and
          artificial intelligence to plan the movement of robots and autonomous
          vehicles. Dijkstra's algorithm is used in telecommunications to
          optimize network performance and reduce latency. Dijkstra's algorithm
          is used in healthcare to optimize patient flow and reduce waiting
          times. It can be applied to find the shortest path between two points
          in a hospital or clinic. Dijkstra's algorithm is used in manufacturing
          to optimize production processes and reduce lead times. It can be
          applied to find the shortest path between two workstations on a
          factory floor.
        </p>
        <button
          className="font-serif bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-900 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          onClick={navigateToAbout}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
