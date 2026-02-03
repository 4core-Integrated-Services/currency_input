import { useState, useEffect, forwardRef } from "react";

const CurrencyInput = forwardRef(
  (
    {
      value: propValue = 0,
      onChange,
      currency = "NGN",
      locale = "en-NG",
      className = "",
      decimals = 2,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState(propValue);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      setInternalValue(propValue);
    }, [propValue]);

    const formatValue = (val) => {
      if (val === "" || val === undefined || val === null) return "";
      const num = parseFloat(val);
      if (isNaN(num)) return "";

      const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
      return formatter.format(num);
    };

    const parseValue = (str) => {
      return str.replace(/[^0-9.]/g, "").replace(/(\..*?)\./g, "$1");
    };

    const handleChange = (e) => {
      const raw = parseValue(e.target.value);
      setInternalValue(raw);
      if (onChange) {
        const numberValue = raw === "" ? 0 : parseFloat(raw);
        onChange(isNaN(numberValue) ? 0 : numberValue);
      }
    };

    const displayValue = isFocused ? internalValue : formatValue(internalValue);

    return (
      <input
        ref={ref}
        type="text"
        inputMode="decimal"
        value={displayValue}
        onChange={handleChange}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...props}
      />
    );
  },
);

export default CurrencyInput;
