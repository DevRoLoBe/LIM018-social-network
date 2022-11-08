import {
  getPosts,
  getPost,
  createPost,
  onGetPosts,
  updatePost,
} from '../firebaseconfig/post.js';
import { getCurrentUser } from '../firebaseconfig/auth.js';
import { userInfoView } from '../lib/index.js';
import { btnModales } from './utils.js';

export const homeView = () => {
  const home = /* Html */`
  <header class="header">
    <img class="logo-top" src="imagenes/titulo.png" class="logo hidden" alt="perro y gato abrazadose">
    <span id="agregar" class="btn-img"><img src="imagenes/agregar.png"></span>
  </header> 
  <section class="secc-perfilName"> <!--Container Info-->
  <!--User info es el div que contiene la imagen y el nombre-->
    <div id="perfilPerson"> <!--User Image -->
      <img src="imagenes/usuario.png">
    </div>
  </section>
  <section class="secc-publicacionFoto">
  </section>
  <div class="container-modal">
    <div class="content-modal postModal">
      <div class="tituloPublicacion">
        <h2>Publicacion</h2>
        <div id="btn-cerrar" class="btn-cerrarRed"><i class="uil uil-multiply"></i>
        </div>
      </div>
      <div class="descripcion">
        <section class="post-imagen-msj">
        <img id="imgSeleccionada"class="imgSeleccionada"src="imagenes/loginAbrazo.png" alt="Imagen seleccionada">
        <p id='msg'></p>
        </section>
        <textarea id="descripcion"class="textArea"></textarea>
      </div>
      <section class= "botonesPost">
        <input type="file" class="input-file"> 
        <button id="btn-publicar">Publicar</button> 
      </section>
    </div>
  </div>
  <footer class="menu">
    <nav class="menuInferior ">
      <a href='#/home'><img src="imagenes/home.png"></a>
      <!--<a href='#'><img src="imagenes/buscar.png"></a>-->
      <a href='#/servicio'><img src="imagenes/donarMano.png"></a>
      <a href='#/profile'><img src="imagenes/usuario.png"></a>
    </nav>
  </footer>
    `;
  const sectionHome = document.createElement('section');
  sectionHome.classList.add('seccionPrincipal');
  sectionHome.innerHTML = home;
  const userInfoContainer = sectionHome.querySelector('secc-perfilName');
  userInfoView(userInfoContainer);
  return sectionHome;
};
export const homeDom = () => {
  const userPost = document.querySelector('#descripcion');
  const buttonPost = document.querySelector('#btn-publicar');
  const ventanaModal = document.querySelector('.container-modal');
  const btnAgregar = document.querySelector('#agregar');
  const btnCerrar = document.querySelector('#btn-cerrar');
  const fechaPost = new Date().toLocaleString();
  const containerPosts = document.querySelector('.secc-publicacionFoto');
  const msg = document.querySelector('#msg');

  const generatePostContent = (post) => {
    console.log(post.data());
    const likeActive = post.data().likes.includes(getCurrentUser().uid);
    const userImage = post.data().photoUser !== null ? post.data().photoUser : './imagenes/usuario.png';
    const postContent = `
      <section class="postContainer">
        <section class="secc-nombre">
          <div>
            <img src='${userImage}' referrerpolicy='no-referrer'>
          </div>
          <span id ="nameFecha">
            <span >${post.data().userName !== null ? post.data().userName : 'Usuario'}</span>
            <span id="fecha">${post.data().fechaPost}</span>
          </span>
        </section>
          <p id=${post.id} class="descripcion-texto">${post.data().content}</p>
          <nav class="secc-like">
            <span data-id=${post.id} class="spanLikeComent">
              <button data-id ="${post.id}" class="licogu like"> <img src='${likeActive ? './imagenes/likeRojo.png' : './imagenes/like.png'}'></button>
              <p class="cantidad-likes"><span id= 'numeroLikes'>${post.data().likes.length}</span> Me gusta</p>
          </span>
        <!-- <button class="licogu guardar"><img src="imagenes/guardar.png"></button> -->
        </nav>
      </section>
      `; return postContent;
  };

  const queryPosts = () => {
    getPosts()
      .then((postsRef) => {
        let content = '';

        postsRef.forEach((postR) => {
          content += generatePostContent(postR);
          containerPosts.innerHTML = content;

          const likeBtns = document.querySelectorAll('.like');

          const countingLikesOfPost = async (e) => {
            const idLikeBtn = e.currentTarget.dataset.id;
            const postDoc = await getPost(idLikeBtn);
            const likesOfPost = postDoc.data().likes;
            const idUser = getCurrentUser().uid;

            if (likesOfPost.includes(idUser)) {
              const compareIdLikesUsers = likesOfPost.filter((idLikeData) => idLikeData !== idUser);
              updatePost(idLikeBtn, { likes: compareIdLikesUsers });
            } else {
              updatePost(idLikeBtn, { likes: likesOfPost.concat(idUser) });
            }
          };

          likeBtns.forEach((btn) => {
            btn.addEventListener('click', countingLikesOfPost);
          });
        });
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };
  // Actualizar
  onGetPosts(queryPosts);
  // const containerInfo = () => {
  //   const perfilNombre = document.querySelector('.secc-perfilName');
  // }
  // // const id = getCurrentUser().uid;
  // const perfilNombre = document.querySelector('.secc-perfilName');
  // getDatoUser(id)
  //   .then((doc) => {
  //     // muestra el nombre del usuario en el home y perfil
  //     const nombreUser = doc.data().nombre.toUpperCase();
  //     const contenedorName =/* Html */ `
  //     <!--User info es el div que contiene la imagen y el nombre-->
  //     <div class="userInfo">
  //       <div id="perfilPerson"> <!--User Image -->
  //         <img src="imagenes/usuario.png">
  //       </div>
  //       <p>¡ HOLA <span id="nameProfile">${nombreUser} </span> !</p>
  //     </div>
  //    `;
  //     perfilNombre.innerHTML = contenedorName;
  //   });

  btnModales(btnAgregar, ventanaModal, 'flex');
  btnModales(btnCerrar, ventanaModal, 'none');

  buttonPost.addEventListener('click', () => {
    // const postContainer = document.querySelector('.descripcion');
    // evaluar contenido que ingresó el usuario en textarea
    if (userPost.value !== '') {
      msg.classList.remove('errorMessage');
      msg.textContent = '';
      // Creando los campos de savePost()cuando le demos al btn publicar
      createPost({
        userName: getCurrentUser().displayName,
        content: userPost.value,
        userId: getCurrentUser().uid,
        fechaPost,
        likes: [],
        photoUser: getCurrentUser().photoURL,
      })
        .then((docRef) => {
          // eslint-disable-next-line no-console
          console.log(docRef);
          // postContainer.reset();
        })// eslint-disable-next-line no-console
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.log(e);
        });
    } else {
      msg.textContent = 'Por favor, escribe un comentario';
      msg.classList.add('errorMessage');
    }
    ventanaModal.style.display = 'none';
    const descripcionText = document.querySelector('.textArea');
    descripcionText.value = '';
  });
};
