import {isDirectiveResult, isTemplateResult} from "lit-html/directive-helpers.js";

/**
 * @TODO: improve DX
 * */
export function useSlot(containment){
    let result = containment;
    if(typeof result === 'function'){
        result = result();
    }
    if(result !== null && !isTemplateResult(result) && !isDirectiveResult(result)){
        throw new Error('Unxepected slot template');
    }
    return result;
}
