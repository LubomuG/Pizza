$(".ingridiants").hide(0);   
$(".pizzaBasse img").hide(0);
let currentPrice = 120;






let priceList = {
    feta: 65,
    motzarela: 45,
    cheder: 55,
    bluggrupe: 70,
    parmezan: 85,
    chicken: 60,
    becon: 75,
    paparoni: 55,
    shunka: 50,
    barbequ: 40,
    chasnyk: 15,
    alfredo: 35,
    ananas: 30,
    grub: 25,
    kukurudza: 20,
    perets: 25,
    shpunat: 20,
    tomato: 15
};



$('#chease').click(function(){
    $('#cheaseContainer').slideToggle(500)
})
$('#meat').click(function(){
    $('#meatContainer').slideToggle(500)
})
$('#sose').click(function(){
    $('#soseContainer').slideToggle(500)
})
$('#vegatables').click(function(){
    $('#vegatablesContainer').slideToggle(500)
})





// сир
$('.fetagrupe').click(function(){
    $('#feta').show(400)
    $('.fetagrupe').hide(400)
    currentPrice+=priceList.feta;
    $('.total').text(`${currentPrice} грн`);
})
$('#feta').click(function(){
    $('#feta').hide(400)
    $('.fetagrupe').show(400)
    currentPrice-=priceList.feta;
    $('.total').text(`${currentPrice} грн`);
})



$('.matzagrupe').click(function(){
    $('#motzarela').show(400)
    $('.matzagrupe').hide(400)
    currentPrice+=priceList.motzarela;
    $('.total').text(`${currentPrice} грн`);
})
$('#motzarela').click(function(){
    $('#motzarela').hide(400)
    $('.matzagrupe').show(400)
    currentPrice-=priceList.motzarela;
    $('.total').text(`${currentPrice} грн`);
})



$('.chadergrupe').click(function(){
    $('#cheder').show(400)
    $('.chadergrupe').hide(400)
    currentPrice+=priceList.cheder;
    $('.total').text(`${currentPrice} грн`);
})
$('#cheder').click(function(){
    $('#cheder').hide(400)
    $('.chadergrupe').show(400)
    currentPrice-=priceList.cheder;
    $('.total').text(`${currentPrice} грн`);
})



$('.bluggrupe').click(function(){
    $('#bluggrupe').show(400)
    $('.bluggrupe').hide(400)
    currentPrice+=priceList.bluggrupe;
    $('.total').text(`${currentPrice} грн`);
})
$('#bluggrupe').click(function(){
    $('#bluggrupe').hide(400)
    $('.bluggrupe').show(400)
    currentPrice-=priceList.bluggrupe;
    $('.total').text(`${currentPrice} грн`);
})



$('.parmezangrupe').click(function(){
    $('#parmezan').show(400)
    $('.parmezangrupe').hide(400)
    currentPrice+=priceList.parmezan;
    $('.total').text(`${currentPrice} грн`);
})
$('#parmezan').click(function(){
    $('#parmezan').hide(400)
    $('.parmezangrupe').show(400)
    currentPrice-=priceList.parmezan;
    $('.total').text(`${currentPrice} грн`);
})
// сир кінець

// м'ясо
$('.chicengroup').click(function(){
    $('#chicken').show(400)
    $('.chicengroup').hide(400)
    currentPrice+=priceList.chicken;
    $('.total').text(`${currentPrice} грн`);
})
$('#chicken').click(function(){
    $('#chicken').hide(400)
    $('.chicengroup').show(400)
    currentPrice-=priceList.chicken;
    $('.total').text(`${currentPrice} грн`);
})



$('.becongroup').click(function(){
    $('#becon').show(400)
    $('.becongroup').hide(400)
    currentPrice+=priceList.becon;
    $('.total').text(`${currentPrice} грн`);
})
$('#becon').click(function(){
    $('#becon').hide(400)
    $('.becongroup').show(400)
    currentPrice-=priceList.becon;
    $('.total').text(`${currentPrice} грн`);
})



$('.paparonigrupe').click(function(){
    $('#paparoni').show(400)
    $('.paparonigrupe').hide(400)
    currentPrice+=priceList.paparoni;
    $('.total').text(`${currentPrice} грн`);
})
$('#paparoni').click(function(){
    $('#paparoni').hide(400)
    $('.paparonigrupe').show(400)
    currentPrice-=priceList.paparoni;
    $('.total').text(`${currentPrice} грн`);
})



$('.shunkagrupe').click(function(){
    $('#shunka').show(400)
    $('.shunkagrupe').hide(400)
    currentPrice+=priceList.shunka;
    $('.total').text(`${currentPrice} грн`);
})
$('#shunka').click(function(){
    $('#shunka').hide(400)
    $('.shunkagrupe').show(400)
    currentPrice-=priceList.shunka;
    $('.total').text(`${currentPrice} грн`);
})
// м'ясо кінець

// соуси
$('.barbequgroup').click(function(){
    $('#barbequ').show(400)
    $('.barbequgroup').hide(400)
    currentPrice+=priceList.barbequ;
    $('.total').text(`${currentPrice} грн`);
})
$('#barbequ').click(function(){
    $('#barbequ').hide(400)
    $('.barbequgroup').show(400)
    currentPrice-=priceList.barbequ;
    $('.total').text(`${currentPrice} грн`);
})



