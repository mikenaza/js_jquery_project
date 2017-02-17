//CREATES A GRID
function initGrid(num) {
	for(var i = 0; i < num; i++){
    for(var n = 0; n < num; n++) {
      $("#container").append("<td class='box'></td>");
		};
  };
};

//RANDOMIZES A RBG VALUE (CODE BY JOSH ATKINS)
function randomRGBComponent() {
	return Math.round(Math.random() * 255);
}

//RANDOMIZES AN RBG COLOR (CODE BY JOSH ATKINS)
function randomRGBColor() {
	return 'rgb(' + randomRGBComponent() + ', ' + randomRGBComponent() + ', ' + randomRGBComponent() + ')';
}

//CREATES A NEW GRID BASED ON USER INPUT
function newGrid() {
	//CLEAR EXISTING GRID
	$("#container").empty();
	//PROMPT USER FOR A NUMBER
  var num = prompt("How many squares should each side be?");

	initGrid(num);

  $(".box").css("height", "500"/num);
	$(".box").css("width", "500"/num);

  $(".box").mouseenter(function(){
    $(this).css("background-color", randomRGBColor);
  });
};

$(document).ready(function(){
  //MAKE DIV BOXES
  initGrid(16);
  //CHANGE DIV COLOR UPON MOUSE ENTER
  $(".box").mouseenter(function(){
    $(this).css("background-color", randomRGBColor);
  });
  //BUTTON CLICK EVENT
	$(".button").click(newGrid);
});
