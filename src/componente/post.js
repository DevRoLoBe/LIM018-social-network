export const postView = () => {
  const post = /*html*/ ` 
      <section class="postContainer">
        <div class="descripcion">
        <textarea class="textArea"></textarea>
        </div>
        <div class="foto"></div>
        <section class= "botonesPost">
         <!-- <button> <a href='#/'>Subir Foto</a></button> -->
          <input type="file"> 
          <button> <a href='#/'>Publicar</a></button> 
      </section>
        `;
  const sectionPost = document.createElement('section');
  sectionPost.innerHTML = post;
  sectionPost.classList.add('seccion');
  return sectionPost;
};
