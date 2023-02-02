let Lyd = "Verdi"
let Lydnivå_Verdi = 0
function ReadSensor(): number {
    return input.soundLevel()
}

basic.forever(function on_forever() {
    let Lydnivå_Verdi: number;
    Lydnivå_Verdi
    Lydnivå_Verdi = ReadSensor()
    serial.writeValue(Lyd, Lydnivå_Verdi)
    basic.pause(6000)
})
