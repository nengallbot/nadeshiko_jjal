CanvasRenderingContext2D.prototype.fillVerticalText = function(text, x, y, verticalSpacing) {
    for (var i = 0; i < text.length; i++) {
        this.fillText(text[i], x, y + i * verticalSpacing);
    }
}

const modes = {
    "nadeshiko": {
        "img_src": "./rsc/nadeshiko.png",
        "font": "28pt YaBold",
        "textAlign": "center",
        "start_x": 200,
        "start_y": 280,
        "fillStyle": "#5e5e5e",
        "strokeStyle": "white",
        "line_margin": 20
    },
    "aoba": {
        "img_src": "./rsc/aoba.png",
        "font": "25pt YaBold",
        "textAlign": "center",
        "start_x": 80,
        "start_y": 490,
        "fillStyle": "#000000",
        "strokeStyle": "",
        "line_margin": 20

    }
};
let mode = "nadeshiko";
let text_start;

let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
canvas.crossOrigin = "Anonymous";


let bg_img = new Image();
bg_img.src = modes[mode]["img_src"];
bg_img.onload = function() {
    canvas.width = bg_img.width;
    canvas.height = bg_img.height;
    ctx.drawImage(bg_img, 0, 0);

    config = modes[mode];
    change_config(config);
    draw_text(config);
};

function change_config(config) {
    ctx.font = config["font"];
    ctx.textAlign = config["textAlign"];
    text_start = config["text_start"];
}   

$("input[name='pic']").change(function() {
    mode = $(this).val();
    config = modes[mode];
    bg_img.src = config["img_src"];
});

//ctx.measureText("text"); -> text width 구할 수 있음


function write(text, x, y) {
    if (mode == "nadeshiko") {
        ctx.fillText(text, x, y);
        ctx.strokeText(text, x, y);
    }
    else if (mode == "aoba") {
        ctx.fillVerticalText(text, y, x, 30);
    }
    else {

    }
}

function draw_text(config) {
    var text1 = $("#line1").val();
    var text2 = $("#line2").val();

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(bg_img, 0, 0);
    
    ctx.fillStyle = config["fillStyle"];
    ctx.strokeStyle = config["strokeStyle"];
    
    if(text2.length > 0) {
        write(text1, config["start_x"], config["start_y"]);

        write(text2, config["start_x"], config["start_y"] + (config["line_margin"] * 2));
    }
    else {
        write(text1, config["start_x"], config["start_y"] + config["line_margin"]);
    }

}

$("input.pic_text").keyup(function(e) {
    draw_text(config);
});

$('a.button').click(function(){
    //var data = canvas.toDataURL('image/png');//.replace("image/png", "image/octet-stream");
    //$(this).href = data;
});
