type Todo = {
  id: number;
  task: string;
  status: boolean;
  date: string;
  createdAt: string;
  updatedAt: string;
};

type TodoProps = {
  todo: Todo;
};

export const Row = ({ todo: { task, status } }: TodoProps) => (
  <div>
    <p>{task}</p>
    <div>
      <button aria-label="Hapus Todo" onClick={() => null}>
        HAPUS
      </button>
      <input type="checkbox" checked={status} onChange={() => null} />
    </div>
  </div>
);
