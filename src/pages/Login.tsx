
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulando login (substituir por autenticação real)
    if (email === 'vendedor@empresa.com' && password === 'senha123') {
      // Armazenar informação de login (temporário)
      localStorage.setItem('isAuthenticated', 'true');
      
      // Redirecionar para o dashboard
      navigate('/');
    } else {
      // Optionally, you could add a more accessible error handling method
      // For example, using an error state to show inline error messages
      console.error("Login failed: Incorrect email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <Input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                placeholder="vendedor@empresa.com" 
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium">Senha</label>
              <Input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                placeholder="Dica: use 'senha123'" 
              />
            </div>
            <Button type="submit" className="w-full">Entrar</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

