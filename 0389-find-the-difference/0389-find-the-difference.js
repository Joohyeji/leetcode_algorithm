/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let answer
    const sortS = [...s].sort()
    const sortT = [...t].sort()

    for(i=0; i< t.length; i++) {
        if (sortS[i] !== sortT[i]){
            answer = sortT[i]
        } 
    }

    return answer ? answer : sortT[t.length]

};