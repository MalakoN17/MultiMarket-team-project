

export default function InputProduct(state) {
  return (
    <>
    <label
      htmlFor={state.name}
      className="mb-3 block text-base font-medium text-[#07074D] text-right"
    >
      {state.textLabel}
    </label>
    <input
    onChange={state.funChange}
      name={state.name}
      type={state.type}
      placeholder={state.placeholder}
      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right"
      max={state.max}
      min={state.min}
      value={state.value}
    />
    </>
  )
}
