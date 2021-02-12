import TWIN from './twinties_core'
import SINGLE from './aung-pao-find-last-missing-piece'

(() => {
    if(!process.argv[2]) return console.log('[USAGE]: ts-node run.ts [CODE-WITH-MISSING-1-OR-2-ALPHABET] [1/2 <refer to the missing number of code>]')
    const MISSING_CODE = process.argv[2], NUMBER_OF_ALPHA_THAT_MISSING =  parseInt(process.argv[3]) ? parseInt(process.argv[3]) : 1 // default 1
    if(NUMBER_OF_ALPHA_THAT_MISSING === 1){
        SINGLE(MISSING_CODE)
    }
    else if(NUMBER_OF_ALPHA_THAT_MISSING === 2){
        TWIN(MISSING_CODE)
    }else{
        return console.log('ONLY 2 CASES POSSIBLE <1/2>')
    }
})()