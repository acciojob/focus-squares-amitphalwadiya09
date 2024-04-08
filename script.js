function changecolor(activeSquare) {
    var squares = document.querySelectorAll('.square');
    for (var i = 0; i < squares.length; i++) {
        if (i + 1 !== activeSquare) {
            squares[i].style.backgroundColor = 'rgb(230, 230, 250)'; // Coffee
        } else {
            squares[i].style.backgroundColor = 'rgb(111, 78, 55)'; // Lavender
        }
    }
}