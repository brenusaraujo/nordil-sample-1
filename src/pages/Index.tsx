
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import SalesChart from '@/components/dashboard/SalesChart';
import ProductsTable from '@/components/dashboard/ProductsTable';
import BrandsPieChart from '@/components/dashboard/BrandsPieChart';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar autenticação
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <DashboardLayout>
      <div className="grid gap-4 md:gap-8">
        <h1 className="text-3xl font-bold">Dashboard de Vendas</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SalesChart />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-4">Produtos em Estoque</h2>
            <ProductsTable />
          </div>
          <div>
            <BrandsPieChart />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
