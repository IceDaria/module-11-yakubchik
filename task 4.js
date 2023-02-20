//----task-4----//

function counter(a, b) {
    let idx = a;
    const i = setInterval(() => {
        console.log(idx);
        if (idx === b) clearInterval(i);
        ++idx
    }, 1000)
}
counter(5, 15);