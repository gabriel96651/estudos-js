let num = [0, 3, 5 ,6]
/*
for (let pos = 0 ; pos < num.length ; pos++) {
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}*/

for (let pos in num) {
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
