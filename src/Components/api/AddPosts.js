const AddPosts = ({ setPost }) => {
    return (
        <form>
            <div className="row g-3">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Titulo"
                    />
                </div>
                <div className="col">
                    <input
                        type="number"
                        className="form-control"
                        id="idUser"
                        placeholder="Id Usuario" />
                </div>
                <div className="col-md-12 form-floating">
                    <input
                        type="password"
                        class="form-control"
                        id="body"
                        placeholder="Cuerpo" />
                    <label for="body">Cuerpo</label>
                </div>
            </div>
        </form>
    )
}

export default AddPosts
