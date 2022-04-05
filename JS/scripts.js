$(document).ready(function() {
  $(#formOne).submit(function(event));
    event.preventDefault();
    const nameInput = $('input#name').val();
    const foodInput = $('input#food').val();
    const occupationInput = $('input#occupation').val();
    const pizzaToppingInput = $("#pizza-topping").val();
    const favseasonInput = $("#fav-season").val();
    const dogOwnerInput = $("input:radio[name=dog-owner]:checked").val();
    const dob = $("#born").val();
    const favoriteColor = $("#color").val();

});