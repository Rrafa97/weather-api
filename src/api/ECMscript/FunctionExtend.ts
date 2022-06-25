
/**
 * 
 */
class FunctionExtend {
    constructor() {

    }

    /**
     * 
     * @param valus reset params
     */
    public resetParams(...valus):Number {
        let sum:number = 0;
        for(var val of valus) {
            sum += val
        }
        return sum
    }
}
let functionExtend = new FunctionExtend();
functionExtend.resetParams([2,4,6])