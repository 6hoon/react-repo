import './MemberList.css'

const MemberList = ({no,id,idCheck,pwd,name,email,date, onUpdate, onDelete}) => {
  const onChangeCheckbox = () => {
    onUpdate(no);
  }
  const onClickDelete = () => {
    onDelete(no);
  }
  return(
      <div className="memberList">
        <input readOnly type="checkbox" checked={idCheck}
        onChange={onChangeCheckbox}/>
        <span className="id">{id}</span>
        <span className="pwd">{pwd}</span>
        <span className="name">{name}</span>
        <span>{email}</span>
        <span>{new Date(date).toLocaleDateString()}</span>
        <button onClick={onClickDelete}>삭제</button>
      </div>
  )
}
export default MemberList;