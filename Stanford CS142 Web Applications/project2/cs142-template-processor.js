function Cs142TemplateProcessor(template){
    this.s = template;
}
Cs142TemplateProcessor.prototype.fillIn = function(dictionary){
    let ret = this.s;
    for(let key in dictionary){
        ret = ret.replace(new RegExp("{{" + key + "}}", 'g'), dictionary[key]);
    }
    return ret;
}