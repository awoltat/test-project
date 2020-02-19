let preloaderButton = document.getElementsByClassName('preloader-button')[0];
let preloader = document.getElementsByClassName('lds-spinner')[0];
let textOfPreloader = document.getElementsByClassName('text-holder')[0];
let tab = document.querySelectorAll('.tab');
let tabDescription = document.querySelectorAll('.desc');
let iconInfo = document.querySelector('.info-btn');
let popContent = document.querySelector('.popover__content');
let closeButton = document.querySelector('.btn');

let isShowText = true;

preloaderButton.addEventListener('click', () => {
    if (!isShowText) {
        textOfPreloader.style.visibility = 'hidden';
        isShowText = !isShowText;
    } else {
        preloader.style.display = 'inline-block';
        setTimeout(hidePreloader = () => {
            preloader.style.display = 'none';
            textOfPreloader.style.visibility = 'visible';
            isShowText = !isShowText;
        }, 2000);
    }

});

for (let i = 0; i < tab.length; i++) {
    if (tab[i].addEventListener('click', () => {
        clearOSSelections(tabDescription);
        for (let j = 0; j < tabDescription.length; j++) {
            if (i === j) {
                tabDescription[j].style.display = 'block';
            }
        }

    })) ;
}

function clearOSSelections(selections) {
    for (let i = 0; i < selections.length; i++) {
        selections[i].style.display = 'none';
    }
}

iconInfo.addEventListener('click', () => {
    popContent.style.display = 'flex';
    closeButton.addEventListener('click', () => {
        popContent.style.display = 'none';
    });
});



