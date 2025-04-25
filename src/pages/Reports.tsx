
import DashboardLayout from "@/components/DashboardLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useProducts } from "@/hooks/useProducts";
import { useSales } from "@/hooks/useSales";
import { useSellers } from "@/hooks/useSellers";
import { calculateSellerReports } from "@/utils/reportUtils";
import { Skeleton } from "@/components/ui/skeleton";

const Reports = () => {
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: sales, isLoading: salesLoading } = useSales();
  const { data: sellers, isLoading: sellersLoading } = useSellers();

  const isLoading = productsLoading || salesLoading || sellersLoading;
  const error = !products || !sales || !sellers;
  
  const salesData = !isLoading && !error 
    ? calculateSellerReports(sales, sellers, products)
    : [];

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Relatório de Vendas</h1>
        
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : error ? (
          <div className="text-red-600 p-4 border border-red-300 rounded-md bg-red-50">
            Erro ao carregar dados. Tente novamente mais tarde.
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vendedor</TableHead>
                  <TableHead>Total Vendido</TableHead>
                  <TableHead>Comissão</TableHead>
                  <TableHead>Produtos Vendidos</TableHead>
                  <TableHead>Desempenho</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {salesData.map((sale) => (
                  <TableRow key={sale.id}>
                    <TableCell className="font-medium">{sale.seller}</TableCell>
                    <TableCell>R$ {sale.sales.toFixed(2)}</TableCell>
                    <TableCell>R$ {sale.commission.toFixed(2)}</TableCell>
                    <TableCell>{sale.products} unidades</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          sale.performance === "Acima da meta"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {sale.performance}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Reports;