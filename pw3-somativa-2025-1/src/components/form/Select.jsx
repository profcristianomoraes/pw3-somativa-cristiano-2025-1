import style from './Select.module.css'

function Select({text, name, id, handlerChange}) {
    return(
        <div className={style.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={id} onChange={handlerChange}>
                <option value="">Selecione uma categoria</option>
                <option value="">Ficçãop cientifica</option>
                <option value="">Fantasia heroica</option>
                <option value="">Suspense</option>
                <option value="">Terror</option>
            </select>

        </div>
    )
}

export default Select;