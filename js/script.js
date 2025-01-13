// Script para interatividade básica da página

document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".menu a");

    // Scroll suave para seções ao clicar no menu
    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Validação simples de formulário
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos antes de enviar.");
        } else {
            alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
            form.reset();
        }
    });

    // Adicionar botão de voltar ao topo
    const toTopButton = document.createElement("button");
    toTopButton.textContent = "↑ Voltar ao topo";
    toTopButton.classList.add("to-top-button");
    document.body.appendChild(toTopButton);

    toTopButton.style.position = "fixed";
    toTopButton.style.bottom = "20px";
    toTopButton.style.right = "20px";
    toTopButton.style.padding = "10px 15px";
    toTopButton.style.backgroundColor = "#ffcc00";
    toTopButton.style.color = "#333";
    toTopButton.style.border = "none";
    toTopButton.style.borderRadius = "5px";
    toTopButton.style.cursor = "pointer";
    toTopButton.style.display = "none";

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            toTopButton.style.display = "block";
        } else {
            toTopButton.style.display = "none";
        }
    });

    toTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
