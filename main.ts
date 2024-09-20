let y = 0
let x = 0
basic.clearScreen()
let cicli = 5
basic.forever(function () {
    x = 0
    for (let index = 0; index < cicli; index++) {
        control.waitMicros(200000)
        led.plot(x, 0)
        x = x + 1
    }
    x = 0
    for (let index = 0; index < cicli; index++) {
        control.waitMicros(200000)
        led.unplot(x, 0)
        x = x + 1
    }
    x = 0
    y = 0
    for (let index = 0; index < cicli; index++) {
        control.waitMicros(200000)
        led.plot(4, y)
        y = y + 1
    }
    x = 0
    y = 0
    for (let index = 0; index < cicli; index++) {
        control.waitMicros(200000)
        led.unplot(4, y)
        y = y + 1
    }
})
