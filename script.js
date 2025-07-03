  const times = [];

    function cadastrarTime() {
      const nomeTime = document.getElementById("teamName").value.trim();
      const nomesJogadores = document.querySelectorAll(".playerName");
      const idadesJogadores = document.querySelectorAll(".playerAge");
      const alerta = document.getElementById("alerta");

      if (!nomeTime) {
        alerta.textContent = "Por favor, preencha o nome do time.";
        return;
      }

      const jogadores = [];
      let somaIdades = 0;

      for (let i = 0; i < 3; i++) {
        const nome = nomesJogadores[i].value.trim().toLowerCase();
        const idade = parseInt(idadesJogadores[i].value);

        if (!nome || isNaN(idade)) {
          alerta.textContent = `Preencha corretamente o nome e idade do jogador ${i + 1}.`;
          return;
        }

        jogadores.push({ nome, idade });
        somaIdades += idade;
      }

      const mediaIdade = somaIdades / 3;

      if (mediaIdade > 15) {
        alerta.textContent = "Média de idade maior que 15. Cadastre um time com média menor ou igual a 15.";
        return;
      }

      const novoTime = {
        nome: nomeTime.toUpperCase(),
        media: mediaIdade.toFixed(1),
        jogadores
      };

      times.push(novoTime);
      alerta.textContent = "";
      atualizarListaTimes();
      limparFormulario();
    }

    function atualizarListaTimes() {
      const lista = document.getElementById("timesList");
      lista.innerHTML = "";

      times.forEach((time) => {
        const div = document.createElement("div");
        div.className = "team-container";

        let conteudo = `<div class="team-name">${time.nome}</div>`;
        conteudo += `<p>Média de idade: ${time.media}</p>`;
        conteudo += `<ul>`;
        time.jogadores.forEach(jogador => {
          conteudo += `<li>${jogador.nome} - ${jogador.idade} anos</li>`;
        });
        conteudo += `</ul>`;

        div.innerHTML = conteudo;
        lista.appendChild(div);
      });
    }

    function limparFormulario() {
      document.getElementById("teamName").value = "";
      document.querySelectorAll(".playerName").forEach(input => input.value = "");
      document.querySelectorAll(".playerAge").forEach(input => input.value = "");
    }