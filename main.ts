input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(alu)
})
input.onButtonPressed(Button.A, function () {
    alu += 1
    basic.showNumber(alu)
})
input.onButtonPressed(Button.AB, function () {
    alu = 0
    basic.showNumber(alu)
})
input.onButtonPressed(Button.B, function () {
    if (alu > 0) {
        alu += -1
        basic.showNumber(alu)
    }
})
let alu = 0
alu = 0
basic.showNumber(alu)
