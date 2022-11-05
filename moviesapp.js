let currID = 0;
let moviesList = [];


$(".form").on("submit", function(e) {
    e.preventDefault();
    let title = $("#title").val();
    let rating = $("#rating").val();

    let movieData = { title, rating, currID };
    const HTMLtoAppend = createMovieDataHTML(movieData); 

    currID++
    moviesList.push(movieData);

    $(".favMovieInput").append(HTMLtoAppend);
    $(".form").trigger("reset");
  });

  $("tbody").on("click", ".deleteBtn", function(e) {
    let indexToRemoveAt = moviesList.findIndex(movie => movie.currID === +$(e.target).data("deleteId"))
    
    moviesList.splice(indexToRemoveAt, 1)

    $(e.target)
      .closest("tr")
      .remove();
    
  });

function createMovieDataHTML(data) {
    return `
      <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
          <button class="deleteBtn" data-delete-id=${data.currID}>
            X
          </button>
        </td>
      <tr>
    `;
  }