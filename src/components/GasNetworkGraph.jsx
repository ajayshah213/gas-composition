import React, { useState, useCallback } from 'react';
import { ReactFlow, Background, Controls, MiniMap, useNodesState, useEdgesState, Handle, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { apiResponse } from '../data';
import { processData } from '../utils';
import { Activity } from 'lucide-react';

const { nodes: initialNodes, edges: initialEdges } = processData(apiResponse);

// Custom Node Components
const getStatusColor = (status) => {
    switch (status) {
        case 'warning': return '#eab308';
        case 'stop': return '#ef4444';
        case 'ok': default: return '#22c55e';
    }
};

const PlantNode = ({ data }) => (
    <div className="custom-node plant" style={{ borderColor: getStatusColor(data.status) }}>
        <Handle type="source" position={Position.Right} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <div className="status-dot" style={{ backgroundColor: getStatusColor(data.status) }}></div>
            <strong>{data.label}</strong>
        </div>
        <div style={{ fontSize: '10px', marginTop: '4px', opacity: 0.7 }}>Dairy Plant</div>
    </div>
);

const JunctionNode = ({ data }) => (
    <div className="custom-node junction" style={{ borderColor: getStatusColor(data.status) }}>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
        <span style={{ fontSize: '10px' }}>{data.label}</span>
    </div>
);

const HubNode = ({ data }) => (
    <div className="custom-node hub" style={{ borderColor: getStatusColor(data.status) }}>
        <Handle type="target" position={Position.Left} />
        <Activity size={20} style={{ marginBottom: '5px', color: '#38bdf8' }} />
        <div>{data.label}</div>
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
                <h2 style={{ fontSize: '1.2rem', margin: 0 }}>Gas Network Visualizer</h2>
                <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <div className="status-dot"></div> Active Flow
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ color: '#38bdf8' }}>●</span> Hub
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

            {hoveredInfo && (
                <div className="info-panel">
                    {hoveredInfo.type === 'node' && (
                        <>
                            <div className="info-title">
                                {hoveredInfo.data.name || hoveredInfo.data.label || hoveredInfo.data.id}
                            </div>

                            {hoveredInfo.data.min_flow_rate && (
                                <div className="info-row">
                                    <span>Flow Rate</span>
                                    <span>{hoveredInfo.data.min_flow_rate} - {hoveredInfo.data.max_flow_rate} SCFM</span>
                                </div>
                            )}

                            {hoveredInfo.data.gas_composition && (
                                <>
                                    <div style={{ marginTop: '10px', marginBottom: '5px', color: '#94a3b8', fontSize: '0.8rem' }}>Composition</div>
                                    <div className="info-row">
                                        <span>Methane</span>
                                        <span>{hoveredInfo.data.gas_composition.methane}%</span>
                                    </div>
                                    <div className="info-row">
                                        <span>CO2</span>
                                        <span>{hoveredInfo.data.gas_composition.co2}%</span>
                                    </div>
                                </>
                            )}

                            {hoveredInfo.data.temperature && (
                                <div className="info-row">
                                    <span>Temperature</span>
                                    <span>{hoveredInfo.data.temperature}°F</span>
                                </div>
                            )}
                        </>
                    )}

                    {hoveredInfo.type === 'edge' && (
                        <>
                            <div className="info-title">Pipeline Connection</div>
                            <div className="info-row">
                                <span>From</span>
                                <span>{hoveredInfo.data.from}</span>
                            </div>
                            <div className="info-row">
                                <span>To</span>
                                <span>{hoveredInfo.data.to}</span>
                            </div>
                            <div className="info-row">
                                <span>Distance</span>
                                <span>{hoveredInfo.data.distance_miles} miles</span>
                            </div>
                            <div className="info-row">
                                <span>Diameter</span>
                                <span>{hoveredInfo.data.pipe_diameter}</span>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default GasNetworkGraph;
