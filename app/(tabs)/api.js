const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.0.215:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: usuario, // Usar o nome de usuário capturado
          password: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Login bem-sucedido:', data);
      } else {
        console.log('Erro no login:', data.message);
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
  };
