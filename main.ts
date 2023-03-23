input.onButtonPressed(Button.A, function () {
    if (alu < 12) {
        alu += 1
    }
    if (alu == 12) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
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
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(alu)
})
let alu = 0
alu = 0
basic.showNumber(alu)
