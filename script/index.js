//로그인 서브메뉴
$('.login').on('mouseover', ()=>{
    $('.login > p').show()
})
$('.login').on('mouseout', ()=>{
    $('.login > p').hide()
})
//인증센터 서브메뉴
$('.customer').on('mouseover', ()=>{
    $('.customer > p').show()
})
$('.customer').on('mouseout', ()=>{
    $('.customer > p').hide()
})
//언어 서브메뉴
$('.lang').on('mouseover', ()=>{
    $('.select_lang').show()
})
$('.lang').on('mouseout', ()=>{
    $('.select_lang').hide()
})
//전체 메뉴 on/off 이벤트


let i = true;
$('.gnb').on('click',()=>{
    if (i == true){
        $('.nav').stop(true).slideDown()
        i = false
    }
    else{
        $('.nav').stop(true).slideUp()
        i = true
    }
})
$('.close_menu').on('click',()=>{
    $('.nav').stop(true).slideUp()
})

//전체메뉴 리스트 활성화 탭 event
$('.menu_list > li').on('click', function(){
    for(let i of $('.menu_list > .tabtitle')){ 
        $(i).removeClass('active_red')
    }
    console.log('.')
    $(this).addClass('active_red')
})
