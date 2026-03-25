# Odin Project: Client-Side Form Validation

## Overview
This project is a custom client-side form validation interface built with vanilla JavaScript and the HTML5 Constraint Validation API. It bypasses default browser UI popups to provide a seamless, custom-styled user experience while maintaining strict accessibility and semantic HTML rules.

## Core Concepts Mastered

* **Semantic HTML Delegation:** Utilizing attributes like `type="email"`, `required`, `minlength`, and dynamic `pattern` (Regex) to let the browser's native engine handle the heavy lifting of data evaluation.
* **The `novalidate` Hijack:** Disabling native, unstylable browser error popups while keeping the background validation state machine active.
* **The `ValidityState` API:** Reading underlying DOM states (`valueMissing`, `typeMismatch`, `patternMismatch`) to trigger custom UI error messages in dedicated DOM nodes.
* **Custom State Overrides:** Using `setCustomValidity()` to manually force invalid states for complex logic that HTML cannot handle natively (e.g., confirming that two password fields match).
* **Evaluation Methods:** Understanding the mechanical distinction between `checkValidity()` (silent background check) and `reportValidity()` (loud check that forces native UI).
* **Modern CSS Feedback:** Utilizing the `:user-invalid` pseudo-class to prevent aggressive error styling before a user has actually interacted with the input.

## Architecture

1. **HTML:** Defines the strict data rules and structural boundaries.
2. **CSS:** Listens for pseudo-class state changes (`:user-invalid`, `:user-valid`) to instantly apply visual feedback without relying on JavaScript class toggling.
3. **JavaScript:** Acts as the state router. It listens for `input` and `blur` events, evaluates the `validity` object, injects specific error strings into sibling `<span>` elements, and serves as the final gatekeeper on the form `submit` event.
