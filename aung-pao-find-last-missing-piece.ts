import needle from 'needle';
const NOT_FOUND:string = 'VOUCHER_NOT_FOUND', POSSIBLE_ALPHABETS: Array<string> = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    '1','2','3','4','5','6','7','8','9','0',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

const LINK = {
    CAMPAIGN_PREFIX: 'https://gift.truemoney.com/campaign/?v=',
    GENERATE_TRIAL_VERIFY_LINK: (midfix:string) => `https://gift.truemoney.com/campaign/vouchers/${midfix}/verify`
};

/**
 * This process would take {POSSIBLE_ALPHABETS.length} (req)iteration
 */
const RUN = (TARGET_MISSING_CODE:string):void => {
    //if(!process.argv[2]) return console.log('[USAGE]: ts-node aung-pao-find-last-missing-piece.ts eCccjeab61o3Nngd1')
    //const TARGET_CODE:string = process.argv[2] // should be the one with missing last alphabet
    for(let alphabet of POSSIBLE_ALPHABETS){
        needle.get(LINK.GENERATE_TRIAL_VERIFY_LINK(TARGET_MISSING_CODE+alphabet), function(error, response) {
            if(response.body.status.code !== NOT_FOUND){
                return console.log(`actual_code: ${TARGET_MISSING_CODE+alphabet}\nfull_link: ${LINK.CAMPAIGN_PREFIX}${TARGET_MISSING_CODE+alphabet}`) // in ur console -> see magic ^_^
            }
        });
    }

}

export default RUN