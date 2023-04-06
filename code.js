const salarios = [386, 394, 400, 400, 425, 450];
      const años = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"];

      const canvas = document.getElementById('grafica');
      const ctx = canvas.getContext('2d');

      canvas.width = 800;
      canvas.height = 500;

      const anchoBarra = 80;
      const espacioEntreBarras = 10;
      const alturaMaxima = Math.max(...salarios) * 1.2;
      const colores = ["#f44336", "#e91e63", "#9c27b0", "#2196f3", "#00bcd4", "#4caf50", "#ff9800"];

      let posicionX = (canvas.width - (anchoBarra + espacioEntreBarras) * salarios.length + espacioEntreBarras) / 2;
      ctx.font = "20px Arial"; 
      salarios.forEach((salario, index) => {
        const alturaBarra = salario / alturaMaxima * canvas.height;
        ctx.fillStyle = colores[index];
        ctx.fillRect(posicionX, canvas.height - alturaBarra, anchoBarra, alturaBarra);
        ctx.strokeRect(posicionX, canvas.height - alturaBarra, anchoBarra, alturaBarra);

        ctx.fillStyle = "#000000";
        ctx.fillText(años[index], posicionX + 20, canvas.height - 20); // Ajusta la posición X de los años
        // ctx.fillText(años[index], posicionX + anchoBarra / 2, canvas.height - 5);
        ctx.fillText("$" + salario, posicionX + anchoBarra / 2, canvas.height - alturaBarra - 10);

        posicionX += anchoBarra + espacioEntreBarras;
      });