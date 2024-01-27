//% color="#23C131" icon="\uf05b" weight=100
namespace Ultrasound
{
    //% blockId=ultrasound block="Distance sensor |at|pin %trug |at|pin %echo"
    //% weight=10
    export function read_distance(trig: DigitalPin, echo: DigitalPin): number
    {
        pins.setPull(trig, PinPullMode.PullNone)
        pins.digitalWritePin(trig, 0)
        control.waitMicros(2)
        pins.digitalWritePin(trig, 1)
        control.waitMicros(10)
        pins.digitalWritePin(trig, 0)

        // read pulse
        let d = pins.pulseIn(echo, PulseValue.High, 25000);

        let distance = d / 58

        if (distance > 400)
            distance = 0

        return distance;
    }

}