function swapIndex(){
    var box_top = document.getElementById('box_top');
    var box_bottom = document.getElementById('box_bottom');

    // bien tam de swap index
    var tmp = box_top.innerHTML;
    box_top.innerHTML = box_bottom.innerHTML;
    box_bottom.innerHTML = tmp;

}