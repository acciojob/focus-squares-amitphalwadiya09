function changecolor(activeSquare) {
    var squares = document.querySelectorAll('.square');
    for (var i = 0; i < squares.length; i++) {
        if (i + 1 !== activeSquare) {
            squares[i].style.backgroundColor = '#6F4E37'; // Coffee
        } else {
            squares[i].style.backgroundColor = '#E6E6FA'; // Lavender
        }
    }
}