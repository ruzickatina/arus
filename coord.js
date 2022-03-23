// Определение координаты элемента по горизонтали
function pageX(elem) {
    return elem.offsetParent ?
        elem.offsetLeft + pageX( elem.offsetParent ) :
        elem.offsetLeft;
}

// Определение координаты элемента по вертикали
function pageY(elem) {
    return elem.offsetParent ?
        elem.offsetTop + pageY( elem.offsetParent ) :
        elem.offsetTop;
}
