function TableTemplate(){}
TableTemplate.fillIn = function(table, dict, col){
    let p = document.getElementById(table);
    p.style.visibility = "visible";
    let trs = p.querySelectorAll("tr");
    let id = -1;
    if(col == undefined) id = -2;
    let tds = trs[0].querySelectorAll("td");
    for(let j = 0; j < tds.length; j++){
        tds[j].innerHTML = new Cs142TemplateProcessor(tds[j].innerHTML).fillIn(dict);
        if(tds[j].innerHTML == col) id = j;
    }
    for(let i = 1; i < trs.length; i++){
        tds = trs[i].querySelectorAll("td");
        for(let j = 0; j < tds.length; j++){
            if(id == j || id == -2) tds[j].innerHTML = new Cs142TemplateProcessor(tds[j].innerHTML).fillIn(dict);
        }
    }
}