// src/components/Sidebar.tsx
import { NavLink } from "react-router-dom"
import { Home, Receipt, BarChart3, Zap, RefreshCw, Target, CreditCard, CalendarClock } from "lucide-react"

const navItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Transactions", icon: Receipt, path: "/transactions" },
  { label: "Spending", icon: BarChart3, path: "/spending" },
  { label: "Impact", icon: Zap, path: "/impact" },
  { label: "Subscriptions", icon: RefreshCw, path: "/subscriptions" },
  { label: "Goals", icon: Target, path: "/goals" },
  { label: "Debt Payoff", icon: CreditCard, path: "/debt-payoff" },
  { label: "Monthly Recap", icon: CalendarClock, path: "/monthly-recap" },
]

function Sidebar() {
  return (
    <aside className="w-56 bg-[#0D1B2E] h-full shrink-0 flex flex-col p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">
          C
        </div>
        <span className="text-white font-bold text-lg">Clarity</span>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-[#1E3050] text-white"
                  : "text-gray-400 hover:bg-[#1E3050] hover:text-white"
              }`
            }
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar