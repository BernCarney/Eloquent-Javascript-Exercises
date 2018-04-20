/**
 * Write a loop that makes seven calls to console.log to output the following triangle:

    #
    ##
    ###
    ####
    #####
    ######
    #######
 */

let pyramid = '';
for (let i = 1; i <= 7; i++) {
    pyramid += '#';
    console.log(pyramid);
}
