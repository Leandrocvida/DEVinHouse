function sleep(valor) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(valor), 3000);
    })
}

sleep("Leandro").then((resolve) =>{console.log(resolve)})