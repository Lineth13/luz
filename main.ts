let luz: string;
while (true) {
    luz = "" + input.lightLevel()
    if (input.lightLevel() > 200) {
        basic.showIcon(IconNames.Triangle)
        basic.showString(luz)
    } else if (input.lightLevel() >= 100 && input.temperature() <= 200) {
        basic.showIcon(IconNames.Snake)
        basic.showString(luz)
    } else {
        basic.showLeds(`
        . . . . .
        . . # . .
        . . # # .
        . . . . .
        . . . . .
        `)
        basic.showString(luz)
    }
    
}
