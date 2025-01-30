import { MarketOverview } from "@/components/MarketOverview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Jenga Insights</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Your window to global and Kenyan markets
            </p>
          </div>
          <MarketOverview />
        </div>
      </main>
    </div>
  );
};

export default Index;