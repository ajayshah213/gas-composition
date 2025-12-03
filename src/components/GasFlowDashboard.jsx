import React, { useState, useEffect, useCallback } from 'react';
import { ReactFlow, Background, Controls, useNodesState, useEdgesState, Handle, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dagre from 'dagre';

import { Activity, AlertTriangle, CheckCircle, XCircle, Wind, Thermometer, Gauge } from 'lucide-react';
import { apiResponse } from '../data';
import './GasFlowDashboard.css';

// --- Layout Helper ---
const getLayoutedElements = (nodes, edges) => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));

    // Set layout direction Left-to-Right
    dagreGraph.setGraph({ rankdir: 'LR', ranksep: 100, nodesep: 30 });

    nodes.forEach((node) => {
        // Approximate dimensions for layout
        let width = 220;
        let height = 140;
        if (node.type === 'hub') { width = 120; height = 120; }
        if (node.type === 'junction') { width = 40; height = 40; }

        dagreGraph.setNode(node.id, { width, height });
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    const newNodes = nodes.map((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        let xOffset = 110;
        let yOffset = 70;
        if (node.type === 'hub') { xOffset = 60; yOffset = 60; }
        if (node.type === 'junction') { xOffset = 20; yOffset = 20; }

        return {
            ...node,
            targetPosition: Position.Left,
            sourcePosition: Position.Right,
            position: {
                x: nodeWithPosition.x - xOffset,
                y: nodeWithPosition.y - yOffset,
            },
        };
    });

    return { nodes: newNodes, edges };
};

// --- Custom Nodes ---
const RichPlantNode = ({ data }) => {
    const getStatusIcon = (status) => {
        switch (status) {
            case 'ok': return <CheckCircle size={16} className="text-green-500" />;
            case 'warning': return <AlertTriangle size={16} className="text-yellow-500" />;
            case 'stop': return <XCircle size={16} className="text-red-500" />;
            default: return <Activity size={16} className="text-gray-500" />;
        }
    };

    return (
        <div className={`rich-plant-node ${data.status}`}>
            <Handle type="source" position={Position.Right} />
            <div className="node-header">
                <div className="node-title">{data.label}</div>
                <div className="node-status-icon">{getStatusIcon(data.status)}</div>
            </div>
            <div className="node-body">
                <div className="node-metric">
                    <div className="label"><Wind size={12} /> Flow</div>
                    <div className="value">{data.currentFlow} <span style={{ fontSize: '0.7em', color: '#64748b' }}>SCFM</span></div>
                </div>
                <div className="node-metric">
                    <div className="label"><Thermometer size={12} /> CH4</div>
                    <div className="value">{data.currentMethane}%</div>
                </div>
            </div>
        </div>
    );
};

const JunctionNode = ({ data }) => (
    <div className={`junction-node ${data.status}`}>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
        {data.label}
    </div>
);

const HubNode = ({ data }) => (
    <div className="hub-node">
        <Handle type="target" position={Position.Left} />
        <Activity size={32} className="hub-icon" />
        <div className="hub-label">Main Hub</div>
        <div className="hub-value">{data.totalFlow}</div>
    </div>
);

const nodeTypes = {
    richPlant: RichPlantNode,
    junction: JunctionNode,
    hub: HubNode,
};

// --- Main Component ---
const GasFlowDashboard = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [hubStats, setHubStats] = useState({ flow: 0, pressure: 45, status: 'ok' });

    // Data Processing with Real-Time Values
    useEffect(() => {
        const updateGraph = () => {
            // 1. Process Plants (Nodes) - Use actual data
            const plantNodes = apiResponse.plants.map((plant) => {
                // Determine status based on actual flow_rate
                const status = plant.flow_rate > 0 ? 'ok' : 'stop';
                const currentFlow = plant.flow_rate ? plant.flow_rate.toFixed(1) : '0.0';
                const currentMethane = plant.gas_composition ? plant.gas_composition.methane.toFixed(1) : '0.0';

                return {
                    id: plant.id,
                    type: 'richPlant',
                    data: {
                        label: plant.name,
                        status,
                        currentFlow,
                        currentMethane,
                        // Store additional real data for potential tooltips
                        psig: plant.psig,
                        temperature: plant.temperature,
                        actual_flow_rate: plant.actual_flow_rate
                    },
                    position: { x: 0, y: 0 },
                };
            });

            // 2. Process Junctions (Nodes)
            const junctionNodes = (apiResponse.junctions || []).map((junction) => {
                // Determine status based on flow_rate
                const status = junction.flow_rate > 0 ? 'ok' : 'stop';
                return {
                    id: junction.id,
                    type: 'junction',
                    data: {
                        label: junction.id,
                        status,
                        flow_rate: junction.flow_rate,
                        methane: junction.gas_composition?.methane
                    },
                    position: { x: 0, y: 0 },
                };
            });

            // 3. Hub Node - Use actual hub data
            const totalFlow = apiResponse.hub.flow_rate || 0;
            const hubNode = {
                id: 'hub',
                type: 'hub',
                data: {
                    totalFlow: totalFlow.toFixed(1),
                    methane: apiResponse.hub.gas_composition?.methane
                },
                position: { x: 0, y: 0 },
            };

            // 4. Edges (Connections)
            const graphEdges = apiResponse.connections.map((conn, index) => {
                // Determine status based on source node if possible
                const sourceNode = [...plantNodes, ...junctionNodes].find(n => n.id === conn.from);
                const status = sourceNode ? sourceNode.data.status : 'ok';

                let edgeColor = '#22c55e'; // Green
                if (status === 'warning') edgeColor = '#eab308';
                if (status === 'stop') edgeColor = '#ef4444';

                return {
                    id: `e-${index}`,
                    source: conn.from,
                    target: conn.to,
                    animated: status !== 'stop',
                    style: { stroke: edgeColor, strokeWidth: 3, opacity: status === 'stop' ? 0.3 : 1 },
                    data: {
                        flow_velocity: conn.flow_velocity,
                        pipe_diameter: conn.pipe_diameter,
                        distance_miles: conn.distance_miles
                    }
                };
            });

            // 5. Apply Layout
            const allNodes = [...plantNodes, ...junctionNodes, hubNode];
            const layouted = getLayoutedElements(allNodes, graphEdges);

            setNodes(layouted.nodes);
            setEdges(layouted.edges);

            // 6. Update Stats - Use real data
            const activeCount = plantNodes.filter(n => n.data.status === 'ok').length;
            let sysStatus = 'ok';
            if (activeCount < 5) sysStatus = 'warning';
            if (activeCount < 2) sysStatus = 'stop';

            // Calculate average pressure from active plants
            const activePlants = apiResponse.plants.filter(p => p.flow_rate > 0);
            const avgPressure = activePlants.length > 0
                ? (activePlants.reduce((sum, p) => sum + (p.psig || 0), 0) / activePlants.length).toFixed(1)
                : 0;

            setHubStats({ flow: parseFloat(totalFlow), pressure: avgPressure, status: sysStatus });
        };

        updateGraph();
        // Update every 5 seconds to simulate real-time updates (in production, this would come from an API)
        const interval = setInterval(updateGraph, 5000);
        return () => clearInterval(interval);
    }, []); // Empty dependency array for init, but setNodes/setEdges are stable

    return (
        <div className="gas-dashboard">
            {/* Header Overlay */}
            <div className="dashboard-header-overlay">
                <div className="stat-card-overlay">
                    <Activity size={20} className={hubStats.status === 'ok' ? 'text-green-400' : hubStats.status === 'warning' ? 'text-yellow-400' : 'text-red-400'} />
                    <div>
                        <div className="label">System Status</div>
                        <div className="value" style={{ color: hubStats.status === 'ok' ? '#4ade80' : hubStats.status === 'warning' ? '#facc15' : '#ef4444', textTransform: 'capitalize' }}>
                            {hubStats.status === 'ok' ? 'Operational' : hubStats.status}
                        </div>
                    </div>
                </div>
                <div className="stat-card-overlay">
                    <Wind size={20} className="text-blue-400" />
                    <div>
                        <div className="label">Total Inflow</div>
                        <div className="value">{hubStats.flow.toLocaleString()} <span className="text-sm font-normal text-slate-400">SCFM</span></div>
                    </div>
                </div>
                <div className="stat-card-overlay">
                    <Gauge size={20} className="text-purple-400" />
                    <div>
                        <div className="label">Avg Pressure</div>
                        <div className="value">{hubStats.pressure} <span className="text-sm font-normal text-slate-400">PSIG</span></div>
                    </div>
                </div>
            </div>

            {/* Flowchart */}
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                fitView
                attributionPosition="bottom-right"
                minZoom={0.5}
                maxZoom={1.5}
            >
                <Background color="#1e293b" gap={20} />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default GasFlowDashboard;
