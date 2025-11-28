import React, { useState } from 'react';
import SitesDashboard from './components/SitesDashboard';
import GasNetworkGraph from './components/GasNetworkGraph';
import { LayoutDashboard, Wind } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('sites');

  return (
    <div className="main-layout">
      {/* Sidebar Placeholder - Visual only to match image structure */}
      <aside className="sidebar">
        <div className="logo-area">OMai</div>
        <nav className="nav-menu">
          <div className="nav-item">Drafts (1)</div>
          <div className="nav-item">Expired (4)</div>
          <div className="nav-item active">Clients (8)</div>
          <div className="sub-nav">
            <div>Aemetis</div>
            <div>Biogas Engineering</div>
          </div>
        </nav>
      </aside>

      <main className="main-content">
        {/* Top Header Area */}
        <header className="top-header">
          <div className="client-info">
            <div className="client-logo">AEMETIS</div>
            <div className="client-details">
              <h1>Aemetis</h1>
              <a href="#">omai@biogaseng.com</a>
              <p>20400 STEVENS CREEK BLVD, STE 700, CUPERTINO 95014</p>
            </div>
          </div>
          <div className="header-stats">
            <div>Subscription End Date: March 15, 2026</div>
            <div className="stats-icons">
              <span>20 Sites</span>
              <span>10 Users</span>
              <span>10 Dash</span>
              <span>100 Alerts</span>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="tabs-container">
          <button
            className={`tab-button ${activeTab === 'sites' ? 'active' : ''}`}
            onClick={() => setActiveTab('sites')}
          >
            <LayoutDashboard size={16} />
            Sites
          </button>
          <button
            className={`tab-button ${activeTab === 'gas' ? 'active' : ''}`}
            onClick={() => setActiveTab('gas')}
          >
            <Wind size={16} />
            Gas Flow Composition
          </button>
        </div>

        {/* Content Area */}
        <div className="content-area">
          {activeTab === 'sites' ? <SitesDashboard /> : <GasNetworkGraph />}
        </div>
      </main>
    </div>
  );
}

export default App;
