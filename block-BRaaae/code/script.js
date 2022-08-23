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

// function createElement(type,attribute={}, ...children){
//     // console.log('children:'+children);
//     let element=document.createElement(type);
//     // console.log('Attribute:'+attribute);
//     for(let key in attribute){
//         if(key.startsWith('data-')){
//             element.setAttribute(key,attribute[key])
//         }
//         else if(key.startsWith('on')){
//             let eventType=key.replace('on','').toLowerCase();
//             element.addEventListener(eventType,attribute[key]);
//         }
//         else{
//             element[key]=attribute[key];
//         }
//     }

//     children.forEach((child)=>{
//         if(typeof child=== 'object'){
//             // console.log('Object Child');
//             element.append(child);
//         }
//         if(typeof child=== 'string'){
//             let node=document.createTextNode(child);
//             // console.log('String child');
//             element.append(node);
//         }
//     });
    
//     return element;
    
// }

function createUI(movieList){
    // root.innerHTML="";
    let todoUI=movieList.map((movie,index) => {

        let li=React.createElement
        ('li',
        {},

        React.createElement('p',{},movie.name),
        React.createElement('button',{'data-id':index,onClick:handleToggle},movie.status?'Watched':'To Watch')
        
        );
        return li;
        // console.log('li:'+li);
        // root.append(li);
        });

        ReactDOM.render(todoUI,root);

        // let li=document.createElement('li');
        // li.classList.add('movie-outer');
        // let p=document.createElement('p');
        // p.innerText=movie.name;
        // let button=document.createElement('button');
        // if(movie.status===false){
        //     button.innerText='To Watch';
        // }
        // else{
        //     button.innerText='Watched';
        // }
        // button.setAttribute('data-id',index);
        // button.addEventListener('click',handleToggle);
        // console.log(button);
        // li.append(p,button);
        // console.log(movieList);
}

input.addEventListener('keydown',handleInput);

console.log(root,input);