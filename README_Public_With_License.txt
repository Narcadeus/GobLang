# GobLang Web Compiler (Public Version with GPLv3 License)

## 🚀 Live GobLang Web Compiler
This repository hosts the **GobLang Web Compiler**, allowing users to **write & run GobLang code directly in a browser**.

## 🔒 License Protection
- This project is licensed under **GPLv3** to ensure **all modifications remain open-source**.
- **No one can take GobLang and make it private or commercial without sharing their code**.
- If you use or modify GobLang, **you must credit the original developers**.

## 🔧 How to Use:
1. **Open `GobLang_Web_Compiler.html`** in your browser.
2. **Type your GobLang code** in the text editor.
3. **Click "Run GobLang"** to execute the code.

## 🌍 Hosting on GitHub Pages
To deploy this Web Compiler:
1. Go to **Settings → Pages**.
2. Select **"Deploy from Branch"** under **Source**.
3. Choose **"main"** and click **"Save"**.
4. GitHub will generate a **free public URL** where the compiler is accessible.

## 🔥 Example GobLang Code
```goblang
hoard = 50
shout "Only make hoard bigger!"
```

## 🚀 Next Steps
- **Expand GobLang** with Web3 & AI (private repo).
- **Integrate a smart contract** for GobLang hoards.
- **Host the full ecosystem on Cloudflare Pages.**

Enjoy your GobLang journey! 👑🔥

## 📘 Language Authority & Conformance
- `SPEC.md` (GobLang v0.1) is the **language authority**.
- `src/core/interpreter.js` is the current **reference implementation**.
- Additional implementations (for example, Python) are optional **conformance implementations** and must pass conformance tests.

### Reference implementation interface (required)
- Node reference implementation must export `run(source, opts?)`.
- Success shape: `{ stdout }` (optional `{ stderr, warnings }`).
- Error shape: deterministic structured `{ line, col, message }` errors (thrown or returned consistently).

### Conformance policy
Conformance tests are normative and must reflect `SPEC.md`.
If a conformance test contradicts `SPEC.md`, update the test to match `SPEC.md`.

Any future implementation must pass these required commands:
1. `npm run test:conformance` (SPEC example extraction + golden fixtures)
2. `node tests/conformance/run.js --impl <path-to-implementation-entrypoint>` (implementation adapter matrix against the same suite)

For non-Node implementations, run an implementation-specific adapter (for example):
- `python tests/conformance/run.py --impl <path-to-python-implementation>`
