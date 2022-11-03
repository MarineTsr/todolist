function TodoAdd() {
  return (
    <form>
      <div className="input-group">
        <input
          type="text"
          placeholder="Ajouter une tâche"
          className="form-control"
        />
        <button type="submit" className="input-group-text btn btn-primary">
          Valider
        </button>
      </div>
    </form>
  );
}

export default TodoAdd;
