import "./Member.css";
const Member = ({
  no,
  id,
  idCheck,
  pw,
  name,
  email,
  date,
  onUpdate,
  onDelete,
}) => {
  const onChangeCheckbox = () => {
    onUpdate(no);
  };
  const onClickDeleteButton = () => {
    onDelete(no);
  };
  return (
    <>
      <div className="Member">
        <input onChange={onChangeCheckbox} checked={idCheck} type="checkbox" />
        <span className="id">{id}</span>
        <span className="pw">{pw}</span>
        <span className="name">{name}</span>
        <span>{email}</span>
        <span>{new Date(date).toLocaleDateString()}</span>
        <button onClick={onClickDeleteButton}>삭제</button>
      </div>
    </>
  );
};
export default Member;
