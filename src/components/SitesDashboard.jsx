import React from 'react';
import { apiResponse } from '../data';

const SiteCard = ({ plant }) => {
    // Mock data to match the image style since we don't have all fields in data.js
    const totalEnergy = (Math.random() * 10).toFixed(2);
    const h2s = "0.00";
    const co2 = plant.gas_composition?.co2 || "0.00";
    const o2 = plant.gas_composition?.oxygen || "0.00";
    const n2 = plant.gas_composition?.nitrogen || "0.00";
    const ch4 = plant.gas_composition?.methane || "0.00";

    return (
        <div className="site-card">
            <div className="site-header">
                <h3>{plant.name}</h3>
                <div className="status-indicator"></div>
            </div>

            <div className="gauge-container">
                {/* Simple CSS Gauge Placeholder */}
                <div className="gauge-arc">
                    <div className="gauge-needle" style={{ transform: `rotate(${Math.random() * 180 - 90}deg)` }}></div>
                </div>
                <div className="gauge-label">Flow Target (SCFM)</div>
            </div>

            <div className="data-grid">
                <div className="data-item">
                    <div className="label">Total Energy (mmbtu)</div>
                    <div className="value">{totalEnergy}</div>
                </div>
                <div className="data-item">
                    <div className="label">H2S (ppm)</div>
                    <div className="value">{h2s}</div>
                </div>
                <div className="data-item">
                    <div className="label">CO2 (%)</div>
                    <div className="value">{co2}</div>
                </div>
                <div className="data-item">
                    <div className="label">O2 (%)</div>
                    <div className="value">{o2}</div>
                </div>
                <div className="data-item">
                    <div className="label">N2 (%)</div>
                    <div className="value">{n2}</div>
                </div>
                <div className="data-item">
                    <div className="label">CH4 (%)</div>
                    <div className="value">{ch4}</div>
                </div>
            </div>
        </div>
    );
};

const SitesDashboard = () => {
    const plants = apiResponse.plants;

    return (
        <div className="sites-dashboard">
            <div className="sites-header-section">
                <h2>SITES ({plants.length})</h2>
            </div>
            <div className="sites-grid">
                {plants.map((plant) => (
                    <SiteCard key={plant.id} plant={plant} />
                ))}
                {/* Add Hub as a card too if needed, or just plants */}
                <div className="site-card">
                    <div className="site-header">
                        <h3>HUB</h3>
                        <div className="status-indicator"></div>
                    </div>
                    <div className="gauge-container">
                        <div className="gauge-arc">
                            <div className="gauge-needle" style={{ transform: `rotate(45deg)` }}></div>
                        </div>
                        <div className="gauge-label">Flow Target (SCFM)</div>
                    </div>
                    <div className="data-grid">
                        <div className="data-item"><div className="label">Total Energy</div><div className="value">93.51</div></div>
                        <div className="data-item"><div className="label">H2S</div><div className="value">0.00</div></div>
                        <div className="data-item"><div className="label">CO2</div><div className="value">0.21</div></div>
                        <div className="data-item"><div className="label">O2</div><div className="value">0.00</div></div>
                        <div className="data-item"><div className="label">N2</div><div className="value">2.08</div></div>
                        <div className="data-item"><div className="label">CH4</div><div className="value">97.61</div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SitesDashboard;
