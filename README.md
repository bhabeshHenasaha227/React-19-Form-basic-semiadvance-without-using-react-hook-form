<div align="center">

# ⚡ Forms in React ⚡

### *A focused React 19 practice project for learning controlled forms, uncontrolled refs, validation, events, and TypeScript.*

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-41B883?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

</div>

## 🎯 Overview

Welcome to the **Forms in React** project! This repository is a focused practice space for understanding the most common React form patterns:

- 📝 **Controlled inputs with separate state values**
- 🧱 **Controlled inputs with one state object**
- 🔗 **Uncontrolled inputs with `useRef`**
- ✅ **Basic required-field validation**
- 🎛️ **Text inputs, radio buttons, selects, and checkboxes**

Each lesson is kept in its own component so you can read the complete data flow, predict the result, and practise explaining the React behavior during an interview.

---

## 🗂️ Complete File & Module Breakdown

Here is the exact purpose of every relevant file in the repository:

### 🌐 Entry & Root Configuration
* 📄 **`index.html`** — HTML template and mounting point for Vite.
* 📄 **`src/main.tsx`** — Application entry point initializing `<React.StrictMode>` and `createRoot`.
* 📄 **`src/App.tsx`** — Root component that selects which form lesson is displayed.
* 🎨 **`src/index.css`** — Global reset, typography, colors, and shared layout styles.
* 🎨 **`src/App.css`** — Application layout and visual styles.

### 🧩 Form Lesson Modules
* 📄 **`src/components/simpleform/SimpleForm.tsx`** — Controlled name and email form using separate state values.
* 📄 **`src/components/uncontrolledform/UnControlledForm.tsx`** — Uncontrolled name and email form using input refs.
* 📄 **`src/components/basicvalidationform/BasicValidationForm.tsx`** — Controlled name and email form with required-field validation.
* 📄 **`src/components/multiinputform/MultiInputForm.tsx`** — Multiple controlled inputs managed by one state object.
* 📄 **`src/components/advanceform/AdvanceForm.tsx`** — Mixed controlled inputs managed by one state object.

### ⚙️ Build & Tooling Setup
* 📄 **`package.json`** — Dependency specifications and npm script definitions.
* 📄 **`tsconfig.json`** / **`tsconfig.app.json`** / **`tsconfig.node.json`** — TypeScript compiler options.
* 📄 **`eslint.config.js`** — Modern ESLint Flat Config for the project.
* 📄 **`vite.config.ts`** — Vite bundler configuration and React plugin setup.
* 📁 **`public/`** — Static assets served directly by Vite.

---

## 🗺️ Form Quick Reference

| Module | What It Demonstrates | File |
| :--- | :--- | :--- |
| **Simple Form** | Separate `useState` values for controlled inputs | [`SimpleForm.tsx`](src/components/simpleform/SimpleForm.tsx) |
| **Uncontrolled Form** | Reading input values with `useRef` | [`UnControlledForm.tsx`](src/components/uncontrolledform/UnControlledForm.tsx) |
| **Basic Validation** | Required-field validation and error rendering | [`BasicValidationForm.tsx`](src/components/basicvalidationform/BasicValidationForm.tsx) |
| **Multiple Input Form** | Updating several fields through one state object | [`MultiInputForm.tsx`](src/components/multiinputform/MultiInputForm.tsx) |
| **Advanced Form** | Handling mixed input types in one state object | [`AdvanceForm.tsx`](src/components/advanceform/AdvanceForm.tsx) |
| **App Entry Point** | `StrictMode`, `createRoot`, and the active form mount | [`main.tsx`](src/main.tsx) |

---

## 🧠 Core Form Concepts

The examples move from the simplest form pattern to a complete form with several input types. The main difference is where the current input value lives and when the application reads it.

| Concept | Value is stored in | Value is read or changed | Best for |
| :--- | :--- | :--- | :--- |
| **Controlled input** | React state | Every `onChange` event | Live UI updates, validation, and predictable form state |
| **Uncontrolled input** | The DOM | Submission or a specific ref read | Small forms and cases where live state is unnecessary |
| **Separate state values** | Individual `useState` values | A dedicated setter for each field | Small forms with only a few fields |
| **Shared state object** | One `formData` object | A shared handler using `name` | Forms with many related fields |

### 🔁 Form Event Flow

The controlled examples follow this cycle:

```text
User types or selects a value
          ↓
React receives an onChange event
          ↓
The event handler reads value or checked
          ↓
State is updated
          ↓
React renders the current form value
```

The uncontrolled example follows a different cycle:

```text
User types or selects a value
          ↓
The browser keeps the value in the DOM
          ↓
The submit handler reads ref.current.value
```

Understanding these two flows is the central purpose of this repository.

---

## ✅ Current Validation Lesson

