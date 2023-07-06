//% color="#23C131" icon="\uf05b" weight=100
namespace Vector
{
    /**
     * Available vector components
     */
    export enum Vector2Components {
        x = 0,
        y = 1
    }

    /**
     * Vector Data Type
     * 
     * Values are stored in an array, so they can be indexed with
     * the Vector2Components enum
     * 
     */
    export class Vector2 {
        values: number[];
        
        constructor(
            x: number = NaN,
            y: number = NaN)
        {
            this.values = [x, y];
        }

        /**
         * toString @override
         * 
         * method is used automatically when 
         * the Vector2 data type is used as a string
         */
        toString(): string
        {
            return this.values.join(',');
        }
    };

    //% block="create vector from x:%x y:%y"
    export function create(x: number, y: number): Vector2
    {
        return new Vector2(x, y);
    }

    //% block="%s to vector"
    //% advanced=true
    export function deserialize(s: string): Vector2
    {
        const [x, y]: number[] = s
            // Split to string[]
            .split(',')         
            // Filter out empty strings
            .filter(expr => expr.length !== 0)
            // Cast to number[]
            .map(value => +value);
        
        return new Vector2(x, y);
    }

    //% block="%v to string"
    //% advanced=true
    export function serialize(v: Vector2): string
    {
        return v.toString();
    }

    /**
     * @method convert
     * 
     * Internal utility for converting 
     * (Vector2 | string) to Vector2
     */
    function convert(v: Vector2 | string): Vector2
    {
        if (v instanceof Vector2) {
            return v;
        } else {
            return deserialize(v);
        }
    }

    //% block="%v %k"
    export function get(
        k: Vector2Components,
        v: Vector2 | string): number
    {
        if (v instanceof Vector2) {
            return v.values[k];
        } else {
            return deserialize(v).values[k];
        }
    }

    //% block="%v is a vector"
    export function isVector(v: Vector2 | string): boolean
    {
        v = convert(v);

        return !(
            isNaN(v.values[0]) ||
            isNaN(v.values[1]) 
        )
    }

    //% block="set %n to %k of vector %v"
    export function set(
        n: number,
        k: Vector2Components,
        v: Vector2): void
    {
        v.values[k] = n;
    }

    /**
     *  --- MATH ---
     */

    //% block="add %n to %k of vector %v"
    export function add(
        n: number,
        k: Vector2Components,
        v: Vector2): void
    {
        v.values[k] += n;
    }

    //% block="multiply %n to %k of vector %v"
    export function mult(
        n: number,
        k: Vector2Components,
        v: Vector2): void
    {
        v.values[k] *= n;
    }

    //% block="%v1 dot %v2"
    //% advanced=true
    export function dotProduct(
        v1: Vector2 | string,
        v2: Vector2 | string): number
    {
        v1 = convert(v1);
        v2 = convert(v2);

        const x = v1.values[Vector2Components.x] *
                  v2.values[Vector2Components.x];
        
        const y = v1.values[Vector2Components.y] *
                  v2.values[Vector2Components.y];
        
        return x + y;
    }

    //% block="%v magnitude"
    //% advanced=true
    export function magnitude(v: Vector2 | string): number
    {
        v = convert(v);
        
        const x = v.values[Vector2Components.x];
        const y = v.values[Vector2Components.y];
        
        return Math.sqrt(
            (x * x) + (y * y)
        );
    }
    
    //% block="%v direction"
    //% advanced=true
    export function direction(v: Vector2 | string): number
    {
        v = convert(v);

        let theta =
            Math.atan(v.values[1] / v.values[0])

        if (v.values[0] < 0)
            theta += Math.PI;

        return theta;
    }

    //% block="distance between %v1 and %v2"
    //% advanced=true
    export function distance(
        v1: Vector2 | string,
        v2: Vector2 | string): number
    {
        v1 = convert(v1);
        v2 = convert(v2);
        
        const x = v2.values[Vector2Components.x] -
                  v1.values[Vector2Components.x];
        
        const y = v2.values[Vector2Components.y] -
                  v1.values[Vector2Components.y];
        
        return Math.sqrt(
            (x * x) + (y * y)
        );
    }

    //% block="convert %v to polar notation"
    //% advanced=true
    export function toPloar(v: Vector2 | string): Vector2
    {
        v = convert(v);
        
        return new Vector2(
            magnitude(v),
            direction(v)
        );
    }

    //% block="convert %v to cartesian notation"
    //% advanced=true
    export function toCartesian(v: Vector2 | string): Vector2
    {
        v = convert(v);

        return new Vector2(
            v.values[0] * Math.cos(v.values[1]),
            v.values[0] * Math.sin(v.values[1])
        );
    }
}