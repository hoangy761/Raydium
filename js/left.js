function zoomInOut(){
    var zoom = document.getElementById('spenrea_icon-left');
    var names = document.getElementsByClassName('list_top_left_btn_title');
    var boder_bottom =document.getElementById('spenrea_boder-bottom');
    var show_icon = document.getElementById('show_icon');
    if(zoom.title == 'show'){

        for(var i =0; i< names.length; i++){
            names[i].style.display = 'none'; 
        }
        boder_bottom.style.display = 'none';
        show_icon.className='list_top_left_btn_icon fa-solid fa-right-to-bracket';
        zoom.title = 'showless';
    }else{
        for(var i =0; i< names.length; i++){
            names[i].style.display = 'block'; 
        }
        boder_bottom.style.display = 'block'; 
        show_icon.className='list_top_left_btn_icon fa-sharp fa-solid fa-left-long'
        zoom.title = 'show';
    }
}

var setting_icon = document.getElementById('setting_icon');
var lef_show = document.getElementById('left_id')
setting_icon.onclick = function(){
    
    if(lef_show.style.display == 'block'){
        lef_show.style.display = 'none';
    }else{
        lef_show.style.display = 'block';
    }
}