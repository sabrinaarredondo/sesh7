basic.showString("Hello!")
basic.showIcon(IconNames.Ghost)
basic.showIcon(IconNames.Heart)
led.setDisplayMode(DisplayMode.Greyscale)
basic.forever(function () {
    music.playMelody("C A - B - F G C5 ", 200)
})
