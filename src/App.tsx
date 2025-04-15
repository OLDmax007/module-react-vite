import PostsComponent from "./components/posts-component/PostsComponent.tsx";
import TodosComponent from "./components/todos-component/TodosComponent.tsx";
import CommentsComponent from "./components/comments-component/CommentsComponent.tsx";

function App() {


    return(<main>
            <TodosComponent/>
            <hr/>
            <PostsComponent/>
            <hr/>
            <CommentsComponent/>
        </main>
    );
}; 

export default App
