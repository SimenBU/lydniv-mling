Lyd = "Verdi"
Lydnivå_Verdi = 0

def ReadSensor():
    return input.sound_level()*10

def on_forever():
    Lydnivå_Verdi
    Lydnivå_Verdi = ReadSensor()
    serial.write_value(Lyd, Lydnivå_Verdi)
    basic.pause(1000)
basic.forever(on_forever)
