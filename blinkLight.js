let stopTime = 0
function blink() {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(500)
}
function stopFunc() {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(2100)
    stopTime = 0
}
function blink2() {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(500)
}
radio.onReceivedString(function (receivedString) {
    stopTime = 1
})
function blink3() {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(500)
}
radio.setGroup(1)
stopTime = 0
basic.forever(function () {
    if (stopTime == 0) {
        blink()
        if (stopTime == 0) {
            blink2()
            if (stopTime == 0) {
                blink3()
            } else {
                stopFunc()
            }
        } else {
            stopFunc()
        }
    } else {
        stopFunc()
    }
})
