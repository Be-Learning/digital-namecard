input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Confused)
})
basic.forever(function () {
    basic.showString("Rkakdenddl")
    basic.pause(1000)
    basic.showNumber(1004)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.pause(500)
})
