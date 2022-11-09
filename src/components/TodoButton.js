function TodoButton({ label, className, ...props }) {
  return (
    <button className={`btn ${className}`} {...props}>
      {label}
    </button>
  );
}

export default TodoButton;