The active lesson in `src/App.tsx` is `BasicValidationForm`. It demonstrates a controlled form with separate state values for a name and email field, plus an error message for missing values.

### 🧱 Controlled Values

Each input receives its value from React state and updates that state through `onChange`:

```tsx
const [name, setName] = useState("");

<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

React is the source of truth for the input. Every change updates state, which causes the component to render with the new value.

### ⚠️ Required-Field Validation

The submit handler prevents the browser's default page refresh and checks both values:

```tsx
if (!name || !email) {
  setError("Please fill all fields!");
} else {
  setError("");
  console.log("Form Submitted : ", { name, email });
  alert("Form Submitted Successfully!");
}
```

When either field is empty, the error message is conditionally rendered. When both fields contain values, the form data is logged and a success alert is shown.

### 🧪 Expected Behavior

| Action | Result |
| :--- | :--- |
| Submit with both fields empty | Displays `Please fill all fields!` |
| Enter only a name and submit | Keeps the validation error visible |
| Enter only an email and submit | Keeps the validation error visible |
| Enter both values and submit | Clears the error, logs the data, and shows a success alert |

The browser also applies its built-in email validation because the email field uses `type="email"`.

---

## 📝 Simple Controlled Form

`SimpleForm.tsx` is the smallest controlled-form example in the project. It keeps `name` and `email` in separate state values:

```tsx
const [email, setEmail] = useState("");
const [name, setName] = useState("");
```

On submit, it prevents the default browser behavior and logs both values. There is no custom validation, so this lesson is useful for first understanding the controlled input pattern.

### 🔍 What to Observe

- The text displayed in each input always comes from React state.
- The `onChange` handler updates only the corresponding state value.
- Submitting the form does not reload the page because `preventDefault()` is called.
- The submitted values are available in the handler because state is current before submission.

This component is available for practice but is not currently mounted by `App.tsx`.

---

## 🔗 Uncontrolled Form

`UnControlledForm.tsx` demonstrates a different approach. The input values are held by the DOM instead of React state:

```tsx
const nameRef = useRef<HTMLInputElement>(null);
const emailRef = useRef<HTMLInputElement>(null);
```

The values are read only when the form is submitted:

```tsx
console.log("Name", nameRef.current?.value);
console.log("Email", emailRef.current?.value);
```

### ⚖️ Controlled vs Uncontrolled Choice

An uncontrolled input can be simpler when the application only needs the values at submit time. A controlled input is usually more useful when the interface must react while the user types, for example by showing live validation, disabling a button, formatting a value, or displaying a character count.

This component is available for practice but is not currently mounted by `App.tsx`.

---

## 🧱 Multiple Input State

`MultiInputForm.tsx` groups the name, email, and age values into one object:

```tsx
const [formData, setFormData] = useState({
  name: "",
  age: "",
  email: "",
});
```

A shared change handler uses each input's `name` attribute to update the correct property:

```tsx
const { name, value } = e.target;

setFormData((prev) => ({
  ...prev,
  [name]: value,
}));
```

The spread operator preserves the other fields while the computed property name updates only the field that changed.

### 🧩 Why the `name` Attribute Matters

Each input has a `name` that matches a property in `formData`:

```tsx
<input name="name" />
<input name="email" />
<input name="age" />
```

That matching name lets one handler update all three fields. Without the spread operator, updating one property would replace the entire object and remove the other values.

This component is available for practice but is not currently mounted by `App.tsx`.

---

## 🎛️ Advanced Mixed-Input Form

`AdvanceForm.tsx` expands the shared-state pattern to several input types:

- Name, email, and age text inputs
- Male and female radio buttons
- A country select with India, USA, and UK options
- A terms-and-conditions checkbox

The same `handleChange` function handles text inputs, radio buttons, and the select through `value`. Checkbox state is read from `checked`:

```tsx
const nextValue =
  e.target instanceof HTMLInputElement && e.target.type === "checkbox"
    ? e.target.checked
    : value;
```

The complete object is logged on submit. The agreement checkbox is controlled, but this sample does not yet prevent submission when it is unchecked.

### 🎚️ Input Value vs Checkbox State

Text inputs, radio buttons, and selects expose their selected data through `value`. A checkbox represents a boolean state, so it must be read through `checked`:

```tsx
const isChecked = e.target.checked;
```

Radio buttons share the `gender` property, while their different `value` attributes determine which option is selected. The `checked` expression compares each radio value with the current state.

This component is available for practice but is not currently mounted by `App.tsx`.

---

## 🧭 How to Study This Project

This repository is designed to be used as an interactive interview-preparation notebook. Each component is intentionally small so you can read the complete form flow and verify your understanding in the browser.

### 1️⃣ Start with the active lesson

Open `src/App.tsx` to see which component is currently rendered:

```tsx
import BasicValidationForm from "./components/basicvalidationform/BasicValidationForm";

