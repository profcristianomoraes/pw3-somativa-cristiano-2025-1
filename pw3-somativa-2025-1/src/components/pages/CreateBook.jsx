import React from "react";
import style from './CreateBook.module.css'

import Input from "../form/Input";
import Select from "../form/Select";
import Button from "../form/Button";

const CreateBook = ()=>{
    return(

        <section className={style.create_book_container}>

            <h1>CADASTRO DE LIVRO</h1>

            <Input
                text='Nome do livro'
                type='text'
                name='txt_livro'
                id='txt_livro'
                placeholder='Digite o nome do livro'
            />

            <Input
                text='Autor do livro'
                type='text'
                name='txt_autor'
                id='txt_autor'
                placeholder='Digite o nome do autor do livro'
            />

            <Input
                text='Descrição do livro'
                type='text'
                name='txt_descricao'
                id='txt_descricao'
                placeholder='Digite a descrição do livro'
            />

            <Select 
                name='slc_categoria'
                id='slc_categoria'
                text='Categoria do livro'
            />

            <Button
                label='CADASTRAR LIVRO'
            />

        </section>

    )
}

export default CreateBook