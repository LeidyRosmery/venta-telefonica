var mapaDefault = '/static/categorias/contenidoEstatico/servicioalCliente/venta-telefonica/images/despacho/pic_mapa.png';
var dataLimaCallao = [
    {
        city: 'HUACHO',
        image: '/static/categorias/contenidoEstatico/servicioalCliente/venta-telefonica/images/despacho/pic_mapa_lima.png',
        stores: [
            {
                name: 'Huacho',
                address: 'Av. 9 de Octubre Mza 3 esq. con Av 28 de Julio'
            }
        ]
    },
    {
        city: 'CA\u00D1ETE',
        image: '/static/categorias/contenidoEstatico/servicioalCliente/venta-telefonica/images/despacho/pic_mapa_lima.png',
        stores: [
            {
                name: 'CA\u00D1ETE',
                address: 'Av. M. Benavides N\u00B0 S/N (cuadra 8)'
            }
        ]
    }
];

var dataProvince = [
    {
        city: 'ANCASH',
        image: '/static/categorias/contenidoEstatico/servicioalCliente/venta-telefonica/images/despacho/pic_mapa_ancash.png',
        stores: [
            {
                name: 'CHIMBOTE',
                address: 'Centro Comercial MegaPlaza Av. Panamericana Norte N\u00B0 4'
            }
        ]
    },
    {
        city: 'AREQUIPA',
        image: '/static/categorias/contenidoEstatico/servicioalCliente/venta-telefonica/images/despacho/pic_mapa_arequipa.png',
        stores: [
            {
                name: 'SODIMAC - AREQUIPA',
                address: 'Mall Aventura Plaza. Av. Porongoche N\u00B0 721'
            }
        ]
    },
    {
        city: 'CAJAMARCA',
        image: '/static/categorias/contenidoEstatico/servicioalCliente/venta-telefonica/images/despacho/pic_mapa_cajamarca.png',
        stores: [
            {
                name: 'CAJAMARCA',
                address: 'Fundo San Jos\u00E9 S/N Prolongaci\u00F3n Irene Silva Santolall'
            }
        ]
    },
    {
        city: 'ICA',
        image: '/static/categorias/contenidoEstatico/servicioalCliente/venta-telefonica/images/despacho/pic_mapa_ica.png',
        stores: [
            {
                name: 'ICA CONSTRUCTOR',
                address: 'Calle Nicol\u00E1s de Rivera El Viejo N\u00B0 1105 Urb. L'
            },
			{
                name: 'ICA MALL',
                address: 'Calle Bol\u00EDvar N\u00B0 942 Ica. (Esquina Calle Ayabaca y Bol'
            }
        ]
    },
    {
        city: 'LA LIBERTAD',
        image: '/static/categorias/contenidoEstatico/servicioalCliente/venta-telefonica/images/despacho/pic_mapa_lalibertad.png',
        stores: [
            {
                name: 'TRUJILLO MALL AVENTURA PLAZA ',
                address: 'Av. Am\u00E9rica Norte N\u00B0 1245 Ur'
            },
            {
                name: 'TRUJILLO MALL AVENTURA PLAZA ',
                address: 'Av. Mansiche s/n (Sec. Mansiche) L'
            }
        ]
    },
    {
        city: 'LAMBAYEQUE',
        image: '/static/categorias/contenidoEstatico/servicioalCliente/venta-telefonica/images/despacho/pic_mapa_lambayeque.png',
        stores: [
            {
                name: 'CHICLAYO',
                address: 'Calle V\u00EDctor Raul Haya De La Torre N\u00B0 150, Urb. Federi'
            }
        ]
    },
    {
        city: 'PIURA',
        image: '/static/categorias/contenidoEstatico/servicioalCliente/venta-telefonica/images/despacho/pic_mapa_piura.png',
        stores: [
            {
                name: 'PIURA OPEN PLAZA',
                address: 'Av. Andr\u00E9s Avelino C\u00E1ceres Urb. Miraflores II'
            },
			{
                name: 'SULLANA',
                address: 'Av. Jos\u00E9 De Lama s/n cruce con  Las Dalias - Urbanizaci\u00F3n'
            }	
        ]
    }
];

var configSlick = {
    fade: true,
    cssEase: 'linear',
    draggable: true,
    swipe: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    prevArrow: $('.btnPrev'),
    nextArrow: $('.btnNext')
};

