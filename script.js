const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjkwYzFiMTI2MjQ5MDlmNDZmMTViOTk4YWI3YTkzZSIsInN1YiI6IjY0NzRkYmRmOWFlNjEzMDE0NjY4ZTQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sJRTdJsbpyfqf1f9AMC380AHPBBvaV1yQBMsMw30l40",
  },
};

async function getData() {
  const request = await fetch(url, options);
  const data = await request.json();
  console.log(data);
  return data.results;
}

// des.innerHTML = json.results[0].overview;

async function showMovie() {
  let data = await getData();
  if (data) {
    let title = document.querySelectorAll(".card-title");
    let des = document.querySelectorAll(".card-text");
    let img = document.querySelectorAll(".poster");
    let adult = document.querySelectorAll("#adult");
    let rating = document.querySelectorAll("#rating");
    let year = document.querySelectorAll("#year");

    title.forEach((element, e) => {
      title[e].innerHTML = data[e].title;
      des[e].innerHTML = data[e].overview;
      adult[e].innerHTML = data[e].adult;
      rating[e].innerHTML = Math.floor(data[e].vote_average);
      year[e].innerHTML = data[e].release_date;
      img[e].src = "https://image.tmdb.org/t/p/original" + data[e].poster_path;
    });

    // title[0].innerHTML = data[0].title;
    // des[0].innerHTML = data[0].overview;
    // adult[0].innerHTML = data[0].adult;
    // rating[0].innerHTML = Math.floor(data[0].vote_average);
    // year[0].innerHTML = data[0].release_date;
    // img[0].src = "https://image.tmdb.org/t/p/original" + data[0].poster_path;
  }
  //   console.log(getMovies());
}
// getData();
showMovie();
