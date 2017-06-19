$(function () {
    //首页渐变的效果
    (function () {
        init();

        function init() {
            hideCover();
            showTime();
            // setBackground();
        }

        // function setBackground() {
        //     $.ajax({
        //         url:"http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1",
        //         type: 'get',
        //         dataType: 'jsonp',
        //         jsonp:'',                             //需要填入后端的回调函数名称才可以
        //         jsonpCallback:'success_jsonpCallback',
        //         success: function (data) {
        //             // var list = $.stringfy(data);
        //             // var list = data;
        //             // console.log(data);
        //         }
        //     });
        // }

        function hideCover() {
            $('.cover').animate({
                opacity: 0
            }, 4000, function () {
                $(this).css('display', 'none');
            });
        }

        function showTime() {
            setTime();
            setInterval(function () {
                setTime();
            }, 1000);
        }

        function setTime() {
            var oTime = $('.time');
            var date = new Date();
            var str = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
            oTime.text(str);
        }

        function addZero(data) {
            var str = data + '';
            if (str.length < 2) {
                str = '0' + str;
            }
            return str;
        }

    })();














});