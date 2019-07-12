//nVampeta 
(function ($) {

    var self = $.nVampeta = new function () { };

    $.extend(self, {

        nVampetaBackgrounds: [
            'http://www.away.com.br/nvampeta/bg1.png'
        ],

        nVampetaImgs: [
            'http://imgserv.ya.com/galerias2.ya.com/img/c/c230c685f1321c1ei3.jpg',
            'https://revistadom.wordpress.com/files/2008/12/portfolio6.jpg',
            'https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2017/10/hot-calendar-shoot-firefighters-australia-12-59df0f73294b7__700.jpg',
            'https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2017/10/hot-calendar-shoot-firefighters-australia-4-59df0f5a571e1__700.jpg',
            'https://dontmesswithmyheels.files.wordpress.com/2014/01/dc8b0-6-junh1.jpg',
            'https://revistaladoa.com.br/wp-content/uploads/2017/10/9006_1594885340747071_4370057665088474564_n.jpg?x81230',
            'https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2017/10/hot-calendar-shoot-firefighters-australia-7-59df0f6306b23__700.jpg',
            'https://i.pinimg.com/originals/c3/e2/ca/c3e2ca9812319aa0ba93ec0446895747.jpg',
            'http://www.sonoticiaboa.com.br/wp-content/uploads/2017/10/bombeiros-close-2.jpg',
            'https://revistaladoa.com.br/wp-content/uploads/2017/10/800x600.gif?x81230',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDqCb5LgMs7zXbLYrQkxR38YbKunRaO7NUHa2SE7msWaGEiFI3',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIskCAaFxQyUFjeuIH36nPdeV5sm4IAEGhNWwBK9m1cNzk2EL5',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VOuQySMkgC7rcqqfMKsICi0MsEcTCYiGaHhImNbD-PI-PUsk',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0MJ4hj8J0zExrao_zffAMfxpDYNNSC62qn_fHJI3TT91JuQL',
            'https://i.pinimg.com/236x/23/72/6c/23726ca93f6e17d12763ce2f984dd295--hot-firefighters-hot-firemen.jpg',
            'http://2.bp.blogspot.com/_HmtxTVm6GPM/SczwvGE3RYI/AAAAAAAAFvs/B_5mbxF45qo/s400/Bombeiros+Fotos.jpg',
            'https://awebic.com/wp-content/uploads/2017/10/calendario-bombeiros-australia-awebic-1.jpg',
            'https://i.pinimg.com/236x/23/72/6c/23726ca93f6e17d12763ce2f984dd295--hot-firefighters-hot-firemen.jpg',
            'https://fotos.web.sapo.io/i/Ba11148df/18446891_NPrzI.jpeg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskjVN375o1CGnw3NGI91JWXnZBYUv2Vz-TM3mN2wERZWrNI8q',
            'http://4.bp.blogspot.com/-NDjLZWL8Vw4/T_GbrLBzmII/AAAAAAAAPUE/O5Rsz8uDQhE/s320/11.jpg',
            'http://www.doistercos.com.br/wp-content/uploads/2011/05/FDNY-1.jpg',
            'https://i.pinimg.com/236x/28/31/37/2831372ff67e4d88705c1a1dca80aa25--sexy-men-hot-men.jpg',
            'https://i.pinimg.com/originals/85/43/cd/8543cdd7b54cbc12e0de91d9dcfa823a.jpg',
            'https://i.pinimg.com/236x/ba/88/30/ba8830e5b9079e7886d81311992adbb7--hot-firefighters-hot-firemen.jpg'
        ],

        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        //Replace
                        $(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                var h = $(item).height();
                                var w = $(item).width();
                                $(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo: function (bgImgs, time) {
            $backgroundImages = $(
                '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
                '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
                '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,' +
                '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            )
                .filter(function () {
                    backgroundImg = $(this).css('background-image');
                    return backgroundImg && backgroundImg != 'none';
                }
                );

            $backgroundImages.each(function (i, item) {
                $(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
                $(item).css('background-position', '0 0');
                $(item).css('background-repeat', 'no-repeat');
                $(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.nVampetaImgs, 3000);
        self.handleLogo(self.nVampetaBackgrounds, 3000);
    });
})(jQuery);
