import { MarketCard } from "./MarketCard";

const mockData = [
  {
    title: "Safaricom",
    symbol: "SCOM.NR",
    price: 23.45,
    change: 2.5,
    currency: "KES",
  },
  {
    title: "Bitcoin",
    symbol: "BTC/USD",
    price: 43250.67,
    change: -1.2,
    currency: "USD",
  },
  {
    title: "EUR/KES",
    symbol: "EUR/KES",
    price: 142.35,
    change: 0.5,
    currency: "KES",
  },
  {
    title: "Gold",
    symbol: "XAU/USD",
    price: 1890.30,
    change: 0.8,
    currency: "USD",
  },
];

export function MarketOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {mockData.map((market) => (
        <MarketCard
          key={market.symbol}
          title={market.title}
          symbol={market.symbol}
          price={market.price}
          change={market.change}
          currency={market.currency}
        />
      ))}
    </div>
  );
}