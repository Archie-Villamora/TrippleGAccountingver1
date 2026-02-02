# Frontend Structure

## Folder Organization

```
frontend/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components (buttons, inputs, etc.)
│   │   ├── figma/        # Figma-specific components
│   │   └── DashboardLayout.tsx
│   ├── pages/            # Page-level components
│   │   └── DashboardOverview.tsx
│   ├── features/         # Feature-specific components
│   │   ├── dashboard/    # Dashboard features
│   │   ├── employee/     # Employee management
│   │   ├── payroll/      # Payroll features
│   │   └── attendance/   # Attendance & leave
│   ├── hooks/            # Custom React hooks
│   ├── services/         # API calls & business logic
│   ├── utils/            # Helper functions
│   ├── store/            # State management
│   ├── lib/              # Third-party library configs
│   └── assets/           # Images, fonts, etc.
├── public/               # Static assets
└── index.html            # Entry HTML file
```

## Architecture Principles

- **components/ui**: Generic, reusable UI components
- **pages**: Full page components (route level)
- **features**: Domain-specific components grouped by feature
- **hooks**: Custom hooks for business logic
- **services**: API calls and business logic layer
- **utils**: Pure helper functions

## Running the Frontend

```bash
cd frontend
npm install
npm run dev
```
