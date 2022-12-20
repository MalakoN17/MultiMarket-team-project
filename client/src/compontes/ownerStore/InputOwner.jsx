
export default function InputOwner(state) {
  return (
    <div>
         <label
                htmlFor={state.type}
                className="mb-3 block  font-medium text-[#07074D] "
              >
                {state.description}
              </label>
           <input
           onChange={state.funChange}
                type={state.type}
                name={state.name}
                value={state.value}
                className=" rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-right"
              />
    </div>
  )
}
