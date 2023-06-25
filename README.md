> Open this page at [https://matiasvlevi.github.io/pxt-vectors/](https://matiasvlevi.github.io/pxt-vectors/)

# Makecode Vector Data Type

Adds the Vector Data type

![main](./assets/main_blocks.png)

<br/>

## Key Features:

- Vector to string conversions: Simplify the process of sending data over radio or serial channels by automatically converting vectors into strings.

- Vector math utilities: Perform various operations on vectors like addition, subtraction, multiplication, and more with the built-in math functions.

<br/>

# Simple Read Example

Here we're reading a vector from the radio. The vector was automatically converted to a string since it was used as one.

the `recievedString` can now be used as a read-only vector.

![example](./assets/example.png)

<br/>

# Mutable Vector Example

Since `recievedString` is not a vector instance, we need to convert it back to a vector and store it to be able to modify/mutate it.

In this example, a `recievedPosition` variable is set to the converted `recievedString`

we then add `1` to both `x` and `y` components

![mutable](./assets/mutable.png)

<br/>

## More blocks

Here are some included utilities

![more](./assets/more.png)

<br/>

## Use Extension

This repository can be added as an **extension** in MakeCode.

- open [https://makecode.microbit.org/](https://makecode.microbit.org/)
- click on **New Project**
- click on **Extensions** under the gearwheel menu
- search for **https://github.com/matiasvlevi/pxt-vectors** and import