$('.chasnykgroup').click(function(){
    $('#chasnyk').show(400)
    $('.chasnykgroup').hide(400)
    currentPrice+=priceList.chasnyk;
    $('.total').text(`${currentPrice} грн`);
})
$('#chasnyk').click(function(){
    $('#chasnyk').hide(400)
    $('.chasnykgroup').show(400)
    currentPrice-=priceList.chasnyk;
    $('.total').text(`${currentPrice} грн`);
})



$('.alfredogrupe').click(function(){
    $('#alfredo').show(400)
    $('.alfredogrupe').hide(400)
    currentPrice+=priceList.alfredo;
    $('.total').text(`${currentPrice} грн`);
})
$('#alfredo').click(function(){
    $('#alfredo').hide(400)
    $('.alfredogrupe').show(400)
    currentPrice-=priceList.alfredo;
    $('.total').text(`${currentPrice} грн`);
})
// соуси кінець

// овочі
$('.ananasgroup').click(function(){
    $('#ananas').show(400)
    $('.ananasgroup').hide(400)
    currentPrice+=priceList.ananas;
    $('.total').text(`${currentPrice} грн`);
})
$('#ananas').click(function(){
    $('#ananas').hide(400)
    $('.ananasgroup').show(400)
    currentPrice-=priceList.ananas;
    $('.total').text(`${currentPrice} грн`);
})



$('.grubgroup').click(function(){
    $('#grub').show(400)
    $('.grubgroup').hide(400)
    currentPrice+=priceList.grub;
    $('.total').text(`${currentPrice} грн`);
})
$('#grub').click(function(){
    $('#grub').hide(400)
    $('.grubgroup').show(400)
    currentPrice-=priceList.grub;
    $('.total').text(`${currentPrice} грн`);
})



$('.kukurudzagroup').click(function(){
    $('#kukurudza').show(400)
    $('.kukurudzagroup').hide(400)
    currentPrice+=priceList.kukurudza;
    $('.total').text(`${currentPrice} грн`);
})
$('#kukurudza').click(function(){
    $('#kukurudza').hide(400)
    $('.kukurudzagroup').show(400)
    currentPrice-=priceList.kukurudza;
    $('.total').text(`${currentPrice} грн`);
})



$('.peretsgroup').click(function(){
    $('#perets').show(400)
    $('.peretsgroup').hide(400)
    currentPrice+=priceList.perets;
    $('.total').text(`${currentPrice} грн`);
})
$('#perets').click(function(){
    $('#perets').hide(400)
    $('.peretsgroup').show(400)
    currentPrice-=priceList.perets;
    $('.total').text(`${currentPrice} грн`);
})



$('.shpunatgroup').click(function(){
    $('#shpunat').show(400)
    $('.shpunatgroup').hide(400)
    currentPrice+=priceList.shpunat;
    $('.total').text(`${currentPrice} грн`);
})
$('#shpunat').click(function(){
    $('#shpunat').hide(400)
    $('.shpunatgroup').show(400)
    currentPrice-=priceList.shpunat;
    $('.total').text(`${currentPrice} грн`);
})



$('.tomatogrupe').click(function(){
    $('#tomato').show(400)
    $('.tomatogrupe').hide(400)
    currentPrice+=priceList.tomato;
    $('.total').text(`${currentPrice} грн`);
})
$('#tomato').click(function(){
    $('#tomato').hide(400)
    $('.tomatogrupe').show(400)
    currentPrice-=priceList.tomato;
    $('.total').text(`${currentPrice} грн`);
})
// овочі кінець






function clearAllIngredients() {
 
    $('.pizzaBasse img').hide(400);
    
  
    $('.fetagrupe').show(400);
    $('.matzagrupe').show(400);
    $('.chadergrupe').show(400);
    $('.bluggrupe').show(400);
    $('.parmezangrupe').show(400);
    $('.chicengroup').show(400);
    $('.becongroup').show(400);
    $('.paparonigrupe').show(400);
    $('.shunkagrupe').show(400);
    $('.barbequgroup').show(400);
    $('.chasnykgroup').show(400);
    $('.alfredogrupe').show(400);
    $('.ananasgroup').show(400);
    $('.grubgroup').show(400);
    $('.kukurudzagroup').show(400);
    $('.peretsgroup').show(400);
    $('.shpunatgroup').show(400);
    $('.tomatogrupe').show(400);
    
    currentPrice = 120;
    $('.total').text(`${currentPrice} грн`);
    
    $('#confirmationModal').fadeOut(300);
}


function openConfirmationModal() {
    $('#confirmationModal').fadeIn(300).css('display', 'flex');
}


function closeConfirmationModal() {
    $('#confirmationModal').fadeOut(300);
}

$('#clearAllBtn').click(function() {
    openConfirmationModal();
});


$('#confirmYes').click(function() {
    clearAllIngredients();
});


$('#confirmNo').click(function() {
    closeConfirmationModal();
});


$('#confirmationModal').click(function(e) {
    if (e.target === this) {
        closeConfirmationModal();
    }
});


$(document).keydown(function(e) {
    if (e.key === 'Escape') {
        closeConfirmationModal();
    }
});


$('.categoryTitle').dblclick(function() {
    openConfirmationModal();
});