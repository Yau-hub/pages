/**
     * 分页
     * @parentId 容器id
     * @num 数据总条数
     * @index 当前页数
     * @pages 数据总页数
     * @click 页码点击事件
     */
 /*   $(function () {
        $.pages({
            parentId:'page',
            num: 0,
            index: 0,
            pages: 0,
            click: function (e) {

            }
        })
    });*/
 $(function () {
        var Pages = (function () {
            var Pages = function () {};
            var createDoms = function (obj) {
                var doms =
                    '<span class="num">共有 '+obj.num+'个相关结果</span>\n'+
                    '<ul class="clear-float">\n'+
                    '<li>上一页</li>\n'+
                    '<li class="active">1</li>\n'+
                    '<li>2</li>\n'+
                    '<li>3</li>\n'+
                    '<li class="tip"><img src="./img/page-point.png" alt=""></li>\n'+
                    '<li>尾页</li>\n'+
                    '<li>下一页</li>\n'+
                    '</ul>\n'+
                    '<span class="total">共'+obj.pages+'页</span>\n';
                return doms;
            };
            Pages.prototype.init = function (option) {
                this.opt = option;
                return this;
            };
            Pages.prototype.render = function () {
                var that = this.opt;
                var doms = createDoms(this.opt);
                var $doms = $(doms);

                var parent = document.getElementById(that.parentId);
                var parentClassList = parent.getAttribute("class");
                parent.setAttribute("class",parentClassList+" pages");
                $(parent).empty();
                $(parent).append($doms)

                var pageList = $(parent).find("li");
                var last = $(parent).find("li")[0];
                var left = $(parent).find("li")[1];
                var center = $(parent).find("li")[2];
                var right = $(parent).find("li")[3];
                var tip = $(parent).find("li")[4];
                var end = $(parent).find("li")[5];
                var next = $(parent).find("li")[6];
                var index = that.index;
                // console.log(pageList);
                if(that.pages == 3){
                    $(tip).css("display","none");
                }
                else  if(that.pages == 2 ){
                    $(right).css("display","none");
                    $(tip).css("display","none");
                }
                else  if(that.pages <= 1 ){
                    $(center).css("display","none");
                    $(right).css("display","none");
                    $(tip).css("display","none");
                }


                $(last).click(function () {

                    if($(parent).find("ul li.active").text()>1){

                    }
                });
                $(left).click(function () {
                    $(pageList).removeClass("active");

                    if($(this).text()>1){
                        $(left).text(parseInt($(left).text()) - 1);
                        $(center).text(parseInt($(center).text()) - 1);
                        $(right).text(parseInt($(right).text()) - 1);
                        $(center).addClass("active");
                    }else {
                        $(this).addClass("active");
                    }


                });
                $(center).click(function () {
                    $(pageList).removeClass("active");
                    $(this).addClass("active");




                });
                $(right).click(function () {
                    $(pageList).removeClass("active");

                    if($(this).text()<that.pages){
                        $(left).text(parseInt($(left).text()) + 1);
                        $(center).text(parseInt($(center).text()) + 1);
                        $(right).text(parseInt($(right).text()) + 1);
                        $(center).addClass("active");
                    }else {

                        $(this).addClass("active");
                    }
                });

                $(last).click(function () {
                  var active = parseInt($(parent).find("li.active").text());
                    $(pageList).removeClass("active");
                    if(active == 1){
                        $(left).addClass("active");
                    }
                    else if(active == 2){
                        $(left).addClass("active");
                    }
                    else if(active == 3 && that.pages <=3){
                        $(center).addClass("active");
                    }
                    else {

                        if(active == that.pages){
                            $(center).addClass("active");
                        }
                        else {
                            $(left).text(parseInt($(left).text()) - 1);
                            $(center).text(parseInt($(center).text()) - 1);
                            $(right).text(parseInt($(right).text()) - 1);
                            $(center).addClass("active");
                        }

                    }

                });
                $(next).click(function () {
                    var active = parseInt($(parent).find("li.active").text());
                    $(pageList).removeClass("active");

                    if(that.pages <= 3){
                        if(active == 1){
                            $(center).addClass("active");
                        }
                        else if(active == 2){
                            $(right).addClass("active");
                        }
                        else {
                            $(right).addClass("active");
                        }
                    }
                    else if(active == that.pages || active == that.pages - 1){
                        $(right).addClass("active");
                    }
                    else {
                        if(active == 1){
                            $(center).addClass("active");
                        }
                        else {
                            $(left).text(parseInt($(left).text()) + 1);
                            $(center).text(parseInt($(center).text()) + 1);
                            $(right).text(parseInt($(right).text()) + 1);
                            $(center).addClass("active");
                        }
                    }

                });


                $(end).click(function () {
                    $(pageList).removeClass("active");
                    $(right).addClass("active");
                    $(right).text(that.pages);
                    $(center).text(that.pages - 1);
                    $(left).text(that.pages - 2);
                });


                $($(parent).find("ul")).click(function (e) {
                    if(e.target.nodeName == "LI"){
                        index = $(this).find("li.active").text();
                        return   that.click(index);;
                    }

                });

            };
            return Pages;

        })();

        $.pages = function (obj) {
            var settings = $.extend(
                {
                    parentId: "",
                    num: 1,
                    index: 1,
                    pages: 1,
                    click: function (e) {
                    }
                }
                ,obj);
            new Pages().init(settings).render();

        };

    });

