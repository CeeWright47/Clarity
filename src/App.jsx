import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import HomePage from "./pages/HomePage"
import TransactionsPage from "./pages/TransactionsPage"
import SpendingPage from "./pages/SpendingPage"
import ImpactPage from "./pages/ImpactPage"
import SubscriptionPage from "./pages/SubscriptionPage"
import GoalsPage from "./pages/GoalsPage"
import DebtPayoffPage from "./pages/DebtPayoffPage"
import MonthlyRecapPage from "./pages/MonthlyRecapPage"

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/spending" element={<SpendingPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/subscriptions" element={<SubscriptionPage />} />
            <Route path="/goals" element={<GoalsPage />} />
            <Route path="/debt-payoff" element={<DebtPayoffPage />} />
            <Route path="/monthly-recap" element={<MonthlyRecapPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
export default App