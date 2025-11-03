## 😴 Challenge 2: Freddy Krueger - "Count the Sheep"

### 📖 Story

It's midnight on **Elm Street** and you desperately need to sleep. You try to count sheep, but the letters in your mind are completely **scrambled by Freddy**.

You have a chaotic string of text with mixed letters. Your only escape is to count how many times you can form the word **"sheep"** before Freddy catches you in the nightmare.

**Your mission:** Count how many complete sheep you can form with the available letters.

### 💻 The Challenge

Create a function `countSheep(letters)` that:

*   Receives a `string` with scrambled letters
*   Counts how many times you can form the word **"sheep"**
*   Returns the number of complete sheep you can count

**Important:** To form "sheep" you need: `s`, `h`, `e`, `e`, `p` (the `'e'` appears 2 times)

### 📝 Examples
```typescript
countSheep('sheepxsheepy')
// → 2 (you can form "sheep" twice)

countSheep('sshhheeeepppp')
// → 2 (s=2, h=3, e=4, p=4 → only 2 complete "sheep")

countSheep('hola')
// → 0 (not enough letters)

countSheep('peesh')
// → 1 (letters are scrambled but they're all there)
```
