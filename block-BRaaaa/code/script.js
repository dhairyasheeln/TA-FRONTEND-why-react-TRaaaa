let root=document.querySelector('.root');
let input=document.querySelector('.input');
let movieList=[];

function handleInput(event){

    if(event.keyCode===13){
        movieList.push({
            name:event.target.value,
            status:false
        });
        createUI(movieList);
    }
}

function handleToggle(event){
    var id=event.target.dataset.id;
    movieList[id].status=!movieList[id].status;
    createUI(movieList);
}

function createUI(movieList){
    root.innerHTML="";
    movieList.forEach((movie,index) => {
        let li=document.createElement('li');
        li.classList.add('movie-outer');
        let p=document.createElement('p');
        p.innerText=movie.name;
        let button=document.createElement('button');
        if(movie.status===false){
            button.innerText='To Watch';
        }
        else{
            button.innerText='Watched';
        }
        button.setAttribute('data-id',index);
        button.addEventListener('click',handleToggle);
        console.log(button);
        li.append(p,button);
        root.append(li);
        console.log(movieList);
    });
}

input.addEventListener('keydown',handleInput);

console.log(root,input);

