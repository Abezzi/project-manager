import { useRef } from "react";
import "./styles.css"
import TodoList from '../TodoList/TodoList'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form
            className='input'
            onSubmit={
                (e) => {
                    handleAdd(e)
                    inputRef.current?.blur()
                }
            }
        >
            <input
                ref={inputRef}
                className="input__box"
                placeholder="Enter a task..."
                type="input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                className="input__submit"
                type="submit">Go
            </button>
        </form>
    )
}

export default InputField