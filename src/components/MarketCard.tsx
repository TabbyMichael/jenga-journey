import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface MarketCardProps {
  title: string;
  symbol: string;
  price: number;
  change: number;
  currency?: string;
  onClick?: () => void;
}

export function MarketCard({ 
  title, 
  symbol, 
  price, 
  change, 
  currency = "USD",
  onClick 
}: MarketCardProps) {
  const isPositive = change > 0;
  const isNegative = change < 0;

  return (
    <Card 
      className="p-6 hover:shadow-lg transition-shadow animate-fade-up cursor-pointer"
      onClick={onClick}
    >
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">{symbol}</p>
          </div>
          <div className={cn(
            "flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
            isPositive && "bg-market-up/10 text-market-up",
            isNegative && "bg-market-down/10 text-market-down",
            !isPositive && !isNegative && "bg-market-neutral/10 text-market-neutral"
          )}>
            {isPositive && <ArrowUpIcon className="w-3 h-3 mr-1" />}
            {isNegative && <ArrowDownIcon className="w-3 h-3 mr-1" />}
            {change.toFixed(2)}%
          </div>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-2xl font-bold">
            {currency} {price.toLocaleString()}
          </p>
        </div>
      </div>
    </Card>
  );
}