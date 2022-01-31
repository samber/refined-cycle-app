
const columnClass = '.fQwobK' // '.Groupstyles__Container-sc-dyn4aa-6';
const attributeClass = '.bOTcoW' // '.Tagstyles__Name-sc-17bp03z-1';
const headerClass = '.iatOfA' //'.Groupstyles__Header-sc-dyn4aa-1';

setInterval(() => {
    document.querySelectorAll(columnClass).forEach((elem) => {
        const sum = Array.from(elem.querySelectorAll(attributeClass))
            .filter((attr) => {
                return !isNaN(parseFloat(attr.innerHTML)) && parseFloat(attr.innerHTML) != 0;
            })
            .map((attr) => {
                return attr.innerHTML
            })
            .map((attr) => {
                return parseFloat(attr);
            })
            .reduce((previousValue, attr) => {
                return previousValue + attr;
            }, 0);

        if (elem.querySelector('.head-sum') == null) {
            const newDiv = document.createElement("div");
            newDiv.className = 'head-sum';
            newDiv.innerHTML = '0';
            elem.querySelector(headerClass).innerHTML += newDiv.outerHTML
        }

        elem.querySelector('.head-sum').innerHTML = sum;
    })
}, 1000);
