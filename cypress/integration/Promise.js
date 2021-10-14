
// let cypressA = new Promise((resolve, reject) => {

//     let r = 10

//     if (r == 10) {

//         resolve('Promise is fulfilled')
//     }
//     else {
//         reject('Promise is not fulfilled')
//     }
// })

// cypressA.then((massage) => {

//     console.log(massage)
// })
// .catch((massage) => {
//     console.log(massage)
// })



function add(x,y) {
    console.log(`i have added ${x+y}`)
}
add(12,13)

let cypressB = new Promise((resolve,reject) => {

    let info ={
        fristName : 'Kiran',
        Age : 26
    }

    let noinfo ={
        errorr : 123,
        massage : "Check the Connection"
    }

    if (info.hasOwnProperty('fristName')){
        resolve(info)
    }
    else{
        reject(noinfo)
    }
})

cypressB.then((info) => {

    if (info.hasOwnProperty('fristName') && info.hasOwnProperty('Age')){
        add(12,13)
    }
})
.catch((noinfo) => {
    console.log(`The error code is ${noinfo.errorr} and massage is ${noinfo.massage}`)
})