var events= {
    init: function () {
        var self = this;
        $(window).load(function () {
            setTimeout(function () {
                self.hideLoader();
                self.goToSection();
                self.initSlider();
                self.selectQuestion();
                self.selectProvince();
                self.selectLimaCallao();
                self.scroll();
            },500);
        });
    },
    hideLoader: function () {
        $('.wrpVenta').fadeIn(400);
        $('.contLoader').fadeOut(400);
    },
    goToSection: function () {
        $('.groupMenu ul li').click(function () {
            $('.groupMenu ul li').removeClass('active');
            $(this).addClass('active');
            var position;
            switch($(this).index()){
                case 0:
                    position = $('.ventaIntro').position().top;
                    break;
                case 1:
                    position = $('.ventaDespacho').position().top;
                    break;
                case 2:
                    position = $('.ventaPreguntas').position().top;
                    break;
            };
            $("body, html").animate({scrollTop: position - 60},500)
        });
    },
    initSlider: function () {
        setTimeout(function () {
            $('#slider').slick(configSlick);
            $(window).resize();
        },500);
    },
    goToSlider: function (position) {
        $('#slider').slick('slickGoTo',position);
    },
    selectQuestion: function () {
        $('.itemAccord h5').click(function () {
            if($(this).parent().find('p').css('display') == "none"){
                $('.itemAccord h5').removeClass('icoClose').addClass('icoPlus');
                $(this).removeClass('icoPlus').addClass('icoClose');
                $('.itemAccord p').slideUp(200);
                $(this).parent().find('p').slideToggle(200);
            }else{
                $(this).parent().find('p').slideUp(200);
                $(this).removeClass('icoClose').addClass('icoPlus');
            }
        });
    },
    selectLimaCallao: function () {
        var self = this;
        $('.selectLima').click(function () {
            $('.contSelectLima').html('<ul></ul>');
            for(var i=0;i<dataLimaCallao.length;i++){
                $('.contSelectLima ul').append('<li><span class="txtSelect" rel="'+i+'">'+dataLimaCallao[i].city+'</span></li>');
            }
            $('.contSelectLima').slideToggle(200);
            $('.contSelectProvincia').slideUp(200);
            $('.resultLima').slideUp(200);
            self.selectOptionLimaCallao();
        });
    },
    selectProvince: function () {
        var self = this;
        $('.selectProvincia').click(function () {
            $('.contSelectProvincia').mCustomScrollbar("destroy");
            $('.contSelectProvincia').html('<ul></ul>');
            for(var i=0;i<dataProvince.length;i++){
                $('.contSelectProvincia ul').append('<li><span class="txtSelect" rel="'+i+'">'+dataProvince[i].city+'</span></li>');
            }
            $('.contSelectProvincia').mCustomScrollbar();
            $('.contSelectProvincia').slideToggle(200);
            $('.contSelectLima').slideUp(200);
            $('.resultProvincia').slideUp(200);
            self.selectOptionProvince();
        });
    },
    selectOptionLimaCallao: function () {
        $('.contSelectLima ul li span').click(function () {
            var city = dataLimaCallao[$(this).attr('rel')];
            $('.selectLima').html(city.city);

            $('.cRight img').attr('src',city.image);
            if($(window).width()<=360)
                $('.cRight img').attr('src',mapaDefault);

            $('.resultLima .wrpScroll').mCustomScrollbar("destroy");
            $('.resultLima .wrpScroll').html('');
            for(var i=0; i<city.stores.length; i++){
                $('.resultLima .wrpScroll').append('<div class="itemNom"><h5>'+city.stores[i].name+'</h5><p>'+city.stores[i].address+'</p></div>');
            }

            $('.resultLima').removeClass('active');
            if(city.stores.length>2){
                $('.resultLima').addClass('active');
                $('.resultLima .wrpScroll').mCustomScrollbar();
            }

            $('.contSelectLima').slideUp(200);
            $('.resultLima').slideDown(200);
            $('.resultProvincia').slideUp(200);
        });
    },
    selectOptionProvince: function () {
        $('.contSelectProvincia ul li span').click(function () {
            var city = dataProvince[$(this).attr('rel')];
            $('.selectProvincia').html(city.city);

            $('.cRight img').attr('src',city.image);
            if($(window).width()<=360)
                $('.cRight img').attr('src',mapaDefault);

            $('.resultProvincia .wrpScroll').mCustomScrollbar("destroy");
            $('.resultProvincia .wrpScroll').html('');
            for(var i=0; i<city.stores.length; i++){
                $('.resultProvincia .wrpScroll').append('<div class="itemNom"><h5>'+city.stores[i].name+'</h5><p>'+city.stores[i].address+'</p></div>');
            }

            $('.resultProvincia').removeClass('active');
            if(city.stores.length>2){
                $('.resultProvincia').addClass('active');
                $('.resultProvincia .wrpScroll').mCustomScrollbar();
            }

            $('.contSelectProvincia').slideUp(200);
            $('.resultProvincia').slideDown(200);
            $('.resultLima').slideUp(200);
        });
    },
    scroll: function () {
        $(window).scroll(function() {
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function() {
                var topWindow = $(window).scrollTop();
                if(topWindow>=$('.ventaIntro').position().top && topWindow<$('.ventaDespacho').position().top-150){
                    $('.groupMenu ul li').removeClass('active');
                    $('.groupMenu ul li').eq(0).addClass('active');
                }else if(topWindow>=$('.ventaDespacho').position().top-150 && topWindow<$('.ventaPreguntas').position().top-150){
                    $('.groupMenu ul li').removeClass('active');
                    $('.groupMenu ul li').eq(1).addClass('active');
                }else if(topWindow>=$('.ventaPreguntas').position().top-150){
                    $('.groupMenu ul li').removeClass('active');
                    $('.groupMenu ul li').eq(2).addClass('active');
                }
            },50));
        });
    }
};

events.init();