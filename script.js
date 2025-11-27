var view = document.querySelector('.display-input');

function insert(ch){
    if(!view) return;
    if(ch === '='){ calculate(); return; }
    if(ch === '÷') ch = '/';
    if(ch === '×') ch = '*';

    if(ch === '±'){
        try{
            view.value = String(-eval(view.value || '0'));
        }catch(e){
            view.value = "Error";
        }
        return;
    }

    if(ch === '%'){
        try{
            view.value = String(eval(view.value) / 100);
        }catch(e){
            view.value = "Error";
        }
        return;
    }

    view.value += ch;
}

function calculate(){
    if(!view) return;
    try{
        view.value = eval(view.value);
    }catch(e){
        view.value = "Error";
    }
}

function clearView(){
    if(!view) return;
    view.value = "";
}