type TitleAmountCardProps = {
    title: string;
    amount: number;
};

function TitleAmountCard({ title, amount }: TitleAmountCardProps) {
    return (
        <div className="bg-white rounded-lg shadow p-6 w-full">
            <h5 className="text-xs font-semibold text-gray-700 uppercase tracking-widest">{title}</h5>
            <h1 className="text-4xl font-bold text-gray-700 my-2">${amount.toFixed(2)}</h1>
        </div>
    );
}

export default TitleAmountCard;