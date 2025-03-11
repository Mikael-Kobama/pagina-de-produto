document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.querySelector(".product-gallery img");
  const thumbnails = document.querySelectorAll(".gallery-thumbnails img");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      // Cria uma nova imagem para manter qualidade e evitar efeito borrado
      const newImage = new Image();
      newImage.src = thumbnail.src;
      newImage.alt = thumbnail.alt;
      newImage.className = mainImage.className; // Mantém as classes

      // Substitui a imagem principal mantendo estilos e efeitos
      mainImage.replaceWith(newImage);
    });
  });

  // Alerta ao adicionar ao carrinho
  document.querySelector(".add-to-cart").addEventListener("click", () => {
    alert("Produto adicionado ao carrinho!");
  });
});
