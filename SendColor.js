input.onButtonPressed(Button.A, function () {
    radio.sendString("pink")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("blue")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("orange")
})
radio.setGroup(1)
