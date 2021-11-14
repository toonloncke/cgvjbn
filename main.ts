input.onButtonPressed(Button.A, function () {
	
})
loops.everyInterval(60000, function () {
    while (Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left) > 100) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 1000)
    }
    while (Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left) > 10) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
    }
    while (Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left) > 5) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 3)
    }
    Kitronik_Move_Motor.beepHorn()
    for (let index = 0; index < 30; index++) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 20)
    }
    for (let index = 0; index < 200; index++) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
    }
})
