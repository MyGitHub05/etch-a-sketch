const container = document.getElementById('container');
const canvaSizeBtn = document.querySelector(".canva_size");
const randomColorBtn = document.querySelector(".random_color");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");

canvaSizeBtn.addEventListener('click', generateCanvaSize);




// generate canva size 
function generateCanvaSize(){
    let size = prompt("Enter canva size 1-100");

    if(size > 100 || size < 1){
        alert('Enter Number between 1-100');
    }else{
        for(let i = 0; i<size; i++){
            let row = document.createElement('div');
            row.className = "row";
            for(let j = 0; j<size; j++){
                let col = document.createElement('div');
                col.className = "box";
                row.appendChild(col);
                changeColor(col);
            }
            container.appendChild(row);
           
        }
    }
}


//change the color when hover
function changeColor(col){
    let colorChange = false;
    let erase = false;

    clearBtn.addEventListener('click', ()=>{
        let boxes= document.querySelectorAll('.box');
        boxes.forEach(box  =>{
            box.style.backgroundColor = '';
        });
    });

    eraserBtn.addEventListener('click',() =>{
       return erase = erase ? false : true;
    });

    randomColorBtn.addEventListener('click', () =>{
        return colorChange = colorChange ? false : true;
    });
    col.addEventListener('mouseover', () =>{
        if(erase){
            col.style.backgroundColor = '';
        }else{
            col.style.backgroundColor = (colorChange)?randomRGBcolors() : 'gray';
        }
       
    });
}


//random RGB colors
function randomRGBcolors(){
    let r = generateRandomNumber();
    let g = generateRandomNumber();
    let b = generateRandomNumber();
    return `rgb(${r},${g},${b})`;
}


//generate random number 0-255
function generateRandomNumber(){
    return Math.floor(Math.random() * 255);
}
