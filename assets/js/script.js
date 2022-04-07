class Multimedia {
  #url;
  constructor(url) {
    this.#url = url;
  }

  get url() {
    return this.#url;
  }

  set url(nuevaUrl) {
    this.#url = nuevaUrl;
  }

  setInicio() {}
}

class Reproductor extends Multimedia {
  constructor(id) {
    super(`https://www.youtube.com/embed/${id}?start=`);
    this.id = id;
  }

  playMultimedia(id) {
    $(`#${id}`).attr("src", this.url);
  }
  setInicio(tiempo) {
    this.url = this.url + tiempo;
  }
}

//-------------------------------------

$(document).ready(() => {
  const $collapseMusica = $("#collapseOneButton");
  const $collapsePelicula = $("#collapseTwoButton");
  const $collapseSerie = $("#collapseThreeButton");
  const video1 = "ulFOtzpDvKc";
  const video2 = "aQOTgvkCyDA";
  const video3 = "euW71JOlKy0";

  $collapseMusica.click(() => {
    const reproductor = new Reproductor(video1);
    reproductor.setInicio(500);
    reproductor.playMultimedia("musica");
  });

  $collapsePelicula.click(() => {
    const reproductor = new Reproductor(video2);
    reproductor.setInicio(0);
    reproductor.playMultimedia("pelicula");
  });

  $collapseSerie.click(() => {
    const reproductor = new Reproductor(video3);
    reproductor.setInicio(10);
    reproductor.playMultimedia("serie");
  });
});
