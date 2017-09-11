(function() {
    "use strict";
    var state = document.getElementById("s-state");
    
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("cart-vb").addEventListener("submit", estimateTotal);
        
        var btnEstimate = document.getElementById("btn-estimate");
        
        btnEstimate.disabled = true;
        
        state.addEventListener("change", function(){
            if (state.value === "") {
                btnEstimate.disabled = true; 
            } else {
                btnEstimate.disabled = false; 
            }
        });
    });
        
    function estimateTotal(e) {
        e.preventDefault();
        
        
        if (state.value === "") {
            alert("Estado não selecionado")
            state.focus();
        }
        
        var itemMerlotSafra = parseInt(document.getElementById('merlot-safra').value, 10) || 0,
            itemCabernetFranc = parseInt(document.getElementById('cabernet-franc').value, 10) || 0,
            itemVtalCabernetSuvBtl = parseInt(document.getElementById('vtal-carbernet-suv-btl').value, 10) || 0,
            itemVtalCabernetSuvBox = parseInt(document.getElementById('vtal-carbernet-suv-box').value, 10) || 0,
            itemBrut = parseInt(document.getElementById('brut').value, 10) || 0,
            itemMoscatel = parseInt(document.getElementById('moscatel').value, 10) || 0,
            itemTableRed = parseInt(document.getElementById('table-red').value, 10) || 0,
            itemCabernetGran = parseInt(document.getElementById('cs-gran').value, 10) || 0,
            shippingState = state.value;
            
        var totalQuantity = itemMerlotSafra + itemCabernetFranc + itemVtalCabernetSuvBtl + itemVtalCabernetSuvBox + itemBrut + itemMoscatel + itemTableRed + itemCabernetGran,
            shippingCost,
            estimate,
            totalItemPrice = (162 * itemMerlotSafra) + (174 * itemCabernetFranc) + (126 * itemVtalCabernetSuvBtl) + (204 * itemVtalCabernetSuvBox) + (165 * itemBrut) + (159 * itemMoscatel) + (54 * itemTableRed) + (300 * itemCabernetGran);
        
        switch(shippingState) {
            case 'AL' :
                shippingCost = 105;
                break;
            case 'BA' :
                shippingCost = 97;
                break;
            case 'CE' :
                shippingCost = 103;
                break;
            case 'DF' :
                shippingCost = 100;
                break;
            case 'ES' :
                shippingCost = 85;
                break;
            case 'MT' :
                shippingCost = 85;
                break;
            case 'MS' :
                shippingCost = 80;
                break;
            case 'MG' :
                shippingCost = 85;
                break;
            case 'PB' :
                shippingCost = 105;
                break;
            case 'PR' :
                shippingCost = 50;
                break;
            case 'PB' :
                shippingCost = 110;
                break;
            case 'RJ' :
                shippingCost = 95;
                break;
            case 'RN' :
                shippingCost = 110;
                break;
            case 'RS' :
                shippingCost = 45;
                break;
            case 'SC' :
                shippingCost = 50;
                break;
            case 'SP' :
                shippingCost = 70;
                break;
            default :
                shippingCost = 0;
                break;
        }
        
        if (totalQuantity >= 4) {
            shippingCost = 0;
        } 
                                    
        estimate = 'R$' + ' ' + (totalItemPrice + shippingCost).toFixed(2);
        
        document.getElementById('txt-estimate').value = estimate;
        
        var results = document.getElementById('results');
        
        results.innerHTML = 'Total de caixas: ' + totalQuantity + '<br>';
        results.innerHTML += 'Valor frete: R$' + ' ' + shippingCost.toFixed(2) + '<br>';
        
    /*    console.log(itemMerlotSafra, itemCabernetFranc, itemVtalCabernetSuvBtl, itemVtalCabernetSuvBox, itemBrut, itemMoscatel, itemTableRed, itemCabernetGran, shippingState); */
        
    }

})();  