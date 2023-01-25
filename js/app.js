
const dataCon = document.querySelector(".data-con");
const boxes = document.querySelectorAll(".box");

//main colors
const colors = ['#1a8ddd', '#35ddb3', '#dddc61', '#dd6844', '#8f71dd'];

//propress bar data
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
            progress.style.width = widths[i] + '%';
            progress.style.backgroundColor = backgroundColors[i];
            progressCon.appendChild(progress);
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