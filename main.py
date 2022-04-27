while True:

    luz = str(input.light_level())

    if input.light_level() > 200:
        basic.show_icon(IconNames.TRIANGLE)
        basic.show_string(luz)
    elif input.light_level() >= 100 and input.temperature() <= 200:
        basic.show_icon(IconNames.SNAKE)
        basic.show_string(luz)
    else:
        basic.show_leds(IconNames.RABBIT)
        basic.show_string(luz)
