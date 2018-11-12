let PushColor = 0
let neopixel2: neopixel.Strip = null
function setRainbow() {
    neopixel2 = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
    neopixel2.showRainbow(1, 360)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "RED" || (receivedString == "Red" || receivedString == "red")) {
        PushColor = neopixel.colors(NeoPixelColors.Red)
        playColor()
    } else if (receivedString == "BLACK" || (receivedString == "Black" || receivedString == "black")) {
        PushColor = neopixel.colors(NeoPixelColors.Black)
        playColor()
    } else if (receivedString == "BLUE" || (receivedString == "Blue" || receivedString == "blue")) {
        PushColor = neopixel.colors(NeoPixelColors.Blue)
        playColor()
    } else if (receivedString == "GREEN" || (receivedString == "Green" || receivedString == "green")) {
        PushColor = neopixel.colors(NeoPixelColors.Green)
        playColor()
    } else if (receivedString == "PINK" || (receivedString == "Pink" || receivedString == "pink")) {
        PushColor = neopixel.rgb(255, 105, 180)
        playColor()
    } else if (receivedString == "YELLOW" || (receivedString == "Yellow" || receivedString == "yellow")) {
        PushColor = neopixel.colors(NeoPixelColors.Yellow)
        playColor()
    } else if (receivedString == "ORANGE" || (receivedString == "Orange" || receivedString == "orange")) {
        PushColor = neopixel.colors(NeoPixelColors.Orange)
        playColor()
    } else if (receivedString == "PURPLE" || (receivedString == "Purple" || receivedString == "purple")) {
        PushColor = neopixel.colors(NeoPixelColors.Purple)
        playColor()
    } else if (receivedString == "WHITE" || (receivedString == "White" || receivedString == "white")) {
        PushColor = neopixel.colors(NeoPixelColors.White)
        playColor()
    }
})
function SetColor() {
    neopixel2.rotate(1)
    neopixel2.show()
}
function playColor() {
    neopixel2.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(50)
    for (let i = 0; i < 7; i++) {
        neopixel2.showColor(PushColor)
        basic.pause(150)
        neopixel2.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(150)
    }
    neopixel2.showColor(PushColor)
    basic.pause(500)
    setRainbow()
    SetColor()
}
radio.setGroup(1)
setRainbow()
basic.forever(function () {
    SetColor()
})
