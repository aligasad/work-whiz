function Pills({ role, currentRole, setCurrentRole }) {
  return (
    <div id="pills"
      onClick={() => setCurrentRole(role)}
      className={` ${
        role == currentRole ? "bg-gray-100" : ""
      }`}
    >
      {role}
    </div>
  );
}

export default Pills;
