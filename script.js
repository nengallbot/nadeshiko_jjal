var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
canvas.width = $('img').width();
canvas.crossOrigin = "Anonymous";
canvas.height = $('img').height();
ctx.drawImage($('img').get(0), 0, 0);
ctx.font = "28pt YaBold";
ctx.textAlign = "center";
var text_start = 200;

//$(document).on('input','#line1',function(){
$("input#line1").keyup(function(e) {
    var line1_text = $(this).val();
    var line2_text = $("#line2").val();

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage($('img').get(0), 0, 0);
    
    ctx.fillStyle = "#5e5e5e";
    ctx.strokeStyle = "white";
    
    if(line2_text.length > 0) {
        ctx.fillText(line1_text,text_start,280);
        ctx.strokeText(line1_text, text_start, 280);

        ctx.fillText(line2_text,text_start,320);
        ctx.strokeText(line2_text, text_start, 320);
    }
    else {
        ctx.fillText(line1_text,text_start,300);
        ctx.strokeText(line1_text, text_start, 300);
    }

});

//$(document).on('input','#line2',function(){
$("input#line2").keyup(function(e) {
    var line1_text = $("#line1").val();
    var line2_text = $(this).val();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage($('img').get(0), 0, 0);
    
    ctx.fillStyle = "#5e5e5e";
    ctx.strokeStyle = "white";

    if(line1_text.length > 0) {
        ctx.fillText(line1_text,text_start,280);
        ctx.strokeText(line1_text, text_start, 280);

        ctx.fillText(line2_text,text_start,320);
        ctx.strokeText(line2_text, text_start, 320);
    }
    else {
        ctx.fillText(line2_text,text_start,300);
        ctx.strokeText(line2_text, text_start, 300);
    }

});


$('a.button').click(function(){
    //var data = canvas.toDataURL('image/png');//.replace("image/png", "image/octet-stream");
    //$(this).href = data;
});
