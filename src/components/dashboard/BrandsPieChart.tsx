
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSales } from '@/hooks/useSales';
import { useProducts } from '@/hooks/useProducts';
import { Skeleton } from "@/components/ui/skeleton";

const COLORS = ['#9b87f5', '#1EAEDB', '#ea384c', '#8E9196'];

const BrandsPieChart = () => {
  const { data: sales, isLoading: salesLoading } = useSales();
  const { data: products, isLoading: productsLoading } = useProducts();
  
  const isLoading = salesLoading || productsLoading;
  
  let brandSalesData: { name: string; value: number }[] = [];
  
  if (!isLoading && sales && products) {
    brandSalesData = sales.reduce((acc, sale) => {
      const product = products.find((p) => p.id === sale.productId);
      if (!product) return acc;

      const brandSales = acc.find((item) => item.name === product.brand);
      if (brandSales) {
        brandSales.value += sale.quantity;
      } else {
        acc.push({ name: product.brand, value: sale.quantity });
      }
      return acc;
    }, [] as { name: string; value: number }[]);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Vendas por Marca</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <Skeleton className="h-full w-full rounded-full" />
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={brandSalesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {brandSalesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} unidades`, 'Vendas']} />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BrandsPieChart;
