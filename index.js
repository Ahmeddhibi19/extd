$(document).ready(function(){
    $('#ex1').hide();
    $('#ex2').hide();
    $('#btn1').click(function(){
        if($('#ex1').is(':visible'))
            {$('#ex1').toggle();
            alert("ex1 est visible");
        }else
          {alert("ex1 est cache");
        $('#ex1').toggle();
      }
    });
    $('#btn2').click(function(){
        $('#ex2').toggle();
    });
    
    $('#btnex22').click(function(){
        alert($('#textarea2').val());
    });
    $('#btn3').click(function () {
        $('#img1').fadeOut('slow', function () {
            var newImageUrl = "https://letecode.com/storage/articles/September2021/fKFlgB6K1b9IwjcgwtGl.png"; // Replace with the actual URL of the new image
            $('#img1').attr('src', newImageUrl).fadeIn('slow');
        });
    });
    $('#btn4').click(function(){
        $('#ex4').css({
            'text-shadow':'2px 2px 2px rgba(20,30,285,0.4)',
            'color':'red',
            'transform':'rotateZ(45deg) translateX(400px)'

        })
    }) 
    $('#img2').hover(function() {
        $(this).css('opacity', '0.5');
    });
    $('#btn7').click(function(){        
        var selectedValue = $('input[name="studyLevel"]:checked').val();        
        if (selectedValue) {           
            alert("Selected study level: " + selectedValue);
        } else {            
            alert("Please select a study level.");
        }
    });
    $('#btn9').click(function () {
        var isChecked = $('#chk_ex').prop('checked');
        if (isChecked) {
            alert('La case à cocher est cochée.');
        } else {
            var audio = new Audio('C:/Users/user/Downloads/mixkit-censorship-beep-1082.wav'); 
            audio.play();
        }
    });
    $('#btn10').click(function() {
        $('td[id^="ex"]').hide();
    });
    
    
        
        
});
