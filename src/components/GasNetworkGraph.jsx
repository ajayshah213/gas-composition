import React, { useState, useCallback } from 'react';
import { ReactFlow, Background, Controls, MiniMap, useNodesState, useEdgesState, Handle, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './GasNetworkGraph.css';
import { apiResponse } from '../data';
import { processData } from '../utils';
import { Activity, Wind, Thermometer, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const { nodes: initialNodes, edges: initialEdges } = processData(apiResponse);

// Custom Node Components
const getStatusIcon = (status) => {
    switch (status) {
        case 'ok': return <CheckCircle size={16} className="text-green-500" />;
        case 'warning': return <AlertTriangle size={16} className="text-yellow-500" />;
        case 'stop': return <XCircle size={16} className="text-red-500" />;
        default: return <Activity size={16} className="text-gray-500" />;
    }
};

const PlantNode = ({ data }) => (
    <div className="custom-node plant" data-status={data.status}>
        <Handle type="source" position={Position.Right} />
        <div className="plant-header">
            <div className="plant-title">{data.label}</div>
            <div className="plant-status-icon">{getStatusIcon(data.status)}</div>
        </div>
    </div>
);

const JunctionNode = ({ data }) => (
    <div className="custom-node junction" data-status={data.status}>
        <Handle type="target" position={Position.Top} />
        <Handle type="target" position={Position.Left} />
        <Handle type="target" position={Position.Bottom} />
        <Handle type="source" position={Position.Right} />
        <Handle type="source" position={Position.Top} />
        <Handle type="source" position={Position.Bottom} />
        {data.label}
    </div>
);

const HubNode = ({ data }) => (
    <div className="custom-node hub">
        <Handle type="target" position={Position.Left} />
        <Activity size={24} style={{ color: '#93c5fd' }} />
        <div style={{ fontSize: '0.7rem', marginTop: '5px' }}>HUB</div>
    </div>
);

const nodeTypes = {
    plant: PlantNode,
    junction: JunctionNode,
    hub: HubNode,
};

function GasNetworkGraph() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [hoveredInfo, setHoveredInfo] = useState(null);

    const onNodeMouseEnter = useCallback((event, node) => {
        setHoveredInfo({ type: 'node', data: node.data });
    }, []);

    const onEdgeMouseEnter = useCallback((event, edge) => {
        setHoveredInfo({ type: 'edge', data: edge.data });
    }, []);

    const onPaneClick = useCallback(() => {
        setHoveredInfo(null);
    }, []);

    return (
        <div className="app-container" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <header className="header" style={{ flexShrink: 0 }}>
                <h2 style={{ fontSize: '1.2rem', margin: 0 }}>Gas Network Composition</h2>
                <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ color: '#22c55e' }}>●</span> Active
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ color: '#ef4444' }}>●</span> Stopped
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ color: '#3b82f6' }}>●</span> Hub
                    </div>
                </div>
            </header>

            <div className="graph-container" style={{ flexGrow: 1, position: 'relative' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    onNodeMouseEnter={onNodeMouseEnter}
                    onEdgeMouseEnter={onEdgeMouseEnter}
                    onPaneClick={onPaneClick}
                    fitView
                    attributionPosition="bottom-left"
                >
                    <Background color="#334155" gap={20} />
                    <Controls />
                    <MiniMap
                        nodeColor={(n) => {
                            if (n.type === 'plant') return '#4ade80';
                            if (n.type === 'hub') return '#38bdf8';
                            return '#64748b';
                        }}
                        style={{ backgroundColor: '#1e293b' }}
                    />
                </ReactFlow>
            </div>

            {/* Site Tile Panel for Plant Nodes */}
            {hoveredInfo && hoveredInfo.type === 'node' && hoveredInfo.data.max_flow_rate && (
                <div className="info-panel site-tile-panel">
                    <div className="site-tile-header">
                        <div className="site-title">{hoveredInfo.data.label || hoveredInfo.data.name}</div>
                        <div className="site-status-dot" data-status={hoveredInfo.data.status || 'ok'}></div>
                    </div>

                    <div className="gauge-section">
                        <svg className="flow-gauge" viewBox="0 0 200 130" style={{ height: '90px' }}>
                            <path d="M 30 100 A 70 70 0 0 1 170 100" fill="none" stroke="#334155" strokeWidth="10" strokeLinecap="round" />
                            <path
                                d="M 30 100 A 70 70 0 0 1 170 100"
                                fill="none"
                                stroke="#eab308"
                                strokeWidth="10"
                                strokeLinecap="round"
                                strokeDasharray={`${(Math.min((hoveredInfo.data.flow_rate / hoveredInfo.data.max_flow_rate) * 100, 100) / 100) * 220} 220`}
                            />
                            <line
                                x1="100"
                                y1="100"
                                x2="100"
                                y2="45"
                                stroke="#eab308"
                                strokeWidth="2"
                                strokeLinecap="round"
                                transform={`rotate(${((hoveredInfo.data.flow_rate / hoveredInfo.data.max_flow_rate) * 100 / 100) * 180 - 90} 100 100)`}
                            />
                            <circle cx="100" cy="100" r="4" fill="#eab308" />
                        </svg>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8', textAlign: 'center' }}>
                            {hoveredInfo.data.flow_rate?.toFixed(1) || '0.0'} / {hoveredInfo.data.max_flow_rate} SCFM
                        </div>
                        <div style={{ marginTop: '4px', fontSize: '0.75rem', color: '#64748b', textAlign: 'center' }}>
                            Suggested Flow: TBD
                        </div>
                    </div>

                    {/* First row: 2 columns for N₂ and O₂ */}
                    <div className="site-data-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                        <div className="data-box" style={{ backgroundColor: '#4a5442' }}>
                            <div className="data-label">N₂ (%)</div>
                            <div className="data-value">{hoveredInfo.data.gas_composition?.nitrogen.toFixed(2) || '0.00'}</div>
                        </div>
                        <div className="data-box" style={{ backgroundColor: '#1e4040' }}>
                            <div className="data-label">O₂ (%)</div>
                            <div className="data-value">{hoveredInfo.data.gas_composition?.oxygen.toFixed(2) || '0.00'}</div>
                        </div>
                    </div>

                    {/* Second row: 3 columns for Temp, Pressure, Transit Time */}
                    <div className="site-data-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                        <div className="data-box" style={{ backgroundColor: '#1e4040' }}>
                            <div className="data-label">Temp (°F)</div>
                            <div className="data-value">{hoveredInfo.data.temperature?.toFixed(1) || '0.0'}</div>
                        </div>
                        <div className="data-box" style={{ backgroundColor: '#4a5442' }}>
                            <div className="data-label">Pressure (PSI)</div>
                            <div className="data-value">{hoveredInfo.data.psig?.toFixed(1) || '0.0'}</div>
                        </div>
                        <div className="data-box" style={{ backgroundColor: '#1e4040' }}>
                            <div className="data-label">Transit Time (min)</div>
                            <div className="data-value">{hoveredInfo.data.transit_time_minutes?.toFixed(1) || '0.0'}</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Junction/Hub Nodes with detailed data */}
            {hoveredInfo && hoveredInfo.type === 'node' && !hoveredInfo.data.max_flow_rate && hoveredInfo.data.flow_rate !== undefined && (
                <div className="info-panel site-tile-panel">
                    <div className="site-tile-header">
                        <div className="site-title">{hoveredInfo.data.label || hoveredInfo.data.id}</div>
                        <div className="site-status-dot" data-status={hoveredInfo.data.status || 'ok'}></div>
                    </div>

                    {/* Flow Rate - Simple Display */}
                    <div className="gauge-section" style={{ padding: '24px 20px' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#eab308', lineHeight: 1 }}>
                            {hoveredInfo.data.flow_rate?.toFixed(1) || '0.0'}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '6px', fontWeight: '500' }}>SCFM</div>
                    </div>

                    {/* Gas Composition - Simple 2-column grid matching plant style */}
                    {hoveredInfo.data.gas_composition && (
                        <div className="site-data-grid" style={{ gridTemplateColumns: '1fr 1fr', paddingBottom: '15px' }}>
                            <div className="data-box" style={{ backgroundColor: '#4a5442' }}>
                                <div className="data-label">N₂ (%)</div>
                                <div className="data-value">{hoveredInfo.data.gas_composition?.nitrogen.toFixed(2) || '0.00'}</div>
                            </div>
                            <div className="data-box" style={{ backgroundColor: '#1e4040' }}>
                                <div className="data-label">O₂ (%)</div>
                                <div className="data-value">{hoveredInfo.data.gas_composition?.oxygen.toFixed(2) || '0.00'}</div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Hub Node - Flow Rate and Pressure */}
            {hoveredInfo && hoveredInfo.type === 'node' && hoveredInfo.data.label === 'Main Hub' && (
                <div className="info-panel site-tile-panel">
                    <div className="site-tile-header">
                        <div className="site-title">{hoveredInfo.data.label}</div>
                        <div className="site-status-dot" data-status="ok"></div>
                    </div>

                    {/* Flow Rate - Simple Display */}
                    <div className="gauge-section" style={{ padding: '20px 20px 10px' }}>
                        <div style={{ fontSize: '2rem', fontWeight: '700', color: '#eab308', lineHeight: 1 }}>
                            {hoveredInfo.data.flow_rate?.toFixed(1) || '0.0'}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '6px', fontWeight: '500' }}>SCFM</div>
                    </div>

                    {/* Pressure Display */}
                    <div className="site-data-grid" style={{ gridTemplateColumns: '1fr', paddingBottom: '15px', paddingTop: '10px' }}>
                        <div className="data-box" style={{ backgroundColor: '#1e4040' }}>
                            <div className="data-label">Pressure (PSIG)</div>
                            <div className="data-value">{hoveredInfo.data.psig?.toFixed(1) || 'N/A'}</div>
                        </div>
                    </div>
                </div>
            )}

            {hoveredInfo && hoveredInfo.type === 'edge' && (
                <div className="info-panel">
                    <div className="info-title">Pipeline Connection</div>
                    <div className="info-section">
                        <div className="info-row">
                            <span>Distance</span>
                            <span>{hoveredInfo.data.distance_miles} miles</span>
                        </div>
                        <div className="info-row">
                            <span>Transit Time</span>
                            <span>{hoveredInfo.data.transit_time_minutes?.toFixed(1) || 'N/A'} min</span>
                        </div>
                        <div className="info-row">
                            <span>Diameter</span>
                            <span>{hoveredInfo.data.pipe_diameter}</span>
                        </div>
                        {hoveredInfo.data.flow_velocity > 0 && (
                            <div className="info-row">
                                <span>Velocity</span>
                                <span>{hoveredInfo.data.flow_velocity?.toFixed(2)} ft/s</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default GasNetworkGraph;
