
const Find = () => {
    return(
        <div className="flex flex-col justify-start bg-white mt-12 drop-shadow-xl items-start py-6 px-2">
            <h2 className="text-black font-bold sm:text-xl md:text-2xl text-lg">Find A Doctor</h2>
            <form className="pt-4 flex flex-row flex-wrap justify-between gap-4">
                <input type="text" 
                    className="outline-none rounded py-1 text-sm pl-2 border border-gray-300 placeholder:text-gray-600 text-black bg-white" 
                    placeholder="Doctor"    
                />
                <select name="" id="" className="text-gray-700 border rounded border-gray-300 text-sm outline-none">
                    <option value="" selected disabled>...speciality...</option>
                    <option value="">Gaenicology</option>
                    <option value="">Neurosology</option>
                </select>

            </form>
        </div>
    )
}


export default Find