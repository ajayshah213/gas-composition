import { Position } from '@xyflow/react';

// Geographic positioning based on real-world map locations
// Dramatically increased spacing for maximum clarity
const geographicPositions = {
  // Hub - North (center-north on map)
  'hub': { x: 2000, y: 150 },

  // North/Northwest cluster
  'com.aemetis.trinkler_dairy': { x: 300, y: 250 },
  'com.aemetis.petersen_dairy': { x: 1400, y: 500 },

  // West/Southwest cluster
  'com.aemetis.alamo_dairy': { x: 150, y: 800 },
  'com.aemetis.albert_mendis_dairy': { x: 300, y: 1100 },
  'com.aemetis.k_r_blount_dairy': { x: 500, y: 1300 },
  'com.aemetis.ac_machado_dairy': { x: 700, y: 1200 },

  // South/Southwest cluster
  'com.aemetis.borba_dairy': { x: 750, y: 1900 },

  // Southeast cluster
  'com.aemetis.hilmar_dairy': { x: 1700, y: 1800 },
  'com.aemetis.wickstrom_dairy': { x: 2000, y: 2000 },

  // Central/East cluster
  'com.aemetis.ss_dairy': { x: 1700, y: 1000 },
  'com.aemetis.ackerman_dairy': { x: 1900, y: 1200 },
  'com.aemetis.double_d_dairy': { x: 2100, y: 1300 },

  // Junctions positioned between connected nodes with maximum spacing
  'j1': { x: 2000, y: 1700 },
  'j2': { x: 1850, y: 1500 },
  'j3': { x: 1700, y: 1300 },
  'j4': { x: 1250, y: 1300 },
  'j8': { x: 1000, y: 1200 },
  'j9': { x: 850, y: 1100 },
  'j10': { x: 700, y: 1000 },
  'j11': { x: 600, y: 800 },
  'j14': { x: 950, y: 600 },
  'j17': { x: 1200, y: 450 },
  'j19': { x: 1500, y: 350 },
  'j21': { x: 1750, y: 450 },
  'j22': { x: 1950, y: 650 },
};

export const getLayoutedElements = (nodes, edges) => {
  const newNodes = nodes.map((node) => {
    const position = geographicPositions[node.id] || { x: 1000, y: 1000 };

    return {
      ...node,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      position,
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
    const status = plant.flow_rate > 0 ? 'ok' : 'stop';
    nodes.push({
      id: plant.id,
      type: 'plant',
      data: { label: plant.name, status, ...plant },
      position: { x: 0, y: 0 },
    });
  });

  // Junctions
  data.junctions.forEach((junction) => {
    const status = junction.flow_rate > 0 ? 'ok' : 'stop';
    nodes.push({
      id: junction.id,
      type: 'junction',
      data: { label: junction.id, status, ...junction },
      position: { x: 0, y: 0 },
    });
  });

  // Hub
  nodes.push({
    id: data.hub.id,
    type: 'hub',
    data: { label: 'Main Hub', status: 'ok', ...data.hub },
    position: { x: 0, y: 0 },
  });

  // Connections with Labels
  data.connections.forEach((conn, index) => {
    const status = getRandomStatus();
    let edgeColor = '#22c55e'; // Green (ok)
    if (status === 'warning') edgeColor = '#eab308'; // Yellow
    if (status === 'stop') edgeColor = '#ef4444'; // Red

    // Determine stroke width based on pipe diameter
    const strokeWidth = conn.pipe_diameter === '8inch' ? 8 : 5;

    // Create edge label showing distance and time
    const distance = conn.distance_miles;
    const time = conn.transit_time_minutes?.toFixed(1) || '0.0';
    const label = `${distance}mi · ${time}min`;

    edges.push({
      id: `e${index}`,
      source: conn.from,
      target: conn.to,
      animated: true,
      type: 'smoothstep',
      style: { stroke: edgeColor, strokeWidth },
      label,
      labelStyle: {
        fill: '#cbd5e1',
        fontWeight: 600,
        fontSize: 11
      },
      labelBgStyle: {
        fill: '#1e293b',
        fillOpacity: 0.9
      },
      data: { status, ...conn },
    });
  });

  return getLayoutedElements(nodes, edges);
};
