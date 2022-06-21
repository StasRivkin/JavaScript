const accessKey = '?access_key=c6b106dc52ff88c18e0d9611a1b5c347';
let rates;
let value;

//использовал онклик для кнопки старт что бы не исчерпать возможные попытки обращения к серверу, при удвлении 6 и 25 строки будет работать при загрузке страницы.
start.onclick = e => {
    fetch('http://data.fixer.io/api/latest' + accessKey)
        .then(responce => {
            rates = responce.json();
            return rates;
        })
        .then(responce => {
            responce = responce.rates;
            const { ...obj } = responce;
            const curRates = Object.keys(responce).toString();
            const curValues = Object.values(responce).toString();
            rates = curRates.split(',');
            value = curValues.split(',');
            return rates;
        })
        .then( () => {
            addRates();
        })
        .catch(e => console.log(e))
}

convert.onclick = e => {
    const fromInd = rates.indexOf(from.value);
    const toInd = rates.indexOf(to.value);
    let res = (value[toInd] / value[fromInd]) * sum.value;
    if(result.hasChildNodes()){
        result.removeChild(result.childNodes[0]); 
        result.append(`Exchange rate: ${sum.value} ${from.value} is ${res} ${to.value}`);
    }
    else{
        result.append(`Exchange rate: ${sum.value} ${from.value} is ${res} ${to.value}`);  
    }
}

function addRates() {
    rates.forEach(e => {
        const element = document.createElement('option');
        element.append(e);
        from.append(element);
    });
    rates.forEach(e => {
        const element = document.createElement('option');
        element.append(e);
        to.append(element);
    });
}

