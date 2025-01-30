import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const mockChartData = [
  { date: "2024-01", value: 23.45 },
  { date: "2024-02", value: 24.12 },
  { date: "2024-03", value: 23.89 },
  { date: "2024-04", value: 24.56 },
  { date: "2024-05", value: 25.01 },
  { date: "2024-06", value: 24.78 },
];

interface ChartDialogProps {
  isOpen: boolean;
  onClose: () => void;
  market: {
    title: string;
    symbol: string;
    price: number;
    currency: string;
  };
}

export function ChartDialog({ isOpen, onClose, market }: ChartDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{market.title} ({market.symbol})</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="line" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="line">Line Chart</TabsTrigger>
            <TabsTrigger value="candlestick">Candlestick</TabsTrigger>
          </TabsList>
          <TabsContent value="line" className="h-[400px]">
            <ChartContainer
              className="w-full"
              config={{
                line: {
                  theme: {
                    light: "hsl(var(--primary))",
                    dark: "hsl(var(--primary))",
                  },
                },
              }}
            >
              <AreaChart data={mockChartData}>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" />
                <YAxis 
                  domain={['auto', 'auto']}
                  tickFormatter={(value) => `${market.currency} ${value}`}
                />
                <Tooltip 
                  formatter={(value: number) => [`${market.currency} ${value}`, 'Price']}
                  labelFormatter={(label) => `Date: ${label}`}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#gradient)"
                />
              </AreaChart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="candlestick" className="h-[400px]">
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Candlestick chart coming soon...
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}