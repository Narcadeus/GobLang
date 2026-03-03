# GobLang Specification (Normative) — v0.1

This document is the **language authority** for GobLang.

- If behavior in any implementation conflicts with this file, **this file wins**.
- Language features, syntax, and runtime semantics are defined normatively in `SPEC.md`.
- Breaking language changes require a version bump to this specification.

## Reference implementation

`src/core/interpreter.js` is the current **reference implementation**.

- The reference implementation is expected to follow this specification.
- Any mismatch should be resolved by updating implementations to match `SPEC.md`.

### Reference implementation interface (required)

The reference implementation must expose a stable conformance entrypoint:

- Node: export `run(source, opts?)`.
- Success shape: return `{ stdout }` and optionally `{ stderr, warnings }`.
- Error shape: report deterministic structured errors containing `{ line, col, message }` (either by throwing structured errors or returning them consistently).

## Additional implementations

Alternative implementations (for example, a Python interpreter) are optional **conformance implementations**.

- They are welcome, but they are not language-defining.
- They must pass the conformance suite before being considered compliant.

## Conformance policy

Conformance tests are normative and must reflect `SPEC.md`.

- If a conformance test contradicts `SPEC.md`, update the test to match `SPEC.md`.

Required conformance commands:

1. `npm run test:conformance` — runs SPEC example extraction and golden fixtures.
2. `node tests/conformance/run.js --impl <path-to-implementation-entrypoint>` — runs the implementation adapter matrix against the same suite.

For non-Node implementations, run an implementation-specific adapter, for example:

- `python tests/conformance/run.py --impl <path-to-python-implementation>`

An implementation is only considered conformant when all required conformance commands exit successfully.
