const BoardMemberCard=(props)=>{
    const imggg=props.data.img
    return(
        <>
            <div className="card">
                <img className="boardimg" src={require(`../images/board/${props.data.img}`)} alt="img" />
                <p className="name">{props.data.name}</p>
                <p className="role">{props.data.role}</p>
                <p className="desc">{props.data.desc}</p>
            </div>
        </>
    )
}

export default BoardMemberCard;