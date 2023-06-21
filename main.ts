/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace Vector {
    type Vector2 = { x: number, y: number }

    //% block
    export function CreateVector(x: number, y: number): Vector2 {
        return { x, y };
    }

    //% block
    export function getXFromVector(v: Vector2): number {
        return v.x;
    }

    //% block
    export function getYFromVector(v: Vector2): number {
        return v.y;
    }

    //% block
    export function VectorSerialize(v: Vector2): string {
        return v.x + ',' + v.y;
    }

    //% block
    export function VectorDeserialize(s: string): Vector2 {
        const [x, y]: number[] =
            s.split(',').map(x => +x);
            
        return { x, y };
    }
}

basic.forever(function () {
	
})
