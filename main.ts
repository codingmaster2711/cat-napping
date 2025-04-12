input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showIcon(IconNames.Target)
        music.play(music.stringPlayable("- G F D D F G - ", 120), music.PlaybackMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
let logging = false
logging = false
loops.everyInterval(1000, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("temp", input.temperature()),
        datalogger.createCV("light", input.lightLevel())
        )
    }
})
