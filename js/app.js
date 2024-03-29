//selectors
const dataCon = document.querySelector(".data-con");
const boxes = document.querySelectorAll(".box");
const bMenu = document.querySelector(".burger-menu");

//main colors
const colors = ['#1a8ddd', '#35ddb3', '#dddc61', '#dd6844', '#8f71dd', '#dddddd'];

//propress bar data and generate random withds
const data = [
    {
        title: 'Avg',
        widths: [...Array(5).fill().map(() => Math.floor(Math.random() * 11) + 10)],
        backgroundColors: [...colors]
    },
    {
        title: 'Cautious',
        widths: [...Array(5).fill().map(() => Math.floor(Math.random() * 11) + 10)],
        backgroundColors: [...colors]
    },
    {
        title: 'Complains',
        widths: [...Array(5).fill().map(() => Math.floor(Math.random() * 11) + 10)],
        backgroundColors: [...colors]
    },
    {
        title: 'Confident',
        widths: [...Array(5).fill().map(() => Math.floor(Math.random() * 11) + 10)],
        backgroundColors: [...colors]
    }
]   

//toggle burger menu
bMenu.addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('nav-active');
});

//function that craetes hmtl elements and appends them to the dom
const displayData = () => {
    data.forEach((item, index) => {
        //descructure data
        const { title, widths, backgroundColors } = item;
        //create a container for each data item
        const dataItem = document.createElement('div');
        dataItem.classList.add('data-item');
        //create a div inside the data item name it progress-con
        const progressCon = document.createElement('div');
        progressCon.classList.add('progress-con');

        //title container div
        const titleCon = document.createElement('div');
        titleCon.classList.add('title-con');
        //append title to title container
        titleCon.innerHTML = title;
        //append title container to data item
        dataItem.appendChild(titleCon);

        //append the progress-con to the data item
        dataItem.appendChild(progressCon);
        //5 divs inside the progress-con
        for (let i = 0; i < 5; i++) {
            const progress = document.createElement('div');
            progress.classList.add('progress');

            //set progress width to 0
            progress.style.width = 0;

            //change the width and animate after 200ms
            setTimeout(() => {
                progress.style.width = widths[i] + '%';
            }, 200)

            progress.style.backgroundColor = backgroundColors[i];
            progressCon.appendChild(progress);
            //adding a new div inside the progress div in the 3rd index
            if(index === 2) {
                //progress text
                const progressText = document.createElement('div');
                progressText.classList.add('progress-text');
                progressText.innerHTML = widths[i] + '%';
                progress.appendChild(progressText);
            }
        }

        //apend data-item to data-con
        dataCon.appendChild(dataItem);
    });

    //style the boxes bg colors
    boxes.forEach((box, index) => {
        box.style.backgroundColor = colors[index];
    });
}

displayData();