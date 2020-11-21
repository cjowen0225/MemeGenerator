let memeCreate = document.getElementById('MemeForm');
let memeField = document.getElementById('Memes');

memeCreate.addEventListener('submit', function(e){
    e.preventDefault();
    let newDiv = document.createElement("div");
    let tText = document.createElement("div");
    let bText = document.createElement("div");
    let pic = document.getElementById('URL').value;
    newDiv.style.backgroundImage = 'url(' + pic + ')';
    tText.innerText = document.getElementById('TopText').value;
    bText.innerText = document.getElementById('BottomText').value;
    tText.classList.add("top");
    bText.classList.add("bottom");
    newDiv.classList.add("newDiv");
    newDiv.appendChild(tText);
    newDiv.appendChild(bText);
    memeField.appendChild(newDiv);
    memeCreate.reset();
});

memeField.addEventListener('click',function(e){
    let targ = e.target.className;
    if(targ === "newDiv"){
        e.target.remove();
    }
})