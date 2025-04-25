
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
import { calculateProductReports } from "@/utils/reportUtils";
import { Skeleton } from "@/components/ui/skeleton";

const Products = () => {
  const { data: products, isLoading, error } = useProducts();
  const productsData = products ? calculateProductReports(products) : [];

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Gerenciamento de Produtos</h1>
        
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : error ? (
          <div className="text-red-600 p-4 border border-red-300 rounded-md bg-red-50">
            Erro ao carregar produtos. Tente novamente mais tarde.
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produto</TableHead>
                  <TableHead>Estoque Atual</TableHead>
                  <TableHead>Preço Unitário</TableHead>
                  <TableHead>Valor Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ponto de Reposição</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productsData.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.stock} unidades</TableCell>
                    <TableCell>R$ {product.unitPrice.toFixed(2)}</TableCell>
                    <TableCell>R$ {product.totalValue.toFixed(2)}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          product.status === "Baixo estoque"
                            ? "bg-red-100 text-red-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {product.status}
                      </span>
                    </TableCell>
                    <TableCell>{product.reorderPoint}</TableCell>
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

export default Products;
