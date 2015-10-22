// ================================================================================
function _log(toLog){ console.log(toLog); }
function _dir(method){ console.log(console.dir(method)); }
function _byId(id){ return document.getElementById(id); }
function _byName(name){ return document.getElementsByName(name); }
function _byClass(className){ return document.getElementsByClassName(className); }
function _byTag(tagName){ return document.getElementsByTagName(tagName); }
function _newElem(type){ return document.createElement(type); }
function _GRIT(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min;  }
// ================================================================================
function getRandomIdentification(L){
    var ID = '';
    var L = L ? L : 12;
    var data = new Array('a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D','F', 'F', 'O', 'B', 'e', '9', '0', '7', '6', '3', '2', '5', '8', '1', '4' );
    for(var i=0; i<L;i++){
        ID += data[_GRIT(0, 24)];
    }
    return ID+'_';
}
// ================================================================================
