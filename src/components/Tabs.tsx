"use client";

import { useState, useEffect } from "react";
import About from "./About";

// Individual tab content components
const Tab1Content = () => <About />;

const Tab2Content = () => (
  <div>
    <h2>Welcome to Tab 2</h2>
    <p>Here is the information for Tab 2.</p>
  </div>
);

const Tab3Content = () => (
  <div>
    <h2>Welcome to Tab 3</h2>
    <p>Tab 3 displays this content.</p>
  </div>
);

// Define the structure for tab configuration
type TabConfig = {
  [key: string]: {
    label: string;
    Component: React.ComponentType;
  };
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<string | null>(null); // Initialize as null

  useEffect(() => {
    setActiveTab("Tab1"); // Set a default after mount to avoid hydration issues
  }, []);

  if (activeTab === null) {
    return null; // Return nothing while waiting for hydration
  }

  // Tab configuration object
  const tabs: TabConfig = {
    Tab1: {
      label: "Tab 1",
      Component: Tab1Content,
    },
    Tab2: {
      label: "Tab 2",
      Component: Tab2Content,
    },
    Tab3: {
      label: "Tab 3",
      Component: Tab3Content,
    },
  };

  // CSS styles
  const tabStyle: { [key: string]: React.CSSProperties } = {
    tabsContainer: {
      display: "flex",
      justifyContent: "center", // Align tabs to the right
      marginBottom: "16px",
      backgroundColor: "#1E1E1F",
      padding: "20px",
      borderRadius: "30px",
    },
    tab: {
      padding: "8px 16px",
      cursor: "pointer",
      borderTop: "1px solid transparent",
      borderLeft: "1px solid transparent",
      borderRight: "1px solid transparent",
      borderBottom: "1px solid #ccc",
      background: "none",
      fontSize: "16px",
    },
    activeTab: {
      borderBottom: "2px solid blue",
      fontWeight: "bold",
      color: "blue",
    },
    content: {
      marginTop: "0", // Start content from the top of the container
      fontFamily: "Arial, sans-serif",
    },
  };

  const ActiveTabContent = tabs[activeTab].Component;

  return (
    <div
      style={{
        backgroundColor: "#1E1E1F",
        padding: "20px",
        borderRadius: "30px",
        height: "100%", // Ensure the height stretches fully
      }}
    >
      {/* Tab Headers */}
      <div style={tabStyle.tabsContainer}>
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={
              activeTab === tab
                ? { ...tabStyle.tab, ...tabStyle.activeTab }
                : tabStyle.tab
            }
          >
            {tabs[tab].label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={tabStyle.content}>
        <ActiveTabContent />
      </div>
    </div>
  );
}
