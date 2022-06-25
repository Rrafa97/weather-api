/**
 * Streamout  Template String
 * @param {*} template 
 * @param {*} options 
 */
export function compile(template, options) {
    let [evalExpr, expr] = [/<%=(.+?)%>/g, /<%([\s\S]+?)%>/g]
    template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`').replace(expr, '`); \n $1 \n  echo(`');   
}
