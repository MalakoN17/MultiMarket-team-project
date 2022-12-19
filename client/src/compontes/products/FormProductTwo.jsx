import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { settingProduct } from '../../features/product/produceSlice';

export default function FormProductTwo() {
  const item = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({ measureUnits: '', weight: 0, manufacturer: '', subcategory: '' })
  const [parallelImporter, setParallelImporter] = useState({ parallelImporter: false })
  const { measureUnits, weight, manufacturer, subcategory } = product;
  const navigate = useNavigate()

  useEffect(() => {
    if (item) {
      setProduct(item)
    }
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleChange = (event) => {
    setParallelImporter({
      ...parallelImporter,
      [event.target.name]: event.target.checked,
    });
  };

  const handleForm = (e) => {
    e.preventDefault()
    dispatch(settingProduct({ ...item, product, parallelImporter }))
    navigate('/addproduct/formproductthree')
  };

  return (
    <div>

      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">

          <form className="py-6 px-2" onSubmit={handleForm}>

          
            <div>
              <button className="hover:shadow-form w-full mt-4 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                העלאת מוצר
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}