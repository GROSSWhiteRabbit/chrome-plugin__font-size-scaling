
const panel = document.createElement("div"),
    btnsBlock = document.createElement("div"),
    btnScaleS = document.createElement("input"),
    btnScaleM = document.createElement("input"),
    btnScaleL = document.createElement("input"),
    btnScaleXL = document.createElement("input");

document.body.append(panel );
panel.append(btnsBlock);
btnsBlock.append(btnScaleS, btnScaleM, btnScaleL, btnScaleXL );


btnScaleM.setAttribute('type', 'button');
btnScaleL.setAttribute('type', 'button');
btnScaleS.setAttribute('type', 'button');
btnScaleXL.setAttribute('type', 'button');

panel.style.cssText = ` position: fixed;
                        right: 0px;
                        top: 20px;
                        float: right;
                        background: #fff;
                        padding: 10px 30px;
                        box-shadow: 0px 4px 10px rgba(0,0,0, .5);
                        z-index: 400;
                        min-height: 35px;
                        transition: all .3s;
                        transform: translateX(250px);`;

btnScaleS.style.cssText = btnScaleM.style.cssText = btnScaleL.style.cssText = btnScaleXL.style.cssText = `   
                                                             
                                                        height: 35px;
                                                        width: 45px;
                                                        margin-right: 10px;
                                                        color: #fff;
                                                        background: #1b1b1b;
                                                        outline: none;
                                                        padding: 0px;
                                                        padding: '';
                                                        `;

// panel.onmouseover = () => {btnScaleS.style.transform = btnScaleXL.style.transform = btnScaleM.style.transform = btnScaleL.style.transform =  "translate(0px, 0px);";};
// panel.onmouseout = () => {btnScaleS.style.transform = btnScaleXL.style.transform = btnScaleM.style.transform = btnScaleL.style.transform =  "translate(120px, 120px);";};
panel.onmouseout = () => {panel.style.transform =  "translateX(250px)";};
panel.onmouseover = () => {panel.style.transform =  "translateX(0px)";};
btnsBlock.addEventListener('mouseover', (e)=>{
    if(e.target.getAttribute('type') =='button'){
        e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, .6)';
    }
});
btnsBlock.addEventListener('mouseout', (e)=>{
    if(e.target.getAttribute('type') =='button'){
        e.target.style.boxShadow = '';
    }
});

btnScaleS.value = '1x';
btnScaleM.value = '1.2x';
btnScaleL.value = '1.5x';
btnScaleXL.value = '2x';

btnScaleS.onclick = ()=>{ 
    recursion(document.body, btnScaleS);
 
};

btnScaleM.onclick = ()=>{ 
    recursion(document.body, btnScaleM);
 
};
btnScaleL.onclick = ()=>{ 
    recursion(document.body, btnScaleL);
 
};
btnScaleXL.onclick = ()=>{ 
    recursion(document.body, btnScaleXL);
 
};
async function recursion(body,elem ) {
    let nods = [];
    
    function recursion2(body,elem ){
        body.childNodes.forEach((node)=> {
        
            if(node.nodeName == '#text' && node.textContent.match(/[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]+/u)){
                // node.parentNode.
                if(!node.parentNode.getAttribute('data-fz')){
                    const value = +window.getComputedStyle(node.parentNode).fontSize.replace('px', '');
                console.log(node);
                node.parentNode.setAttribute('data-fz', value);
                
                } 

                nods.push(node.parentNode);
                
                
            } else {
                recursion2(node, elem);
            }
        });
    }
     recursion2(body,elem );
        nods.forEach((node)=>{
            node.style.fontSize = +node.getAttribute('data-fz') * +elem.value.replace('x','') +'px';
        });

    
    
    
}

