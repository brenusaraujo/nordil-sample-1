
import { Home, ChartBar, Database, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, Link } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DashboardSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="fixed w-64 h-full bg-white border-r border-gray-200 p-4">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600">Nordil Dashboard</h2>
        </div>
        
        <nav className="flex-1">
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/reports">
                <ChartBar className="mr-2 h-4 w-4" />
                Relatórios
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/products">
                <Database className="mr-2 h-4 w-4" />
                Produtos
              </Link>
            </Button>
          </div>
        </nav>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" className="w-full justify-start text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Deseja realmente sair?</AlertDialogTitle>
              <AlertDialogDescription>
                Você será desconectado do sistema e redirecionado para a página de login.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleLogout}>Sair</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default DashboardSidebar;
