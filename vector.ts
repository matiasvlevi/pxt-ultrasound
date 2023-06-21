
enum Components {
    x = 0,
    y = 1
}


class TVector {
    values: number[];
    
    constructor(x: number, y: number) {
        this.values = [x, y];
    }

    toString(): string {
        return this.values.join(',');
    }
};

//% color="#23C131" icon="\uf05b" weight=100
namespace Vector
{

    

    //% block="Create vector from x: %x y: %y"
    export function create(x: number, y: number): TVector
    {
        return new TVector(x, y);
    }

    //% block="vector %v to string"
    //% advanced=true
    export function serialize(v: TVector): string
    {
        return v.toString();
    }

    //% block="string %s to Vector"
    //% advanced=true
    export function deserialize(s: string): TVector
    {
        const [x, y]: number[] = s
            .split(',')            // Split to string[]
            .map(value => +value); // Cast to number[]
        
        return new TVector(x, y);
    }

    // Conversion from (TVector | string) to TVector
    function convert(v: TVector | string): TVector
    { 
        if (v instanceof TVector)
            return v;
        else
            return deserialize(v);
    }

    //% block="get %k from vector %v"
    export function get(k: Components, v: TVector | string)
    {
        if (v instanceof TVector) return v.values[k];
        else { 
            return deserialize(v).values[k];
        }
    }    

    //% block="distance from vector %v1 to vector %v2"
    //% advanced=true
    export function dist(
        v1: TVector | string,
        v2: TVector | string): number
    {
        v1 = convert(v1);
        v2 = convert(v2);
        
        const x = v1.values[0] + v2.values[0];
        const y = v1.values[1] + v2.values[1];
        
        return Math.sqrt((x*x) + (y*y));
    }

    //% block="get vector %v angle from x axis"
    //% advanced=true
    export function getAngle(v: TVector | string): number {
        v = convert(v);

        let theta =  
            Math.atan(v.values[1]/v.values[0])

        if (v.values[0] < 0) theta += Math.PI;

        return theta;
    }

    //% block="convert vector %v to polar notation"
    //% advanced=true
    export function toPloar(v: TVector | string) {
        v = convert(v);
        
        return new TVector(
            dist(new TVector(0, 0), v),
            getAngle(v)
        );
    }

    //% block="convert vector %v to cartesian notation"
    //% advanced=true
    export function toCartesian(v: TVector | string) {
        v = convert(v);

        return new TVector(
            v.values[0] * Math.cos(v.values[1]),
            v.values[0] * Math.sin(v.values[1])
        );
    }
}