var prevColor = null;

        function changeColor(activeSquare) {
            var squares = document.querySelectorAll('.square');
            for (var i = 0; i < squares.length; i++) {
                if (i + 1 !== activeSquare) {
                    prevColor = squares[i].style.backgroundColor;
                    squares[i].style.backgroundColor = 'rgb(111, 78, 55)'; // Coffee
                } else {
                    squares[i].style.backgroundColor = 'rgb(230, 230, 250)'; // Lavender
                }
            }
        }

        function resetColor() {
            var squares = document.querySelectorAll('.square');
            for (var i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = prevColor ? prevColor : 'rgb(230, 230, 250)'; // Revert to previous color or Lavender
            }
        }