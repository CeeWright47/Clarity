type TransactionRowProps = {
  merchant: string
  category: string
  account: string
  date: string
  amount: number
}

function TransactionRow({ merchant, category, account, date, amount }: TransactionRowProps) {
  const isIncome = amount > 0

  return (
    <tr className="border-b border-gray-50 hover:bg-gray-50">
      <td className="px-6 py-4 font-medium text-gray-900">{merchant}</td>
      <td className="px-6 py-4">
        <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
          {category}
        </span>
      </td>
      <td className="px-6 py-4 text-gray-500">{account}</td>
      <td className="px-6 py-4 text-gray-500">{date}</td>
      <td className={`px-6 py-4 text-right font-bold ${isIncome ? "text-emerald-500" : "text-gray-900"}`}>
        {isIncome ? "+" : "-"}${Math.abs(amount).toFixed(2)}
      </td>
    </tr>
  )
}

export default TransactionRow