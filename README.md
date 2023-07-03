## Description

In the example below `go to definition` for `c.test` works strange - it kind of works, but provides a lot of false positive suggestions. Behavior of `find all references` seems to be normal.

But everything gets worse when I try to use `rename` refactoring for `TestClass.test`. It doesn't work (even though IDE "recognizes" connection between `TestClass.test` and `c.test`).

```typescript
function Decorator<C>(lambda: (c: C) => any) {
    return function (target: C, propertyKey: string): void {

    }
}

class TestClass {
    @Decorator((c) => c.test)
    public test: string;
}
```

## Additional information

Using of other property names has no effect. Switching to older versions of typescript or nodejs also doesn\`t help.

Same refactoring in visual studio code works perfectly.

It seems to me that this issue is not connected with decorators. From time to time I see that webstorm doesn't understand some simple types (that VSC has no problems with). I think issue I created before (<https://youtrack.jetbrains.com/issue/WEB-60510/Typescript-Bug-when-using-the-mixin-pattern-with-generic-class-there-is-no-support-for-almost-all-refactorings>) is also connected with this one (and that case also has perfect support in VSC).
Maybe, there is a problem with LSP integration (if there is one).

I can provide more examples, unfortunately, there are plenty of them. 

## Reproduction

I created repository for easy reproduction of this issue - <https://github.com/azarenkovgd/ts-issue-1>.

## Environment

### Dependencies

1. npm 9.5.1
2. node 18.16.0
3. typescript 5.1.6 (with experimental decorators)

### IDE

1. WebStorm 2023.1.3 (Build #WS-231.9161.29, built on June 15, 2023)
2. JRE 17.0.7+10-b829.16x64
3. Non-Bundled Plugins:
   1. com.github.copilot (1.2.8.2631)

### OS

Windows 11(amd64)
