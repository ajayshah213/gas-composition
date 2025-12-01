import dagre from 'dagre';
import { Position } from '@xyflow/react';

const nodeWidth = 180;
const nodeHeight = 60;

export const getLayoutedElements = (nodes, edges, direction = 'LR') => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      targetPosition: direction === 'LR' ? Position.Left : Position.Top,
      sourcePosition: direction === 'LR' ? Position.Right : Position.Bottom,
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });

  return { nodes: newNodes, edges };
};

export const processData = (data) => {
  const nodes = [];
  const edges = [];

  const statuses = ['ok', 'warning', 'stop'];
  const getRandomStatus = () => statuses[Math.floor(Math.random() * statuses.length)];

  // Plants
  data.plants.forEach((plant) => {
    nodes.push({
      id: plant.id,
      type: 'plant',
      data: { label: plant.name, status: getRandomStatus(), ...plant },
      position: { x: 0, y: 0 }, // Initial position, will be calculated
    });
  });

  // Junctions
  data.junctions.forEach((junction) => {
    nodes.push({
      id: junction.id,
      type: 'junction',
      data: { label: junction.id, status: getRandomStatus(), ...junction },
      position: { x: 0, y: 0 },
    });
  });

  // Hub
  nodes.push({
    id: data.hub.id,
    type: 'hub',
    data: { label: 'Main Hub', status: getRandomStatus(), ...data.hub },
    position: { x: 0, y: 0 },
  });

  // Connections
  data.connections.forEach((conn, index) => {
    const status = getRandomStatus();
    let edgeColor = '#22c55e'; // Green (ok)
    if (status === 'warning') edgeColor = '#eab308'; // Yellow
    if (status === 'stop') edgeColor = '#ef4444'; // Red

    edges.push({
      id: `e${index}`,
      source: conn.from,
      target: conn.to,
      animated: true,
      type: 'smoothstep', // or 'bezier'
      style: { stroke: edgeColor, strokeWidth: 2 },
      data: { status, ...conn },
    });
  });

  return getLayoutedElements(nodes, edges);
};
