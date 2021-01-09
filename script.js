// Demo : Functions


var hesapA = {
    ad : 'Sena Turan',
    hesapNo : '12345678',
    bakiye : 800,
    ekHesap : 1000
}

var hesapB= {
    ad : 'Emel Turan',
    hesapNo : '12356479',
    bakiye : 10000,
    ekHesap : 2000
}


function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);

    if(hesap.bakiye >= miktar){
        hesap.bakiye = hesap.bakiye - miktar;
        console.log('paranızı alabilirsiniz');
    }else {
        var toplam = hesap.bakiye + hesap.ekHesap;

        if(toplam>=miktar){
            if(confirm('ek hesabınızı kullanmak istermisiniz')){
                console.log('paranızı alabilirsiniz');
                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekhesap = hesap.ekhesap - ekhesap;
            }else{
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır.`);
            }
        }else{
            console.log('üzgünüz bakiye yetersiz');
        }
    }

}



paraCek(hesapB,17000);
// paraCek(hesapA,1100);
// paraCek(hesapB,2000);
