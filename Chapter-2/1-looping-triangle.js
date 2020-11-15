/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.
*/

function solution() {
    let current = ""
    for(let n = 0; n < 7; n++) {
        current += "#"
        console.log(current);
    }
}

solution()