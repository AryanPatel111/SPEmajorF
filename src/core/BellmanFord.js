import React from "react";
import { useNavigate } from "react-router-dom";

export const BellmanFord = () => {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/about");
  };
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-300 to-blue-700 flex justify-center items-center">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center my-8 font-serif">
          BellmanFord
        </h1>
        <p className="text-gray-800 mt-5 font-serif">
          Bellman-Ford algorithm is a single-source shortest path algorithm,
          which allows some of the edge weights to be negative numbers. The
          algorithm is used to find the shortest path from the source vertex to
          all other vertices in the graph. If the graph contains a negative
          cycle, then the algorithm can detect it. The Bellman-Ford algorithm is
          slower than Dijkstra's algorithm, but it is more versatile, as it is
          capable of handling graphs with negative edge weights. The
          Bellman-Ford algorithm is based on the principle of relaxation, where
          an approximation to the correct distance is gradually replaced by the
          correct distance. The Bellman-Ford algorithm is guaranteed to find the
          shortest path from the source vertex to all other vertices in the
          graph, provided that the graph does not contain a negative cycle
          reachable from the source vertex. The Bellman-Ford algorithm is not
          suitable for graphs with negative cycles, as it will not terminate in
          such cases. The Bellman-Ford algorithm is used in network routing
          protocols, such as RIP (Routing Information Protocol), to find the
          shortest path between two nodes in a network. The Bellman-Ford
          algorithm is also used in network monitoring tools to detect network
          outages and bottlenecks. The Bellman-Ford algorithm is used in
          computer games to find the shortest path between two points on a map.
          The Bellman-Ford algorithm is used in traffic management systems to
          optimize traffic flow and reduce congestion. The Bellman-Ford
          algorithm is used in logistics and supply chain management to optimize
          delivery routes and reduce transportation costs. The Bellman-Ford
          algorithm is used in financial markets to optimize trading strategies
          and reduce transaction costs. The Bellman-Ford algorithm is used in
          robotics and artificial intelligence to plan the movement of robots
          and autonomous vehicles. The Bellman-Ford algorithm is used in
          telecommunications to optimize network performance and reduce latency.
          The Bellman-Ford algorithm is used in healthcare to optimize patient
          flow and reduce waiting times. It can be applied to find the shortest
          path between two points in a hospital or clinic. The Bellman-Ford
          algorithm is used in manufacturing to optimize production processes
          and reduce lead times. It can be applied to find the shortest path
          between two workstations on a factory floor.
        </p>
        <button
          className="font-serif bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          onClick={navigateToAbout}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
