let numero = 0
input.onButtonPressed(Button.A, function () {
    numero = 0
    while (numero < 11) {
        for (let index = 0; index < 2; index++) {
            basic.showString("" + (numero))
            basic.pause(500)
            numero += 1
            basic.showString("FIM")
            basic.pause(500)
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    numero = 10
    while (numero >= 0) {
        for (let index = 0; index < 2; index++) {
            basic.showNumber(numero)
            basic.pause(500)
            numero += -1
            basic.showString("FIM")
            basic.pause(500)
            basic.clearScreen()
        }
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
