import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { useProducts } from '@/hooks/useProducts';
  import { Skeleton } from "@/components/ui/skeleton";
  
  const ProductsTable = () => {
    const { data: products, isLoading, error } = useProducts();
    
    if (isLoading) {
      return (
        <div className="space-y-2">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
      );
    }
    
    if (error || !products) {
      return <div className="text-sm text-red-500">Erro ao carregar produtos</div>;
    }
    
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead>Marca</TableHead>
              <TableHead>Estoque</TableHead>
              <TableHead className="text-right">Preço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell className="text-right">
                  R$ {product.price.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default ProductsTable;
  