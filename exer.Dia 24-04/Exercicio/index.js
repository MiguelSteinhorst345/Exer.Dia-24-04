 function toggleImage(id, btn, nome) {
      const img = document.getElementById(id);

      if (img.style.display === "none") {
        img.style.display = "block";
        btn.textContent = "Clique " + nome;
      } else {
        img.style.display = "none";
        btn.textContent = "Som de desaparecimento" + nome;
      }
    }