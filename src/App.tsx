import './App.css'
import useFetch from "./hooks/useFetch.tsx";

interface CommentModel {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}


function App() {
     const comments= useFetch<CommentModel[]>('https://jsonplaceholder.typicode.com/comments', [])

    return (
      <main>
          {JSON.stringify(comments)}
        <h1 className="text-3xl font-bold">
          Hello world!
        </h1>
      </main>
  )
}

export default App
