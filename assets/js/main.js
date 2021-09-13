const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const YEAR = $('.year')
const WEEK = $('.number_week')
const DAY = $('.number_day')
const HOUR = $('.number_hour')
const MINUTE = $('.number_min')
const SECOND = $('.number_sec')

//const deadline = new Date(2022,01,01,0,0,0,0)
var deadline = new Date('Jan 1, 2022 00:00:00')
var currentDate = new Date()
;(function app() {
    console.log(deadline)
    var deadlineSeconds = deadline.getTime()
    var now = new Date().getTime()
    var currentDate = new Date().getTime()
    var countDown = deadlineSeconds - now
    var seconds = 1000
    var minutes = 60 * seconds
    var hours = 60 * minutes
    var days = 24 * hours
    var weeks = 7 * days

    var weeksRemaining = Math.floor(countDown / weeks)
    var daysRemaining = Math.floor((countDown % weeks) / days)
    var hoursRemaining = Math.floor((countDown % days) / hours)
    var minutesRemaining = Math.floor((countDown % days) / minutes)
    var secondsRemaining = Math.floor((countDown % minutes) / seconds)
    
    YEAR.innerText = deadline.getFullYear() 
    WEEK.innerText = weeksRemaining
    DAY.innerText = daysRemaining
    HOUR.innerText = hoursRemaining
    MINUTE.innerText = minutesRemaining
    SECOND.innerText = secondsRemaining
   if(countDown == 0 ){
        deadline.setFullYear(deadline.getFullYear() + 1)
    }
    setInterval(app,1000)
})()