var item=1;

function prev()
{
    var items=document.querySelectorAll(".items");
    if(item==1){
        item=items.length;
    }else{
        item--;
    }
        showItem()
    }

    function next(){
        var items=document.querySelectorAll(".items");
        if(item==1){
            item=items.length;
        }else{
            item++;
        }
        showItem()

    }

    function showItem(){
        var items=document.querySelectorAll(".items");
        for(var i=0;i<items.length;i++){
            if(i+1==item)
            {
                items[i].computedStyleMap.display="block"
            }else{
                items[i].computedStyleMap.display="none"
            }
        }

    }

    showItem()

