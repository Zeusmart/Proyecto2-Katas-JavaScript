/*Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle. */
const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];
// Añade tu código de bucle aquí
let cuentMoviesMenos2000=0
let cuentMoviesMas2000=0
for (i=0;i<movies.length;i++) {
      if(movies[i].releaseYear<2000){
        cuentMoviesMenos2000 = cuentMoviesMenos2000 + 1
    }else{
        cuentMoviesMas2000 = cuentMoviesMas2000 + 1
    }
  }
 console.log("Número de peliculas antes del 2000: ",cuentMoviesMenos2000)
 console.log("Número de peliculas delpues del 2000: ",cuentMoviesMas2000)