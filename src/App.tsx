import {useState} from "react";

function App() {
    const [theme, setTheme] = useState<'bg-white' | 'bg-black'>('bg-white')
    const [firstName, setFirstName] = useState<string | null>(null)


    return (
        <main className={theme}>
            <h1 className="text-3xl font-bold">
                {theme}
            </h1>
            <button className={'text-3xl font-bold text-red-500'} onClick={() => {
                setTheme((prevState) => {
                    return prevState === 'bg-white' ? 'bg-black' : 'bg-white'
                })
            }}>
                Click
            </button>
            


            <p className={'text-3xl font-bold text-red-500'}>{firstName}</p>
            <form action="">
                <div style={{width: '250px'}}>
                    <label htmlFor="first_name"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                        name</label>
                    <input type="text" id="first_name" onChange={(event) => {
                        setFirstName(event.target.value)
                    }}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="John" required/>
                </div>
                <button type="submit"
                        className="text-white bg-green-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Green
                </button>
            </form>
        </main>
    )
}

export default App
