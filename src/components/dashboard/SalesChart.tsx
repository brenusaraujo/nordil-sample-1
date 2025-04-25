
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSales } from '@/hooks/useSales';
import { useProducts } from '@/hooks/useProducts';
import { useSellers } from '@/hooks/useSellers';
import { Skeleton } from "@/components/ui/skeleton";

const SalesChart = () => {
  const { data: sales, isLoading: salesLoading } = useSales();
  const { data: sellers, isLoading: sellersLoading } = useSellers();
  const { data: products, isLoading: productsLoading } = useProducts();
  
  const isLoading = salesLoading || sellersLoading || productsLoading;
  
  let salesData: { name: string; total: number }[] = [];
  
  if (!isLoading && sales && sellers && products) {
    salesData = sellers.map((seller) => {
      const sellerSales = sales.filter((sale) => sale.sellerId === seller.id);
      const totalSales = sellerSales.reduce((acc, sale) => {
        const product = products.find((p) => p.id === sale.productId);
        return acc + (product?.price || 0) * sale.quantity;
      }, 0);

      return {
        name: seller.name,
        total: totalSales,
      };
    });
  }

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Vendas por Vendedor</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <Skeleton className="h-full w-full" />
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `R$ ${Number(value).toFixed(2)}`} />
                <Bar dataKey="total" fill="#9b87f5" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
