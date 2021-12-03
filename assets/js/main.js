const port = 'https';
const domain = 'api.telegram.org';
const botToken = 'bot2009593665:AAHHtxHIBv288p_-u6lcTRBmI0IJNFYUEYo';
const sendCommand = 'sendMessage?';
const chatId = '-1001487455180';
let message_ = '';
let commit = {
    user: 'Strange',
    time: 'undefined',
    points: 100,
    isMale: true,
    isElementray: false,
    isMiddle: false,
    isProp: true,
    percentage: '100%'
}
url = `${port}://${domain}/${botToken}/${sendCommand}chat_id=${chatId}&text=${message(commit)}`


function send(what) {
    let plane = new XMLHttpRequest();
    plane.open('GET', what, true);
    plane.send()
}

function message({
    user,
    time,
    points,
    isMale,
    isElementary,
    isMiddle,
    isProo,
    percentage
}) {
    message_ = `
User: ${user}%0A
time: ${time}%0A
points: ${points};
    `;
    url = `${port}://${domain}/${botToken}/${sendCommand}chat_id=${chatId}&text=${message_}`
    return message_
}
// send(url)

function date() {
    const now = new Date();
    const currentDate = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const time = `${now.getHours()}:${now.getMinutes()}`
    return {
        date: currentDate,
        month: month,
        year: year,
        time: time
    }
}

$rippleBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        btn.css({
            overflow: 'hidden'
        })
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.add('ripple')
        ripples.css({
            top: y + 'px',
            left: x + 'px'
        })
        btn.appendChild(ripples);
        setTimeout(function () {
            ripples.remove()
        }, 500)
    })
})