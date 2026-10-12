frontend/
├── src/
│   ├── app/              # Routes and application shell
│   ├── components/
│   │   ├── layout/       # Sidebar, header, theme
│   │   ├── dashboard/    # KPI cards, status, alerts
│   │   ├── traffic-3d/   # Scene, roads, vehicles, signals
│   │   ├── simulation/   # Run controls and configuration
│   │   ├── analytics/    # Charts and comparisons
│   │   └── ai-insights/  # Predictions and explanations
│   ├── services/         # HTTP and WebSocket clients
│   ├── features/         # Feature-specific state and logic
│   ├── types/            # Shared TypeScript contracts
│   ├── hooks/            # Reusable React hooks
│   └── test/             # Test setup and utilities
├── public/
├── package.json
└── vite.config.ts