//헤더 보더 이벤트
$(window).scroll(function(){
    $('header').css('border-bottom','2px solid #cb2b11')
})
//최상단에 올라오면 보더값 리셋
$(window).scroll(function() {
    if ($(this).scrollTop() == 0) {
        $('header').css('border','0')
    }
})


//로그인 서브메뉴 on/off event
$('.login').on('mouseover', ()=>{
    $('.login > p').show()
})
$('.login').on('mouseout', ()=>{
    $('.login > p').hide()
})

//인증센터 서브메뉴 on/off event
$('.customer').on('mouseover', ()=>{
    $('.customer > p').show()
})
$('.customer').on('mouseout', ()=>{
    $('.customer > p').hide()
})

//언어 서브메뉴 on/off event
$('.lang').on('mouseover', ()=>{
    $('.select_lang').show()
})
$('.lang').on('mouseout', ()=>{
    $('.select_lang').hide()
})

//전체 메뉴 on/off event
let i = true;
$('.gnb').on('click',()=>{
    
    if (i == true){
        $('.nav').stop(true).slideDown()
        i = false
    }
    else{
        $('.nav').stop(true).slideUp()
        i = true
        for(let j of $('.menu_list > .tabtitle')){ 
            $(j).removeClass('active_red')
        }
        $('.title01').addClass('active_red')
        for(let k of $('.keyword_wrap01 > li > a')){ 
            $(k).removeClass('active_gray')
        }
        $('.keyword01').addClass('active_gray')
    }
})
$('.close_menu').on('click',()=>{
    $('.nav').stop(true).slideUp()
})
$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
        $('.nav').stop(true).slideUp()
    }
})

//전체메뉴 list tab active event
$('.menu_list > li').on('click', function(){
    for(let i of $('.menu_list > .tabtitle')){ 
        $(i).removeClass('active_red')
    }
    $(this).addClass('active_red')
})

//전체메뉴  keyword tab active event
$('.keyword_wrap01 > li > a').on('click', function(){
    for(let i of $('.keyword_wrap01 > li > a')){ 
        $(i).removeClass('active_gray')
    }
    $(this).addClass('active_gray')
})
//빠른메뉴 클릭시 메뉴 변경 이벤트
$('#trans').on('click',()=>{
    $('.view_con').css('transform','translateX(-864px)')
    $('.view_con').css('transition','all 0.5s')
})
$('.active_left').on('click',()=>{
    $('.view_con').css('transform','translateX(0px)')
    $('.view_con').css('transition','all 0.5s')
})
$(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
        $('.view_con').css('transform','translateX(0px)')
        $('.view_con').css('transition','all 0.5s')
    }
})
//footer link 마우스 오버 이벤트
$('.flink > h3').on('mouseover',function(){
    for(let i of $('.flink > h3')){
        
        console.log(this)
    }
})

//bnk sns 마우스 오버 이벤트
$('.title_sns > h3').on('click', ()=>{
    $('.con_sns').show()
})
$('.title_sns').on('mouseout', ()=>{
    $('.con_sns').hide()
})

//--------------
const swiper1 = new Swiper('.swiper',{
    //방향설정 direction:'horizontal','vertical'
    /* direction:'horizontal', */
    effect:'fade',
    autoplay:{delay:4000},
    speed:1000,
    loop:true 
})

//link 업다운 이벤트
let j = true
$('.title_network > p > button').on('click',function(){
    console.log('.')
    if (j == true) {
        $('.con_network').stop(true).slideDown()
        j = false
    }
    else {
        $('.con_network').stop(true).slideUp()
        j = true
    }
})
$('.title_family > p > button').on('click',function(){
    console.log('.')
    if (j == true) {
        $('.con_family').stop(true).slideDown()
        j = false
    }
    else {
        $('.con_family').stop(true).slideUp()
        j = true
    }
})
