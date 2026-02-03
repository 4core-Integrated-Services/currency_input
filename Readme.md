# @4core/currency-input

A configurable currency input component for React, styled with Tailwind CSS classes.

## Installation

```bash
npm install @4core/currency-input
```

## Usage

### Basic Example

```jsx
import { useState } from "react";
import CurrencyInput from "@4core/currency-input";

function App() {
  const [amount, setAmount] = useState(0);

  return (
    <div className="p-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Enter Amount
      </label>
      <CurrencyInput value={amount} onChange={(value) => setAmount(value)} />
      <p className="mt-2 text-sm text-gray-500">Current Value: {amount}</p>
    </div>
  );
}
```

### Advanced Configuration

Customize currency, locale, and decimal precision.

```jsx
<CurrencyInput
  value={amount}
  onChange={setAmount}
  currency="EUR"
  locale="de-DE"
  decimals={2}
  placeholder="€0,00"
  className="w-full border-blue-500"
/>
```

### Form Integration (React Hook Form)

The component forwards its `ref`, making it easy to integrate with form libraries.

```jsx
import { useForm } from "react-hook-form";
import CurrencyInput from "@4core/currency-input";

function OrderForm() {
  const { register, handleSubmit, setValue, watch } = useForm();

  // Watch value to pass it back to the component for formatting
  const amount = watch("amount");

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Total Cost</label>
        <CurrencyInput
          {...register("amount")}
          value={amount}
          onChange={(val) => setValue("amount", val)}
          currency="USD"
          locale="en-US"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Props

| Prop        | Type                      | Default     | Description                                             |
| ----------- | ------------------------- | ----------- | ------------------------------------------------------- |
| `value`     | `number`                  | `0`         | The numeric value of the input.                         |
| `onChange`  | `(value: number) => void` | `undefined` | Callback fired when value changes. Returns a number.    |
| `currency`  | `string`                  | `"NGN"`     | The ISO 4217 currency code (e.g., "USD", "EUR").        |
| `locale`    | `string`                  | `"en-NG"`   | The BCP 47 language tag for formatting (e.g., "en-US"). |
| `decimals`  | `number`                  | `2`         | Number of decimal places to enforce.                    |
| `className` | `string`                  | `""`        | Additional Tailwind CSS classes.                        |

Any other props (like `disabled`, `placeholder`, `id`, `name`) are passed directly to the underlying `input` element.
