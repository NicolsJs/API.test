async function imgAnime() {    
        try {
          const response = await axios.get('https://api.otakugifs.xyz/gif?reaction=dance&format=gif');
          const gifUrl = response.data.url;
          mostrarGif(gifUrl);
        } catch (error) {
          console.error('Ocorreu um erro:', error);
        }
      }

      function mostrarGif(url) {
      //Caso eu queira salvar a url
        console.log('URL do GIF:', url);
        // para exibir o GIF em uma imagem
        const imagem = document.createElement('img');
        imagem.src = url;
        document.body.appendChild(imagem);
  }