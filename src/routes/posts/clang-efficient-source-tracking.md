# Clang: Efficient Source Tracking 

Sometimes I can't sleep, and on those days, I like to read the [clang](https://github.com/llvm/llvm-project/tree/main/clang) source. Whilst developing my own programming languages I like to see how other performant compilers are implemented, and clang has been a consistent choice (especially for [catk](https://github.com/maxinedeandrade/catk) which is mostly a C frontend). 

Onto the cool stuff. Within [`clang::SourceLocation`](https://clang.llvm.org/doxygen/SourceLocation_8h_source.html), utilized by [`clang::SourceManager`](https://clang.llvm.org/doxygen/classclang_1_1SourceManager.html) something odd appears, why does it only have an ID? Where's my filepath, line and column? (looking at you - mega/parsec). 

```cpp
class SourceLocation {
  friend class ASTReader;
  friend class ASTWriter;
  friend class SourceManager;
  friend struct llvm::FoldingSetTrait<SourceLocation, void>;
  friend class SourceLocationEncoding;
 
public:
  using UIntTy = uint32_t;
  using IntTy = int32_t;
 
private:
  UIntTy ID = 0;

// ...
}
```

So what defines the ID? It's just an offset within source files, among all source files - as if it's one large source file. There's one interesting bit I omitted: 

```cpp
enum : UIntTy { MacroIDBit = 1ULL << (8 * sizeof(UIntTy) - 1) };
```

There's a bit thats ticked if the `SourceLocation` is within a macro expansion! Later down in the definition they define a method `getMacroLoc` which just toggles it off.

```cpp
class SourceLocation {
//...

static SourceLocation getMacroLoc(UIntTy ID) {
  assert((ID & MacroIDBit) == 0 && "Ran out of source locations!");
  SourceLocation L;
  L.ID = MacroIDBit | ID;
  return L;
}

//...
};
```

Seeing the neat tricks that clang has given us, here's how we'd implement this in Rust:

WIP!