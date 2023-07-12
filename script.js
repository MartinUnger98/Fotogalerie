let images = ['img/img0.jpg', 'img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg', 'img/img6.jpg', 'img/img7.jpg', 'img/img8.jpg', 'img/img9.jpg'];

function render(){
    let content=document.getElementById('content');
    
    for(let i=0; i<images.length; i++){
        let img = images[i];
        content.innerHTML+=`
        <div onclick="openImg(${i})">
            <img src="${img}" alt="Bild ${i}" class="img" id="img${i}">
        </div>
        `;
    }
}

function openImg(x){
    document.getElementById('sec1').classList.remove('d-none');
    document.getElementById('content_big').classList.add('big_container');    
    document.getElementById('sec2').classList.add('d-none');
    document.getElementById('header').classList.add('d-none');

    fillBigPic(x);
}

function fillBigPic(x){
    let content=document.getElementById('content_big');
    content.innerHTML=`
    <img src="img/end.png" class="end" onclick="end()">
    <img src="img/next.png" class="next_left" onclick="backward(${x})">
    <img src="img/img${x}.jpg" class="img_big">
    <img src="img/next.png" class="next_right" onclick="forward(${x})">
    `
}

function end(){
    document.getElementById('sec1').classList.add('d-none');   
    document.getElementById('sec2').classList.remove('d-none');
    document.getElementById('header').classList.remove('d-none');
}

function forward(x){
    if(x===images.length-1){
        x=0;
    }
    else{
        x++;
    }
    fillBigPic(x);
}

function backward(x){
    if(x===0){
        x=images.length-1;
    }
    else{
        x--;
    }
    fillBigPic(x);
}
