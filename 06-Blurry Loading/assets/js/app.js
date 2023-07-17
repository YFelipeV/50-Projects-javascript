const loadtext = document.querySelector(".loading-text");
    const bg = document.querySelector(".bg");
    let load = 0;
    let init = setInterval(blurring, 30);

    function blurring() {
      load++;
      console.log(load);
      if (load > 99) {
        clearInterval(init);
      }

      loadtext.innerText = `${load}%`;

      // La función scale para re-mapear un valor de un rango a otro
      function scale(num, in_min, in_max, out_min, out_max) {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      }

      // Aplicar la opacidad
      loadtext.style.opacity = scale(load, 0, 100, 1, 0);
      
      // Aplicar el efecto de desenfoque
      bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    }
