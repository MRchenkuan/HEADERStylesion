/**
 * Created by mac on 16/3/25.
 */
window.HeaderStylesion = function(slct){
    var ele = document.querySelector(slct);
    var text = ele.innerHTML;
    var lines = text.trim().split("\n");
    var table = document.createElement("table");
    table.style.fontFamily= 'Consolas, "Liberation Mono", Menlo, Courier, monospace';
    table.style.borderSpacing= '1px';
    lines.some(function(it){
        var _tr = document.createElement("tr");
        var _key = it.substr(0,it.indexOf(":")).trim();
        var _val = it.substr(it.indexOf(":")+1).trim();
        _tr.innerHTML = "<td style='text-align: right;font-weight: bolder'>"+_key+"</td><td style='text-align: center;font-weight: bolder'>:</td><td>"+_val+"</td>";
        table.appendChild(_tr);
    });
    ele.innerHTML = "";
    ele.appendChild(table);
};