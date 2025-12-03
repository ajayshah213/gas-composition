import React, { useState } from 'react';
import SitesDashboard from './components/SitesDashboard';
import GasNetworkGraph from './components/GasNetworkGraph';
import GasFlowDashboard from './components/GasFlowDashboard';
import { LayoutDashboard, Wind, Gauge, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('sites');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="main-layout">
      {/* Sidebar with Toggle Button */}
      <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>

        {!sidebarCollapsed && (
          <>
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
          </>
        )}
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
          <button
            className={`tab-button ${activeTab === 'control' ? 'active' : ''}`}
            onClick={() => setActiveTab('control')}
          >
            <Gauge size={16} />
            Gas Control
          </button>
        </div>

        {/* Content Area */}
        <div className="content-area">
          {activeTab === 'sites' && <SitesDashboard />}
          {activeTab === 'gas' && <GasNetworkGraph />}
          {activeTab === 'control' && <GasFlowDashboard />}
        </div>
      </main>
    </div>
  );
}

export default App;
