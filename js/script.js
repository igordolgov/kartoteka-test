// Подключение левой части ("aside") из другого файла
$(function() {
    $("#aside").load("./../includes/_aside.html");
});

// Текущая дата и время
current_date = () => {
    let d = new Date()
    let month_num = d.getMonth()
    let day = d.getDate()
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()

    month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря")

    if (day <= 9) day = "0" + day
    if (hours <= 9) hours = "0" + hours
    if (minutes <= 9) minutes = "0" + minutes
    if (seconds <= 9) seconds = "0" + seconds

    date_time = "Сегодня - " + day + " " + month[month_num] + " " + d.getFullYear() +
    " г.&nbsp;&nbsp;&nbsp;Текущее время - "+ hours + ":" + minutes + ":" + seconds
    if (document.layers) {
      document.layers.doc_time.document.write(date_time)
      document.layers.doc_time.document.close()
    }
    else document.getElementById("doc_time").innerHTML = date_time
    setTimeout("current_date()", 1000)
}

// Мобильное меню ("Бургер")
const body = document.querySelector("body"),
    nav = document.querySelector(".mob-nav")
    navBtn = document.querySelector(".mob-nav__btn"),

navBtn.onclick = function() {
    this.classList.toggle("show")
    body.classList.toggle("scroll")
    nav.classList.toggle("show")
}
