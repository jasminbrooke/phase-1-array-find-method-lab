// code your solution here

// function superbowlWin(record){
//     let result = record.find(function(element){
//         return (element.result === "W")
//     })
//     if (result === "N/A" ||  result === "L")
//         return result
//     else
//         return result.year
// }

function superbowlWin(record){
    let result = record.find(function(element){
        return (element.result === "W")
    })
    if (result)
        return result.year
    else
        return result
}