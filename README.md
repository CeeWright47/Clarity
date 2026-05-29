# Clarity

A personal finance dashboard built with React and TypeScript. Clarity gives you a clean, at-a-glance view of your financial health — balances, net worth, debt, spending trends, and account summaries in one place.

## Features

- **Total Balance, Net Worth & Total Debt** — top-level summary cards
- **Weekly Spending Pulse** — bar chart showing daily spend for the current week
- **Monthly Income / Bills / Spent** — key monthly figures at a glance
- **Account Balance Cards** — per-account view with masked account numbers and balance change indicators

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [Recharts](https://recharts.org/) | Charts |
| [Lucide React](https://lucide.dev/) | Icons |

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── App.jsx
├── index.css
├── main.jsx
└── components/
    ├── AccountBalanceCard.tsx
    ├── NetWorthCard.tsx
    ├── TitleAmountCard.tsx
    ├── TotalBalanceCard.tsx
    ├── TotalDebtCard.tsx
    └── WeeklyOverviewCard.tsx
```

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