function App() {
  return (
    <section id="center">
      <BasicValidationForm />
    </section>
  );
}
```

To study another lesson, uncomment its import and JSX element, then comment out the current form.

### 2️⃣ Read the data flow before the JSX

For each lesson, identify:

- Where the input value is stored: React state or the DOM.
- Which event handler reads or changes the value.
- Whether one state variable or a state object is used.
- How submission is prevented and handled.
- Whether validation happens before the data is accepted.

### 3️⃣ Predict, change, and explain

For every example, use this short practice loop:

1. Predict what the browser will display.
2. Enter values or submit an empty form.
3. Compare the result with your prediction.
4. Explain why React or the DOM produced the result.
5. Run the type checker and linter before keeping the change.

## 🛠️ Available Commands

Run these commands from the project directory:

| Command | Purpose |
| :--- | :--- |
| `npm install` | Install the project dependencies. |
| `npm run dev` | Start Vite's development server with hot module replacement. |
| `npm run lint` | Check the project with ESLint. |
| `npm run build` | Run the TypeScript build and generate the production bundle. |
| `npm run preview` | Preview the generated production build locally. |

A useful verification sequence after editing a lesson is:

```bash
npm run lint
npm run build
```

## 🎤 Interview Discussion Checklist

Use the project to practise answering these questions in your own words:

### Controlled and uncontrolled forms

- What makes an input a controlled component?
- When is an uncontrolled input with `useRef` useful?
- What are the trade-offs between state-driven values and DOM-driven values?
- Why should a form handler call `preventDefault()`?

### State and events

- Why does changing a controlled input cause a component to render again?
- When should you use the functional updater form of a state setter?
- Why does `MultiInputForm` use the spread operator?
- How does the `name` attribute support one shared change handler?

### Validation and input types

- How does conditional rendering display the validation error?
- What is the difference between reading `value` and reading `checked`?
- How do radio buttons use the same state property?
- How would you require the agreement checkbox before submission?
- What additional validation should an email field receive?

### Application setup

- What does `StrictMode` do during development?
- What role does `createRoot` play in starting the React application?
- How does Vite serve and build the TypeScript application?

## 🚀 Next Practice Steps

The current examples provide a foundation for adding more form behavior without changing the existing lessons:

- Add a reset button to each form.
- Show submitted data below the form instead of only logging it.
- Add minimum and maximum length validation to the name field.
- Validate the email format and display a field-specific error.
- Require the agreement checkbox in `AdvanceForm`.
- Add a reusable input component for labels and error messages.
- Add a select option for an empty country value and validate it.
- Create a reusable TypeScript type for each form's state object.

Keep each experiment small and isolated. The goal is to understand the React form decision behind the code, not to hide several concepts inside one large component.

## ✅ Definition of Done for a Lesson

A lesson is ready to discuss in an interview when you can:

- Identify whether each input is controlled or uncontrolled.
- Explain every event handler used by the component.
- Describe where each form value is stored.
- Explain how the form prevents the default browser submission.
- Add validation without introducing a type error.
- Change the example and preserve the other field values.
- Validate the change with `npm run lint` and `npm run build`.

---

## 📚 Learning Philosophy

Form behavior becomes clear through small experiments with visible feedback. Read the component, predict what will happen, submit valid and invalid values, make one deliberate change, observe the browser, and explain the result aloud. This project keeps each example focused so the important state and event decisions remain visible.

## 🌳 Repository Tree

```text
form-in-react/
├── 📁 public/                         # Static assets
├── 📁 src/                            # Source application code
│   ├── 📄 App.tsx                     # Active form lesson root
│   ├── 📄 main.tsx                    # React DOM entry point
│   ├── 🎨 App.css                     # Application styles
│   ├── 🎨 index.css                   # Global styles
│   ├── 📁 assets/                     # Vite and React assets
│   └── 📁 components/
│       ├── 📁 simpleform/
│       │   └── 📄 SimpleForm.tsx      # Separate controlled state
│       ├── 📁 uncontrolledform/
│       │   └── 📄 UnControlledForm.tsx # Uncontrolled refs
│       ├── 📁 basicvalidationform/
│       │   └── 📄 BasicValidationForm.tsx # Required-field validation
│       ├── 📁 multiinputform/
│       │   └── 📄 MultiInputForm.tsx   # Shared object state
│       └── 📁 advanceform/
│           └── 📄 AdvanceForm.tsx      # Mixed input types
├── 📄 eslint.config.js                # Flat ESLint configuration
├── 📄 index.html                      # HTML root template
├── 📄 package.json                    # Project metadata and npm scripts
├── 📄 tsconfig.json                   # Base TypeScript config
├── 📄 tsconfig.app.json               # Frontend TypeScript options
├── 📄 tsconfig.node.json              # Vite TypeScript options
└── 📄 vite.config.ts                  # Vite build settings
```