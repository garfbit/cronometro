let tiempoa = 0
let tiempob = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    tiempoa = input.runningTime() / 1000
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    tiempob = input.runningTime() / 1000
    basic.showNumber(tiempob - tiempoa)
})
