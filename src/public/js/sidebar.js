const items = document.querySelectorAll('.sidebar__option')
const playric = document.querySelectorAll('.sidebar__option--playric')
const reuslt = [...items[0].children,...items[1].children]

function actionLi(resuslt){
    reuslt.forEach(element => {
    element.addEventListener('click',(e)=>{
        reuslt.forEach(element => {
            element.classList.remove('action')
        });
            element.classList.add('action')
    })
});
}

actionLi(reuslt);