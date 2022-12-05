function chose_Coin(){
    var right_main = document.getElementById('right_main_id');
    var right_main_select = document.getElementById('right_main_select_id');
    right_main_select.style.display = 'block'
    right_main.style.display='none';
}

function chose_Coin_Off(){
    var right_main_select = document.getElementById('right_main_select_id');
    var right_main = document.getElementById('right_main_id');
    right_main_select.style.display = 'none'
    right_main.style.display='block';
}

var input_number_top = document.getElementById('input_top').value;
var input_number_bottom = document.getElementById('input_bottom').value;

if(input_number_top == 12){
    alert('okela')
}