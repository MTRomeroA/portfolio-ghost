/*buttonClasses.forEach(cl => {
    for (let card of postCards) {


    if(card.classList[2] === cl) {
        console.log('match')}

    else if (card.classList[2] !== cl) 
    { console.log('notmatch')} 
    };


})




if (card.classList[2] !== buttonClasses[2]) 
                
{ card.classList.add('hide');
};

if (card.classList[2] === buttonClasses[2]) {
    card.classList.add('active-card');
    console.log('true');
};

if (card.classList[2] === buttonClasses[2] && card.classList.contains('active-card') ) {
    card.classList.remove('active-card');
    card.classList.remove('hide');
}

else if (card.classList[2] === buttonClasses[2] && card.classList.contains('hide')) {
    card.classList.remove('hide');
    card.classList.add('active-card')}








switch (expr) {
    ///for each card: card is not in the  pressed button class, hide card.
    case (card.classList[2] !== buttonClasses[2]) : card.classList.add('hide');
    break;
    ///for each card: card IS in the  pressed button class, add active class.
    case (card.classList[2] === buttonClasses[2]) : card.classList.remove('hide');
    card.classList.add('active-class')
    break;
    ///for each card: card is not in the pressed button class and has previously been hidden
    ///by another click. "toggle" hidden class aka: reveal card.
    case (card.classList[2] !== buttonClasses[2] && card.classList.contains('hide')) : 
        card.classList.remove('hide');
        break;

    ///for each card: card IS in the pressed button class but has previously been revealed
    ///by another click.  Hide the card and remove active class
    case (card.classList[2] === buttonClasses[2] && card.classList.contains('active-class')):
        card.classList.add('hide');
        card.classList.remove('active-class')
        break;
    
}




let tagButtons= document.querySelectorAll('.tag-trigger');
let tagButtonsArray = Array.from(tagButtons);
const postCards = Array.from(document.querySelectorAll('.post-card'));
let mostrarTodo = document.querySelector('.tag-todo');
let pressedButtons = document.getElementsByClassName('pressed');
let targetPressed = false;

window.onload = function() {
    selectAll();
};

function selectAll(){
    mostrarTodo.classList.toggle('pressed');
    console.log('loaded');
}  

mostrarTodo.addEventListener('click', event => {
    
    postCards.forEach(post => post.classList.remove('hide'))
    console.log(pressedButtons);
})


document.querySelectorAll('.tag-trigger').forEach(button => {
            button.addEventListener('click', event =>{ 
            let buttonClasses = event.target.classList;

            for (const card of postCards) { 
                if (card.classList[2] !== buttonClasses[2]) 
                { card.classList.add('hide') }

                if (card.classList[2] === buttonClasses[2] && card.classList.contains('hide')) {
                    card.classList.remove('hide');
                }

             }; 

        event.target.classList.add('pressed');
        targetPressed=true;         
    })
})

if (targetPressed==true) {

document.querySelectorAll('.tag-trigger').forEach(button => {
            button.addEventListener('click', event =>{ 

            if (event.target.classList.contains('pressed')) {
               
                console.log(t)
            }
 
           
    })
})
}





let todoButton = document.querySelector('.tag-todo');
let tagButtons = document.querySelectorAll('.tag-trigger');  
const postCards = Array.from(document.querySelectorAll('.post-card'));
let allVisible = true;
let targetTagPressed = false;

window.onload = function(){
    showAll();
}

todoButton.addEventListener('click', showAll);

for(let i=0; i<tagButtons.lenght, i++) {
    tagButtons[i].addEventLister('click', tagButtonPress)
}

function showAll() {
    for (const card of postCards) {
        card.classList.remove('hide');
        card.classList.add('visible')
    }
    todoButtonActivate()
}

function todoButtonActivate () {
     todoButton.classList.add('pressed');
    for (let i = 0; i < tagButtons.length; i++) {
        tagButtons[i].classList.remove('pressed');
    }
    allVisible = true;
}

function showMatching(event) {  
    for (const card of postCards) {
        if(card.classlist.contains(event.target.classlist[2])) {
            card.classList.add('visible');
            card.classList.remove('hide')
        }

        else {
            card.classList.add('hide');
            card.classList.remove('visible')
            allVisible = false;
        }

    }
}

function tagButtonPress(event) {

    
    if (event.target.classList.contains('pressed')) {
        event.target.classList.toggle('pressed');
        console.log(event.target.classList);
        todoButtonActivate();    
    }

    if (allVisible = true) {
        event.target.classList.toggle('pressed');
        todoButton.classList.remove('pressed');
        showMatching(event);
    }

    for (i=0; i<tagButtons.length; i++){
        if (tagButtons[i] !== event.target) {
            tagButtons[i].classList.remove('pressed');
        }
    }
}*/